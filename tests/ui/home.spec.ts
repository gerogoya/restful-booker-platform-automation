import { test } from "@playwright/test";
import { HomePage } from "../../pages/home.page";

test.describe("Home page", () => {
  test("@smoke loads the Restful Booker Platform home page", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await homePage.expectLoaded();
  });
});
