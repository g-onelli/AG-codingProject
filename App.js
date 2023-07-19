import { StyleSheet, LogBox } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./app/screens/homeScreen";
import NameScreen from "./app/screens/nameScreen";
import PhoneScreen from "./app/screens/phoneScreen";
import EmailScreen from "./app/screens/emailScreen";
import BioScreen from "./app/screens/bioScreen";
import ProfileScreen from "./app/screens/profileScreen";

const stackNav = createNativeStackNavigator();
//LogBox.ignoreAllLogs(); //surpresses all warning logs, only utilize for demo purposes

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <stackNav.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
          headerTitleStyle: { fontSize: 0 },
          headerTransparent: true,
        }}
      >
        <stackNav.Screen name="Home" component={HomeScreen} />
        <stackNav.Screen name="Name" component={NameScreen} />
        <stackNav.Screen name="Phone" component={PhoneScreen} />
        <stackNav.Screen name="Email" component={EmailScreen} />
        <stackNav.Screen name="Bio" component={BioScreen} />
        <stackNav.Screen name="Profile" component={ProfileScreen} />
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
