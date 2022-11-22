import { API_KEY } from "@env";

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
