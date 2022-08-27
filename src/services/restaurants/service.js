import { mockImages, mocks } from "./mock";
import camelize from "camelize";
export const restaurantRequest = (location = "37.7749295,-122.4194155") =>
  new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      return reject("not found");
    }
    setTimeout(() => {
      resolve(mock);
    }, 2000);
  });
export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map(
      () => mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]
    );
    return {
      ...restaurant,
      isOpenNow: Boolean(restaurant.opening_hours?.open_now),
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};
