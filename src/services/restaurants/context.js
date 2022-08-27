import React, { createContext, useEffect, useState } from "react";
import { restaurantRequest, restaurantsTransform } from "./service";

export const RestaurantsContext = createContext();
export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const retrieveRestaurants = async () => {
    try {
      setIsLoading(true);
      const res = await restaurantRequest();
      const data = restaurantsTransform(res);
      setRestaurants(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    retrieveRestaurants();
  }, []);
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
