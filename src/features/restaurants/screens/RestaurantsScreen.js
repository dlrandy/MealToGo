import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../components/RestaurantInfo";
import Spacer from "../../../components/spacer/spacer";

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

const RestaurantListContainer = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})`
  flex: 1;
  background-color: blue;
  width: 100%;
`;

export default function RestaurantsScreen() {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <RestaurantListContainer
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
        ]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfo />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
      <ExpoStatusBar style="auto" />
    </SafeArea>
  );
}
