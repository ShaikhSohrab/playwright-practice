import {test} from "@playwright/test";

test.skip("Basic Navigation", async ({page}) => {
    await page.goto("https://gitlab.com/");
    await page.click("a.slp-btn.be-nav__nav-button.slp-btn-primary");
    // await page.locator('[data-testid="new-user-first-name-field"]').fill('John1');
    // await page.locator('[data-testid="new-user-last-name-field"]').fill('Snow1');
    await page.getByTestId('new-user-first-name-field').fill('John2')
    await page.getByTestId('new-user-last-name-field').fill('Snow2')
    await page.waitForTimeout(5000);
    
})

test.only("Using Various Locator Methods", async({page})=>{
    
})