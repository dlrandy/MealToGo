import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../components/RestaurantInfo";

const SafeArea = styled(SafeAreaView)`
  align-items: center;
  background-color: orange;
  flex: 1;
  justify-content: center;
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px;`}
`;
// height: '100%', 测试出来和flex1差别不大
// 换成margintop？

const SearchContainer = styled.View`
  padding: 16px;

  background-color: green;
  width: 100%;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
  width: 100%;
`;

export default function RestaurantsScreen() {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfo />
      </RestaurantListContainer>
      <ExpoStatusBar style="auto" />
    </SafeArea>
  );
}
