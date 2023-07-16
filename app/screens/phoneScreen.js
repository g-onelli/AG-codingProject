import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  View,
  Button,
} from "react-native";

function PhoneScreen(props) {
  const [pNum, setPNum] = useState("(201) 404-6435");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text>What's your phone number?</Text>
      </View>
      <View>
        <View style={styles.nameInput}>
          <Text>Your Phone Number</Text>
        </View>
        <View style={styles.nameInput}>
          <TextInput
            placeholder={pNum}
            onChangeText={(varone) => setPNum(varone)}
          />
        </View>
      </View>
      <Button title="Update" style={styles.button} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  title: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "center",
  },
  nameInput: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexBasis: 50,
    //marginLeft: 50,
  },
  alignName: {
    justifyContent: "center",
  },
  button: {
    backgroundColor: "blue",
  },
});

export default PhoneScreen;
