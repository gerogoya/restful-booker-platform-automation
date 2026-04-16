import { APIRequestContext, expect } from "@playwright/test";

export async function createAuthToken(request: APIRequestContext, username: string, password: string) {
  const response = await request.post(`${process.env.API_BASE_URL || "https://restful-booker.herokuapp.com"}/auth`, {
    data: { username, password }
  });

  expect(response.ok()).toBeTruthy();
  const body = await response.json();
  expect(body.token).toBeTruthy();
  return body.token as string;
}

export async function getBookings(request: APIRequestContext) {
  const response = await request.get(`${process.env.API_BASE_URL || "https://restful-booker.herokuapp.com"}/booking`);
  expect(response.ok()).toBeTruthy();
  return response.json();
}

export async function createBooking(request: APIRequestContext, payload: Record<string, unknown>) {
  const response = await request.post(`${process.env.API_BASE_URL || "https://restful-booker.herokuapp.com"}/booking`, {
    data: payload
  });
  expect(response.ok()).toBeTruthy();
  return response.json();
}

export async function getBookingById(request: APIRequestContext, bookingId: number) {
  return request.get(`${process.env.API_BASE_URL || "https://restful-booker.herokuapp.com"}/booking/${bookingId}`);
}

export async function updateBooking(
  request: APIRequestContext,
  bookingId: number,
  token: string,
  payload: Record<string, unknown>
) {
  const response = await request.put(`${process.env.API_BASE_URL || "https://restful-booker.herokuapp.com"}/booking/${bookingId}`, {
    headers: {
      Cookie: `token=${token}`
    },
    data: payload
  });
  expect(response.ok()).toBeTruthy();
  return response.json();
}

export async function patchBooking(
  request: APIRequestContext,
  bookingId: number,
  token: string,
  payload: Record<string, unknown>
) {
  const response = await request.patch(`${process.env.API_BASE_URL || "https://restful-booker.herokuapp.com"}/booking/${bookingId}`, {
    headers: {
      Cookie: `token=${token}`
    },
    data: payload
  });
  expect(response.ok()).toBeTruthy();
  return response.json();
}

export async function deleteBooking(request: APIRequestContext, bookingId: number, token: string) {
  return request.delete(`${process.env.API_BASE_URL || "https://restful-booker.herokuapp.com"}/booking/${bookingId}`, {
    headers: {
      Cookie: `token=${token}`
    }
  });
}

export async function getRooms(request: APIRequestContext) {
  const response = await request.get(`${process.env.BASE_URL || "https://automationintesting.online/"}/api/room`);
  expect(response.ok()).toBeTruthy();
  return response.json();
}
