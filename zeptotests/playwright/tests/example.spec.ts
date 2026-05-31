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

test("create and login", async ({page}) => {

  const customer = "matt1234"
  
  await page.goto('http://frontend:80');

  const createInput = await page.getByPlaceholder('Username', {exact:true});

  await expect(createInput).toBeVisible();

  await createInput.fill(customer);

  const createBtn = await page.getByRole('button', {name: "Create"});

  await expect(createBtn).toBeVisible();

  await createBtn.click()

  await expect(page
              .getByRole("heading")
              .filter({hasText: "SUCCESS"}))
              .toBeVisible()

  const signinInput = await page.getByPlaceholder('Enter Username', {exact:true});
  const signinBtn = await page.getByRole('button', {name: "Login"});
  await signinInput.fill(customer)
  await signinBtn.click()

  await expect(page)
              .toHaveURL(new URLPattern({pathname: '*/searchProducts*'}));

  await expect(page
              .getByRole("heading")
              .filter({hasText: customer}))
              .toBeVisible()


})
