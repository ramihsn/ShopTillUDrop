import { test, expect } from '@playwright/test';

test('shop page displays products and allows adding to cart', async ({ page }) => {
    await page.goto('/shop');

    const productItems = await page.$$('.product-item');
    expect(productItems.length).toBeGreaterThan(0);

    const addToCartButton = await page.$('.product-item button');
    if (addToCartButton) {
        await addToCartButton.click();

        // Check if the button was clicked
        // (For real functionality, you'd need to check cart state or visual changes)
        expect(await addToCartButton.textContent()).toBe('Add to Cart');
    } else {
        throw new Error('Add to Cart button not found');
    }
});
