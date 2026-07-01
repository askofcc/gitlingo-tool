const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 450, height: 800 });
  await page.goto('http://localhost:5180/');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/Users/qiushuanglong/Documents/Codex/2026-06-03/goal-90/outputs/screen.png' });
  await browser.close();
  console.log("Screenshot taken");
})();
