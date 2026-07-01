const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 450, height: 800 });
  await page.goto('http://127.0.0.1:5180/');
  await page.waitForTimeout(1000);
  // Click the first lesson button. The button has disabled=false and is a circular button.
  // It has a Star icon or Check icon inside. Let's find buttons inside UnitMap.
  const buttons = await page.$$('button');
  console.log("Total buttons found on home page:", buttons.length);
  // Let's click the first button that has no Lock icon (which means it's unlocked and clickable)
  // Let's just click the first button we find in the map, which should be the first lesson node.
  // The first button in Header is reset progress (icon button). The second one should be the lesson.
  await buttons[1].click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/Users/qiushuanglong/Documents/Codex/2026-06-03/goal-90/outputs/screen_lesson.png' });
  await browser.close();
  console.log("Lesson Screenshot taken");
})();
