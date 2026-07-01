const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const outDir = '/Users/qiushuanglong/Documents/Codex/2026-06-03/goal-90/outputs';

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:5180/');
  await page.waitForTimeout(1500);
  
  // Click first lesson node
  const lessonBtns = await page.$$('button');
  let clicked = false;
  for (const btn of lessonBtns) {
    const disabled = await btn.getAttribute('disabled');
    if (disabled === null) {
      const text = await btn.textContent();
      // Skip reset button, skip "GitLingo" area 
      if (text.trim() === '' || text.includes('Sign Up') || text.includes('Star')) {
        await btn.click();
        clicked = true;
        break;
      }
    }
  }
  
  if (!clicked) {
    // fallback: click first non-disabled button
    const firstBtn = await page.$('button:not([disabled])');
    if (firstBtn) { await firstBtn.click(); clicked = true; }
  }
  
  await page.waitForTimeout(2000);
  await page.screenshot({ path: `${outDir}/fix-exercise-before.png` });
  
  // Now find exercise option buttons (they have number prefix like "1", "2")
  const allBtns = await page.$$('button:not([disabled])');
  for (const btn of allBtns) {
    const text = await btn.textContent();
    if (/^\d/.test(text.trim())) {
      await btn.click();
      await page.waitForTimeout(800);
      break;
    }
  }
  
  await page.screenshot({ path: `${outDir}/fix-feedback-result.png` });

  await browser.close();
  console.log("Done");
})();
