import { expect, Page } from "@playwright/test";

export class HomePage {
  constructor(private readonly page: Page) {}

  readonly homeHeading = this.page.getByRole("heading", { name: /welcome to shady meadows b&b/i });
  readonly bookingHeading = this.page.getByRole("heading", { name: /check availability & book your stay/i });
  readonly adminLink = this.page.getByRole("link", { name: /^admin$/i });

  async goto() {
    await this.page.goto("/");
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/automationintesting\.online/);
    await expect(this.homeHeading).toBeVisible();
    await expect(this.bookingHeading).toBeVisible();
    await expect(this.adminLink).toBeVisible();
  }
}
