import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 16, backgroundColor: "green", width: "100%" }}>
        <Text>search</Text>
      </View>
      <View
        style={{ flex: 1, padding: 16, backgroundColor: "blue", width: "100%" }}
      >
        <Text>list</Text>
      </View>
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
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
});
