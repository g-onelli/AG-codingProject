import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  View,
  Button,
} from "react-native";

function NameScreen(props) {
  const [fName, setFName] = useState("Jesse");
  const [lName, setLName] = useState("Stevenson");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text>What's your name?</Text>
      </View>
      <View>
        <View style={styles.nameInput}>
          <Text>First Name</Text>

          <Text>Last Name</Text>
        </View>
        <View style={styles.nameInput}>
          <TextInput
            placeholder={fName}
            onChangeText={(varone) => setFName(varone)}
          />

          <TextInput
            placeholder={lName}
            onChangeText={(vartwo) => setFName(vartwo)}
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

export default NameScreen;
