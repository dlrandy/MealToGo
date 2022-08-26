import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import styled from "styled-components/native";
const SafeArea = styled(SafeAreaView)`
  align-items: center;
  background-color: orange;
  flex: 1;
  justify-content: center;
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px;`}
`;
// height: '100%', 测试出来和flex1差别不大
// 换成margintop？

export default SafeArea;
