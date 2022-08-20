import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

import { Searchbar } from "react-native-paper";
import RestaurantsScreen from "./src/features/restaurants/screens/RestaurantsScreen";

export default function App() {
  return <RestaurantsScreen />;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "orange",
    flex: 1,
    // height: '100%', 测试出来和flex1差别不大
    justifyContent: "center",
    // 换成margintop？
    paddingTop: StatusBar.currentHeight,
  },
  search: { padding: 16, backgroundColor: "green", width: "100%" },
  list: { flex: 1, padding: 16, backgroundColor: "blue", width: "100%" },
});
