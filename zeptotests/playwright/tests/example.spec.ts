import { test, expect } from '@playwright/test';

test("has btn", async ({page}) => {

  // const browser = await chromium.launch();

  // const page = await browser.newPage();

  await page.goto('http://frontend:80');

  const loginbtn = await page.getByRole('button', {name: "Login"});
  const createbtn = await page.getByRole('button', {name: "Create"});

  await expect(loginbtn).toBeVisible();
  await expect(createbtn).toBeVisible();
})
