import { loginLocators } from './login.locators.js'; // path relative to login.actions.js

export class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page 
   */
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(username, password) {
    await this.page.locator(loginLocators.usernameInput).fill(username);
    await this.page.locator(loginLocators.passwordInput).fill(password);
    await this.page.locator(loginLocators.loginButton).click();
  }

  async getErrorMessage() {
    return await this.page.locator(loginLocators.errorMessage).textContent();
  }
}
