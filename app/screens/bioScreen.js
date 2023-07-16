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
import CustButton from "../Components/Button";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function BioScreen(props) {
  const [bio, setBio] = useState(
    "Write a little bit about yourself. Do you like chatting? Are you a smoker? Do you bring pets with you? Etc."
  );
  return (
    <SafeAreaView style={styles.something}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What type of passenger are you?</Text>
      </View>

      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        accessible={false}
        style={styles.nameInput}
      >
        <TextInput
          style={styles.inputText}
          placeholder={bio}
          placeholderTextColor="black"
          multiline={true}
          maxLength={4}
          onChangeText={(varone) => setBio(varone)}
        />
      </TouchableWithoutFeedback>
      <View style={styles.buttonContainer}>
        <CustButton></CustButton>
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
    paddingRight: "10%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
  nameInput: {
    margin: "10%",
    paddingRight: 50,
    height: 200,
    width: 300,
    backgroundColor: "rgba(220,220,220,.1)",
  },
  inputText: {
    fontWeight: "bold",

    height: 200,
    width: 300,
  },
  inputTitle: {
    color: "grey",
    paddingTop: 5,
    paddingLeft: 5,
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: "20%",
  },
});

export default BioScreen;
