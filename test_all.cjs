const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 450, height: 850 });
  await page.goto('http://127.0.0.1:5180/');
  await page.waitForTimeout(1000);

  // Take map screenshot
  await page.screenshot({ path: '/Users/qiushuanglong/Documents/Codex/2026-06-03/goal-90/outputs/screen_map.png' });
  console.log("Map screenshot saved");

  // Click start lesson
  const buttons = await page.locator('button').all();
  console.log("Found buttons:", buttons.length);
  await buttons[1].click(); // Start lesson
  await page.waitForTimeout(1000);

  // Take first exercise screenshot
  await page.screenshot({ path: '/Users/qiushuanglong/Documents/Codex/2026-06-03/goal-90/outputs/screen_ex1.png' });
  console.log("Ex1 screenshot saved");

  await browser.close();
})();
