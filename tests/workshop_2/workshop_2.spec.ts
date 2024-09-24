import {test, expect} from "@playwright/test";
import { threadId } from "worker_threads";

test("Autmating Form Submissions", async ({page})=>{
    await page.goto('https://demo.playwright.dev/todomvc');

    const toDO = page.getByPlaceholder('What needs to be done?');
    await toDO.fill('Lamda test');
    await toDO.press('Enter');
    await toDO.fill('TEST TEST');
    await toDO.press('Enter');
    await toDO.fill('Delete this one')
    await toDO.press('Enter')

    const firstToDO = page.getByTestId('todo-item').nth(0);
    await firstToDO.getByRole('checkbox').click();
    await expect(firstToDO).toHaveClass('completed')

    const secondToDO = page.getByTestId('todo-item').nth(1);
    await secondToDO.getByRole('checkbox').click();
    await secondToDO.getByRole('checkbox').click();
    await expect(secondToDO).not.toHaveClass('completed');

    const thirdToDO = page.getByTestId('todo-item').nth(2);
    await thirdToDO.hover();
    await thirdToDO.getByRole('button', {name: 'Delete'}).click();


    await page.waitForTimeout(4000);
})


test("Handeling Form", async ({page}) => {

    await page.goto('https://demo.playwright.dev/todomvc');
    await page.fill('[placeholder="What needs to be done?"]', 'Test First Fill');
    await page.locator('[placeholder="What needs to be done?"]').press('Enter');
    await page.locator('.toggle').check()
    
    await page.waitForTimeout(3000);
})

test("Handeling Form", async ({page}) => {

    await page.goto('https://demo.playwright.dev/todomvc');
    const placeholder = '[placeholder="What needs to be done?"]''
    await page.fill(placeholder, 'Test First Fill');
    await page.locator(placeholder).press('Enter');

    const checkbox = await page.locator('.toggle');
    await checkbox.check();
    
    await page.waitForTimeout(3000);
})

