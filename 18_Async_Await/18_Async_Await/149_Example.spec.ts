import { test, expect } from '@playwright/test';

test('uses await in a Playwright test', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await expect(page).toHaveTitle(/Playwright/);

    let value = await getExampleValue();
    expect(value).toBe('abc');
});

async function getExampleValue() {
    return 'abc';
}


//page.goto() returns a Promise because loading a web page takes time.
//page is a Playwright-provided fixture representing a browser page/tab.
//test → used to create a test.
//expect → used to verify/assert something.