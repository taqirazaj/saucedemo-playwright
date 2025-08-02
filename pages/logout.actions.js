import { logoutLocators } from './logout.locators.js';

export class LogoutActions {
  constructor(page) {
    this.page = page;
    this.menuButton = page.locator(logoutLocators.menuButton);
    this.logoutLink = page.locator(logoutLocators.logoutLink);
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }
}
