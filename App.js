import { StyleSheet, Text, TextInput, SafeAreaView } from "react-native";
import NameScreen from "./app/screens/nameScreen";
import React, { useState } from "react";
import Nav from "./app/routes/routeNav";

export default function App() {
  return <Nav />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dogerblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
