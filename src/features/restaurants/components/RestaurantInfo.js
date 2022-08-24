//import liraries
import React from "react";
import { View, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import Spacer from "../../../components/spacer/spacer";
import Text from "../../../components/typography/Text";
import {
  Icon,
  Rates,
  RestaurantAddress,
  RestaurantCard,
  RestaurantCardCover,
  RestaurantContent,
  RestaurantTitle,
  Section,
  SectionEnd,
} from "./RestaurantInfoStyles";
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
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
              <Spacer position="left" size="medium" />
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              <Spacer position="left" size="medium" />
              <Icon source={{ uri: icon }} />
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
