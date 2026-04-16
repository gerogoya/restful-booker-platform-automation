import { expect, test } from "@playwright/test";
import { AdminPage } from "../../pages/admin.page";
import { testUsers } from "../../fixtures/test-data";

test.describe("Admin login", () => {
  test("@smoke allows a valid admin to log in", async ({ page }) => {
    const adminPage = new AdminPage(page);

    await adminPage.goto();
    await adminPage.login(testUsers.validUser.username, testUsers.validUser.password);
    await adminPage.expectAuthenticated();
  });

  test("shows the login form after invalid credentials", async ({ page }) => {
    const adminPage = new AdminPage(page);

    await adminPage.goto();
    await adminPage.login(testUsers.invalidUser.username, testUsers.invalidUser.password);

    await adminPage.expectLoginFormVisible();
    await expect(page).toHaveURL(/admin/);
  });
});
