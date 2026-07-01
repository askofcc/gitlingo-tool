const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const outDir = '/Users/qiushuanglong/Documents/Codex/2026-06-03/goal-90/outputs';

  // Mobile map - top
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:5180/');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: `${outDir}/v2-mobile-top.png` });

  // Scroll to see unit boundary
  await page.evaluate(() => window.scrollBy(0, 600));
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${outDir}/v2-mobile-mid.png` });

  // Exercise view
  await page.goto('http://localhost:5180/');
  await page.waitForTimeout(1500);
  const btns = await page.$$('button:not([disabled])');
  for (const btn of btns) {
    const text = await btn.textContent();
    if (text.trim() === '') {
      await btn.click();
      break;
    }
  }
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `${outDir}/v2-exercise.png` });

  // Answer + feedback
  const allBtns = await page.$$('button:not([disabled])');
  for (const btn of allBtns) {
    const text = await btn.textContent();
    if (/^\d/.test(text.trim())) {
      await btn.click();
      await page.waitForTimeout(800);
      break;
    }
  }
  await page.screenshot({ path: `${outDir}/v2-feedback.png` });

  await browser.close();
  console.log("Done");
})();
