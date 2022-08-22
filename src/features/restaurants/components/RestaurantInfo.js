//import liraries
import React, { Component } from "react";
import { Image, View, StyleSheet } from "react-native";
import { Avatar, Text, Card, Title, Paragraph } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import Spacer from "../../../components/spacer/spacer";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.spaces[3]}};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantContent = styled(Card.Content)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  padding: ${(props) => props.theme.spaces[3]};
`;
const RestaurantTitle = styled(Title)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`;
const RestaurantAddress = styled(Title)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
const Rates = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Section = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: start;
`;

// create a component
const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;
  const ratings = Array.from({ length: Math.floor(rating) }).map((_, index) => (
    <SvgXml key={index} xml={star} width={20} height={20} />
  ));

  return (
    <View style={styles.container}>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover source={{ uri: photos[0] }} />
        <RestaurantContent>
          <RestaurantTitle>{name}</RestaurantTitle>
          <Section>
            <Rates>{ratings}</Rates>
            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant="label" style={{ color: "red" }}>
                  CLOSED TEMPORARILY
                </Text>
              )}
              <Spacer position="left" size="medium" />
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              <Spacer position="left" size="medium" />
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </SectionEnd>
          </Section>
          <RestaurantAddress>{address}</RestaurantAddress>
        </RestaurantContent>
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
