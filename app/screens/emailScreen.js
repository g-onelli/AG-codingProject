import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  View,
  Button,
} from "react-native";

function EmailScreen(props) {
  const [eAddress, setEAddress] = useState("gonelli@gmail.com");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text>What's your email?</Text>
      </View>
      <View>
        <View style={styles.nameInput}>
          <Text>Your Email Address</Text>
        </View>
        <View style={styles.nameInput}>
          <TextInput
            placeholder={eAddress}
            onChangeText={(varone) => setEAddress(varone)}
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

export default EmailScreen;
