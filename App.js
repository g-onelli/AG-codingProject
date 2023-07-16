import { StyleSheet, Text, TextInput, SafeAreaView } from "react-native";
import NameScreen from "./app/screens/nameScreen";
import React, { useState } from "react";
import Nav from "./app/routes/routeNav";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Nav />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dogerblue",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "black",
  },
});
