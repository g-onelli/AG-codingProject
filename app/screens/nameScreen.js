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

function NameScreen({ navigation }) {
  const [fName, setFName] = useState("Jesse");
  const [lName, setLName] = useState("Stevenson");
  function sendData() {
    let nameVar = fName + " " + lName;
    navigation.navigate("Profile", { nVar: nameVar });
  }

  return (
    <SafeAreaView style={styles.something}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What's your name?</Text>
      </View>
      <View style={styles.nameContainer}>
        <View style={styles.nameInput}>
          <Text style={styles.inputTitle}>First Name</Text>
          <TextInput
            style={styles.inputText}
            value={fName}
            onChangeText={(varone) => setFName(varone)}
          />
        </View>
        <View style={styles.nameInput}>
          <Text style={styles.inputTitle}>Last Name</Text>
          <TextInput
            style={styles.inputText}
            value={lName}
            onChangeText={(varone) => setLName(varone)}
          />
        </View>
      </View>
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
    paddingRight: 50,
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
    marginTop: "60%",
  },
});

export default NameScreen;
