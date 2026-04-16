import { expect, test } from "@playwright/test";
import { HomePage } from "../../pages/home.page";
import { getRooms } from "../../utils/api-client";

test.describe("Room inventory hybrid validation", () => {
  test("matches visible room cards in UI with the room inventory API", async ({ page, request }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await homePage.expectLoaded();

    const roomApiResponse = await getRooms(request);
    const apiRooms = roomApiResponse.rooms as Array<{ type: string }>;

    const uiRoomCards = page.locator("a[href*='/reservation/']");
    await expect(uiRoomCards).toHaveCount(apiRooms.length);

    const uiRoomTypes = await page.locator("h5").allInnerTexts();
    const expectedRoomTypes = apiRooms.map((room) => room.type);

    expect(uiRoomTypes).toEqual(expect.arrayContaining(expectedRoomTypes));
  });
});
