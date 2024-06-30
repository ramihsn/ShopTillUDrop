import { test, expect } from '@playwright/test';

test('contact page displays and submits form', async ({ page }) => {
  await page.goto('/contact');

  // Ensure the page has loaded correctly
  await expect(page.locator('h1')).toHaveText('Contact Us');
  await expect(page.locator('form')).toBeVisible();

  // Fill the form
  await page.fill('#name', 'John Doe');
  await page.fill('#email', 'john.doe@example.com');
  await page.fill('#message', 'Hello, this is a test message.');

  // Submit the form
  await page.click('button[type="submit"]');

  // Check for the success message
  await expect(page.locator('.success-message')).toBeVisible();
  await expect(page.locator('.success-message')).toHaveText('Your message has been sent successfully!');
});
