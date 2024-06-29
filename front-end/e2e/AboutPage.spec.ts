import { test, expect } from '@playwright/test';

test('about page displays correct content', async ({ page }) => {
    await page.goto('/about');

    // Check if the main sections are visible within the .about-page scope
    const aboutPage = page.locator('.about-page');

    await expect(aboutPage.locator('h1')).toHaveText('About Us');
    await expect(aboutPage.locator('p').nth(0)).toContainText('Welcome to Shop Till U Drop!');
    await expect(aboutPage.locator('p').nth(1)).toContainText('Founded in 2024');
    await expect(aboutPage.locator('p').nth(2)).toContainText('Thank you for choosing Shop Till U Drop');
});
