import { API_KEY } from "@env";
import { CAFE_IMAGES } from "./constants";

export const getPlaceThumbnailImage = (icon) => `${icon.prefix}${icon.suffix}`;

export const getParamsAndHeaders = (lat = 47.606, lng = -122.349358) => ({
  params: {
    query: "coffee",
    ll: `${lat},${lng}`,
    open_now: "true",
    sort: "DISTANCE",
  },
  headers: {
    Accept: "application/json",
    Authorization: process.env["API_KEY"],
  },
});

export const getRandomCafeImages = () =>
  CAFE_IMAGES[Math.floor(Math.random() * CAFE_IMAGES.length)];

export const getFormattedAddressFromLocation = (cafeList, location) =>
  cafeList.find(
    (cafe) =>
      cafe.geocodes.main.latitude === location.latitude &&
      cafe.geocodes.main.longitude === location.longitude
  ).location["formatted_address"];
