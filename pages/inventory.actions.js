const { inventoryLocators } = require('./inventory.locators');

class InventoryActions {
  constructor(page) {
    this.page = page;
    this.addToCartButtons = page.locator(inventoryLocators.addToCartButtons);
    this.cartBadge = page.locator(inventoryLocators.cartBadge);
    this.cartIcon = page.locator(inventoryLocators.cartIcon);
  }

  async addItemsToCart(count = 2) {
    const total = await this.addToCartButtons.count();
    for (let i = 0; i < Math.min(count, total); i++) {
      await this.addToCartButtons.nth(i).click();
    }
  }

  async addItemToCartByIndex(index) {
    await this.addToCartButtons.nth(index).click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }

  async getCartCount() {
    const isVisible = await this.cartBadge.isVisible();
    return isVisible ? await this.cartBadge.innerText() : '0';
  }
}

module.exports = { InventoryActions };
