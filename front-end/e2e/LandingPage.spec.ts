import { test, expect } from '@playwright/test';
import { promotions, categories } from '../src/mockData.js';

test('landing page displays promotions and categories', async ({ page }) => {
    await page.goto('/');

    // Check promotions
    for (const promo of promotions) {
        const promoElement = page.locator(`.promotion:has-text("${promo.title}")`);
        await expect(promoElement).toBeVisible();
    }

    // Check categories
    for (const category of categories) {
        const categoryElement = page.locator(`.category:has-text("${category.name}")`);
        await expect(categoryElement).toBeVisible();
    }
});
