import React, { useContext } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { FlatList, View } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors, Searchbar } from "react-native-paper";
import RestaurantInfo from "../components/RestaurantInfo";
import Spacer from "../../../components/spacer/spacer";
import SafeArea from "../../../components/utility/SafeArea";
import { RestaurantsContext } from "../../../services/restaurants/context";

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
const Loading = styled(ActivityIndicator)`
  margin-left: -50;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
`;
export default function RestaurantsScreen() {
  const { error, isLoading, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={100} animating color={Colors.yellow100} />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <RestaurantListContainer
        data={restaurants}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfo restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
      <ExpoStatusBar style="auto" />
    </SafeArea>
  );
}
