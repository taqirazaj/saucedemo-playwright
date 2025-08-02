import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.actions.js';
import { InventoryActions } from '../pages/inventory.actions.js';
import { LogoutActions } from '../pages/logout.actions.js';
import { CartLocators } from '../pages/cart.locators.js';

test('Cart persists after logout and login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventory = new InventoryActions(page);
  const logout = new LogoutActions(page);

  await page.goto('/');
  await loginPage.login('standard_user', 'secret_sauce');

  // Add one item to cart
  await inventory.addItemToCartByIndex(0);

  // ✅ Assert cart count is 1 before logout
  const cartCount = await page.locator(CartLocators.cartBadge).innerText();
  expect(cartCount).toBe('1');

  // Logout
  await logout.logout();

  // Log in again
  await loginPage.login('standard_user', 'secret_sauce');

  // Go to cart
  await page.click(CartLocators.cartIcon);

  // ✅ Assert cart still has 1 item
  const cartItems = await page.locator(CartLocators.cartItem);
  await expect(cartItems).toHaveCount(1);
});
