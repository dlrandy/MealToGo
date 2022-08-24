import { Card, Title } from "react-native-paper";
import styled from "styled-components/native";
import Text from "../../../components/typography/Text";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.spaces[3]}};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const RestaurantContent = styled(Card.Content)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  padding: ${(props) => props.theme.spaces[3]};
`;
export const RestaurantTitle = Text;
// export const RestaurantTitle = styled(Title)`
//   color: ${(props) => props.theme.colors.ui.primary};
//   font-family: ${(props) => props.theme.fonts.heading};
//   font-size: ${(props) => props.theme.fontSizes.body};
// `;
export const RestaurantAddress = styled(Title)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
export const Rates = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Section = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
