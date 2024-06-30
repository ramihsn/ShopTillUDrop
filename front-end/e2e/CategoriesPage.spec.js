import { test, expect } from '@playwright/test';
import { categories } from '../src/mockData.js';

test('categories page displays categories', async ({ page }) => {
    await page.goto('/categories');

    // Check categories
    for (const category of categories) {
        const categoryElement = page.locator(`.category:has(h3:has-text("${category.name}"))`);
        await expect(categoryElement).toBeVisible();
    }
});
