const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://playwright.dev/');
  await page.getByRole('heading', { name: 'Playwright enables reliable' }).click();
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('heading', { name: 'Installation' }).click();
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('link', { name: 'Playwright logo Playwright' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByLabel('Star microsoft/playwright on').click();
  const page1 = await page1Promise;
  await page.getByRole('button', { name: 'Node.js' }).click();
  // await expect(page.locator('h1')).toContainText('Playwright enables reliable end-to-end testing for modern web apps.');

  // ---------------------
  await context.close();
  await browser.close();
})();