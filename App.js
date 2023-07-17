import { StyleSheet, Text, TextInput, SafeAreaView } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./app/screens/homeScreen";
import NameScreen from "./app/screens/nameScreen";
import PhoneScreen from "./app/screens/phoneScreen";
import EmailScreen from "./app/screens/emailScreen";
import BioScreen from "./app/screens/bioScreen";

const stackNav = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <stackNav.Navigator>
        <stackNav.Screen name="Profile" component={HomeScreen} />
        <stackNav.Screen name="Name" component={NameScreen} />
        <stackNav.Screen name="Phone" component={PhoneScreen} />
        <stackNav.Screen name="Email" component={EmailScreen} />
        <stackNav.Screen name="Bio" component={BioScreen} />
      </stackNav.Navigator>
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
