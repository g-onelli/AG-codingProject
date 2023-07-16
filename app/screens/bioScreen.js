import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  View,
  Button,
} from "react-native";

function BioScreen(props) {
  const [bio, setBio] = useState("I like dogs.");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text>What type of passenger are you?</Text>
      </View>
      <View>
        <View style={styles.nameInput}>
          <TextInput
            placeholder={bio}
            onChangeText={(varone) => setBio(varone)}
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

export default BioScreen;
