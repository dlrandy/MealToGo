import React from "react";
import styled, { useTheme } from "styled-components/native";
const sizes = {
  small: 1,
  medium: 2,
  large: 3,
};
const positions = {
  top: "marginTop",
  left: "marginLeft",
  bottom: "marginBottom",
  right: "marginRight",
};

const getVariant = (position, size, theme) =>
  `${positions[position]}:${theme.spaces[sizes[size]]}`;

//android 会报错
// const Spacer = styled.View`
//   ${({ position, size, theme }) => getVariant(position, size, theme)}
// `;

const SpacerView = styled.View`
  ${({ variant }) => variant};
`;
const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};
Spacer.defaultProps = {
  position: "top",
  size: "small",
};
export default Spacer;
