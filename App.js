import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>search</Text>
      </View>
      <View style={styles.list}>
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
  header: { padding: 16, backgroundColor: "green", width: "100%" },
  list: { flex: 1, padding: 16, backgroundColor: "blue", width: "100%" },
});
