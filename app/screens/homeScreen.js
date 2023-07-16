import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  Dimensions,
} from "react-native";
import ProTouchLong from "../Components/proTouchLong";
import ProTouchShort from "../Components/proTouchShort";

function homeScreen(props) {
  const [name, setName] = useState("Gabriela Onelli");
  //const []
  return (
    <View style={styles.container}>
      {/*Name*/}
      <ProTouchShort
        titleVal={"Name"}
        textVal={"Come one dice"}
      ></ProTouchShort>
      {/*Phone Number*/}
      <ProTouchShort
        titleVal={"Phone"}
        textVal={"Come one dice"}
      ></ProTouchShort>
      {/*Email*/}
      <ProTouchShort
        titleVal={"email"}
        textVal={"Come on snake eyes"}
      ></ProTouchShort>
      {/*Bio*/}
      <ProTouchLong
        titleVal={"bio"}
        textVal={
          "something here lorem ipsum shit tone of workds right now type it all . don't know if sentences count with this thing. hope it does"
        }
      ></ProTouchLong>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundcolor: "black",
    borderWidth: 3,
    borderColor: "black",
    height: "100%",
  },
  textTitle: {
    color: "grey",
    marginLeft: "10%",
    marginTop: 10,
  },
});

export default homeScreen;
