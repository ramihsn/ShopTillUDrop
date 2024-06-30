import { test, expect } from '@playwright/test';

test('footer links are present and functional', async ({ page }) => {
    await page.goto('/');

    const links = [
        { text: 'Privacy Policy', href: '#privacy' },
        { text: 'Terms of Service', href: '#terms' },
        { text: 'Contact Us', href: '#contact' },
    ];

    for (const link of links) {
        const footerLink = page.locator(`footer a:has-text("${link.text}")`);
        await expect(footerLink).toHaveAttribute('href', link.href);
    }

    const copyrightText = page.locator('footer p');
    await expect(copyrightText).toHaveText(/Shop Till U Drop/);
});
