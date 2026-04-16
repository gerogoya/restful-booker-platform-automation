import { expect, test } from "@playwright/test";
import { testBooking, testUsers } from "../../fixtures/test-data";
import {
  createAuthToken,
  createBooking,
  deleteBooking,
  getBookingById,
  patchBooking,
  updateBooking
} from "../../utils/api-client";

test.describe("Booking lifecycle API", () => {
  test("creates, updates, patches, and deletes a booking", async ({ request }) => {
    const token = await createAuthToken(
      request,
      testUsers.validUser.username,
      testUsers.validUser.password
    );

    const created = await createBooking(request, testBooking);
    const bookingId = created.bookingid as number;

    expect(bookingId).toBeGreaterThan(0);
    expect(created.booking.firstname).toBe(testBooking.firstname);

    const createdResponse = await getBookingById(request, bookingId);
    expect(createdResponse.ok()).toBeTruthy();
    const createdBooking = await createdResponse.json();
    expect(createdBooking.lastname).toBe(testBooking.lastname);

    const updatedPayload = {
      firstname: "Updated",
      lastname: "Booking",
      totalprice: 333,
      depositpaid: false,
      bookingdates: {
        checkin: "2026-05-11",
        checkout: "2026-05-13"
      },
      additionalneeds: "Dinner"
    };

    const updatedBooking = await updateBooking(request, bookingId, token, updatedPayload);
    expect(updatedBooking.firstname).toBe(updatedPayload.firstname);
    expect(updatedBooking.additionalneeds).toBe(updatedPayload.additionalneeds);

    const patchedBooking = await patchBooking(request, bookingId, token, {
      firstname: "Patched"
    });
    expect(patchedBooking.firstname).toBe("Patched");
    expect(patchedBooking.lastname).toBe(updatedPayload.lastname);

    const deletedResponse = await deleteBooking(request, bookingId, token);
    expect(deletedResponse.status()).toBe(201);

    const afterDeleteResponse = await getBookingById(request, bookingId);
    expect(afterDeleteResponse.status()).toBe(404);
  });
});
