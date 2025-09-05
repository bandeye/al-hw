import { test, expect } from '@playwright/test';

test('login - positive test', async ({ page }) => {
  await page.goto('/');

  // Fill out form with valid credentials
  await page.getByPlaceholder('Username').fill(process.env.USERNAME);
  await page.getByPlaceholder('Password').fill(process.env.PASSWORD);
  await page.locator('#login-button').click();

  // Expects landing page.
  await expect(page.locator('.title')).toBeVisible();

  // Logout
  await page.locator('#react-burger-menu-btn').click();
  await page.locator('#logout_sidebar_link').click();
  await expect(page.locator('#login-button')).toBeVisible();
});

test('login - negative test', async ({ page }) => {
  await page.goto('/');

  // Fill out form with invalid credentials
  await page.getByPlaceholder('Username').fill('asd');
  await page.getByPlaceholder('Password').fill('asd');
  await page.locator('#login-button').click();

  // Expects error message to be visible.
  await expect(page.locator('div.error')).toBeVisible();
});
