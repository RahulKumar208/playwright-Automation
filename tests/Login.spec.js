const { test, expect } = require('@playwright/test');

test('Home Page', async ({page})=> {

    await page.goto('https://demoblaze.com/index.html')

    //clcik on login button
    //await page.locator('id=login2').click();
    await page.click('id=login2')

    await page.fill("//input[@id='loginusername']",'qatesting123')

    await page.fill("//input[@id='loginpassword']",'pass123#')

    await page.click("//button[normalize-space()='Log in']")

    const logoutlink = await page.locator("(//a[normalize-space()='Log out'])[1]")

    await expect(logoutlink).toBeVisible();

    await page.close()

} )