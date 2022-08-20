import React from "react";
import { ThemeProvider } from "styled-components/native";

import RestaurantsScreen from "./src/features/restaurants/screens/RestaurantsScreen";
import { theme } from "./src/infrastructure/theme/index";
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RestaurantsScreen />
    </ThemeProvider>
  );
}
