import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';

test("has btn", async ({page}) => {

  // const browser = await chromium.launch();

  // const page = await browser.newPage();

  await page.goto('http://localhost:5173');

  const btn = await page.getByRole('button');

  await expect(btn).toBeVisible();
})();
