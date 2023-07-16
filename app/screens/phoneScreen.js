import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  View,
  Button,
  Dimensions,
} from "react-native";
import CustButton from "../Components/Button";

function PhoneScreen(props) {
  const [pNum, setPNum] = useState("(201) 404-8372");
  return (
    <SafeAreaView style={styles.something}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What's your email?</Text>
      </View>
      <View style={styles.nameContainer}>
        <View style={styles.nameInput}>
          <Text style={styles.inputTitle}>Your email address</Text>
          <TextInput
            inputMode="email"
            placeholderTextColor="black"
            style={styles.inputText}
            placeholder={pNum}
            onChangeText={(varone) =>
              varone != null ? setPNum(varone) : setPNum("(201) 404-8372")
            }
          />
        </View>
      </View>
      <CustButton></CustButton>
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
  alignName: {
    justifyContent: "center",
  },
  button: {
    backgroundColor: "blue",
  },
});

export default PhoneScreen;
