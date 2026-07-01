const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://gitlingo.srint.cn', { timeout: 15000 });

  const seo = await page.evaluate(() => {
    const title = document.title;
    const description = document.querySelector('meta[name="description"]')?.content;
    const keywords = document.querySelector('meta[name="keywords"]')?.content;
    const author = document.querySelector('meta[name="author"]')?.content;
    const ogTitle = document.querySelector('meta[property="og:title"]')?.content;
    const ogDesc = document.querySelector('meta[property="og:description"]')?.content;
    const ogImage = document.querySelector('meta[property="og:image"]')?.content;
    const ogUrl = document.querySelector('meta[property="og:url"]')?.content;
    const viewport = document.querySelector('meta[name="viewport"]')?.content;

    return {
      title,
      description,
      keywords,
      author,
      ogTitle,
      ogDesc,
      ogImage,
      ogUrl,
      viewport
    };
  });

  console.log('SEO Assessment:', JSON.stringify(seo, null, 2));
  await browser.close();
})();
