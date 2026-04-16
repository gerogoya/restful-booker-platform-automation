import { expect, Page } from "@playwright/test";

export class AdminPage {
  constructor(private readonly page: Page) {}

  readonly usernameInput = this.page.locator("#username");
  readonly passwordInput = this.page.locator("#password");
  readonly loginButton = this.page.locator("#doLogin");
  readonly roomNameInput = this.page.locator("#roomName");
  readonly createButton = this.page.getByRole("button", { name: /create/i });
  readonly logoutButton = this.page.getByRole("button", { name: /logout/i });

  async goto() {
    await this.page.goto("/admin");
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async expectAuthenticated() {
    await expect(this.logoutButton).toBeVisible();
  }

  async expectLoginFormVisible() {
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
  }
}
