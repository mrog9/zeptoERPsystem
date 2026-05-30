import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173');

  const btn = await page.getByRole('button')

  await expect(btn).toBeVisible()
});
