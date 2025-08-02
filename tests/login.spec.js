import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page.js';
import { acceptedUsers, password } from '../utils/testData.js';
import { getRandomUsername } from '../utils/helpers.js';

test('Login using a random valid user', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const randomUsername = getRandomUsername(acceptedUsers);

  await loginPage.goto();
  await loginPage.login(randomUsername, password);

  // Validate login success
  await expect(page).toHaveURL(/.*inventory/); // after successful login
});
