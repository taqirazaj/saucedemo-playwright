import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.actions.js';
import { LogoutActions } from '../pages/logout.actions.js';
import { logoutLocators } from '../pages/logout.locators.js';


test('User can logout successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const logout = new LogoutActions(page);

  await page.goto('/');
  await loginPage.login('standard_user', 'secret_sauce');

  await logout.logout();

  await expect(page).toHaveURL('/');
  await expect(page.locator(logoutLocators.loginbutton)).toBeVisible();
});
