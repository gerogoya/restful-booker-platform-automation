import { expect, test } from "@playwright/test";
import { getBookings } from "../../utils/api-client";

test.describe("Booking API", () => {
  test("returns an array of bookings", async ({ request }) => {
    const bookings = await getBookings(request);

    expect(Array.isArray(bookings)).toBeTruthy();
    expect(bookings.length).toBeGreaterThan(0);
  });
});
