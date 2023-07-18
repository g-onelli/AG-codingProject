import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  View,
  Button,
  Dimensions,
  Keyboard,
} from "react-native";
import CustButton from "../Components/cusButton";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function PhoneScreen({ navigation }) {
  const [pNum, setPNum] = useState("2014048372");
  const displayPhone =
    "(" + pNum.slice(0, 3) + ") " + pNum.slice(3, 6) + "-" + pNum.slice(6);
  function sendData() {
    let pNumVar =
      "(" + pNum.slice(0, 3) + ") " + pNum.slice(3, 6) + "-" + pNum.slice(6);
    navigation.navigate("Home", { pVar: pNumVar });
  }
  return (
    <SafeAreaView style={styles.something}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What's your phone number?</Text>
      </View>

      <View style={styles.nameContainer}>
        <View style={styles.nameInput}>
          <Text style={styles.inputTitle}>Your phone number</Text>

          <TextInput
            keyboardType="phone-pad"
            placeholderTextColor="black"
            style={styles.inputText}
            placeholder={displayPhone}
            maxLength={10}
            onChangeText={(varone) =>
              varone != null ? setPNum(varone) : setPNum("(201) 404-8372")
            }
          />
        </View>
      </View>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        accessible={false}
        style={styles.disKeyboard}
      ></TouchableWithoutFeedback>
      <View style={styles.buttonContainer}>
        <CustButton functPass={sendData}></CustButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  something: {
    backgroundColor: "#fff",
    borderWidth: 3,
    borderColor: "black",
    flex: 1,
  },
  titleContainer: {
    marginTop: 50,
    flexDirection: "row",
    paddingLeft: "10%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexBasis: 50,
    height: Dimensions.get("screen").height * 0.8,
    marginTop: 30,
    marginRight: "10%",
    marginLeft: "10%",
    //marginLeft: 50,
  },
  nameInput: {
    borderWidth: 2,
    borderColor: "lightgrey",
    width: "100%",
    height: "120%",
  },
  inputText: {
    fontWeight: "bold",
    padding: 5,
  },
  inputTitle: {
    color: "grey",
    paddingTop: 5,
    paddingLeft: 5,
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: "37%",
  },
  disKeyboard: {
    marginTop: 15,
    width: "100%",
    height: "20%",
  },
});

export default PhoneScreen;
