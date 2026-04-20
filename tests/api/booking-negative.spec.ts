import { expect, test } from "@playwright/test";
import { getBookingById } from "../../utils/api-client";

test.describe("Booking API negative coverage", () => {
  test("returns 404 for a booking that does not exist", async ({ request }) => {
    const missingBookingId = 99999999;

    const response = await getBookingById(request, missingBookingId);

    expect(response.status()).toBe(404);
  });
});
