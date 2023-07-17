import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import homeScreen from "../screens/homeScreen";
import NameScreen from "../screens/nameScreen";
import BioScreen from "../screens/bioScreen";
import PhoneScreen from "../screens/phoneScreen";
import EmailScreen from "../screens/emailScreen";

const page = {
  Home: {
    screen: homeScreen,
  },
  Name: {
    screen: NameScreen,
  },
  Email: {
    screen: EmailScreen,
  },
  Phone: {
    screen: PhoneScreen,
  },
  Bio: {
    screen: BioScreen,
  },
};

const stackNav = createStackNavigator(page);

export default createAppContainer(stackNav);
