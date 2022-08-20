//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.spaces[3]}};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantTitle = styled(Title)`
  font-family: ${(props) => props.theme.fonts.body};
  padding: ${(props) => props.theme.spaces[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

// create a component
const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    address,
    icon,
    isClosedTemporarily,
    name,
    openingHours,
    photos,
    rating,
  } = restaurant;
  return (
    <View style={styles.container}>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Content>
          <RestaurantTitle>Card title</RestaurantTitle>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
      </RestaurantCard>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default RestaurantInfo;
