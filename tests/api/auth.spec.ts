import { expect, test } from "@playwright/test";
import { testUsers } from "../../fixtures/test-data";
import { createAuthToken } from "../../utils/api-client";

test.describe("Authentication API", () => {
  test("@smoke creates an auth token with valid credentials", async ({ request }) => {
    const token = await createAuthToken(
      request,
      testUsers.validUser.username,
      testUsers.validUser.password
    );

    expect(token.length).toBeGreaterThan(5);
  });
});
