import React from "react";
import { Text, SafeAreaView, StyleSheet, Button } from "react-native";
import ProTouchLong from "../Components/proTouchLong";

function homeScreen(props) {
  function doSome() {
    console.log("pressed button");
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
      <ProTouchLong textVal={"something"}></ProTouchLong>
      <Button title="something test"></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundcolor: "black",
    height: 200,
    width: 200,
  },
});

export default homeScreen;
