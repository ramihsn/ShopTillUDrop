import { test, expect } from '@playwright/test';

test('navigation bar links are present and functional', async ({ page }) => {
    await page.goto('/');

    const links = [
        { text: 'Home', href: '/' },
        { text: 'Shop', href: '#shop' },
        { text: 'Categories', href: '#categories' },
        { text: 'About Us', href: '#about' },
        { text: 'Contact Us', href: '#contact' },
    ];

    for (const link of links) {
        const navLink = page.locator(`nav a:has-text("${link.text}")`);
        await expect(navLink).toHaveAttribute('href', link.href);
    }
});
