import { test, expect } from '@playwright/test';

test('contact page displays and submits form', async ({ page }) => {
    await page.goto('/contact');

    await expect(page.locator('h1')).toHaveText('Contact Us');
    await expect(page.locator('form')).toBeVisible();

    await page.fill('#name', 'John Doe');
    await page.fill('#email', 'john.doe@example.com');
    await page.fill('#message', 'Hello!');

    await page.click('button[type="submit"]');

    // Check for form submission logic here
    await expect(page).toHaveURL('/contact');
    // Alternatively, check for an alert or other confirmation message
});
