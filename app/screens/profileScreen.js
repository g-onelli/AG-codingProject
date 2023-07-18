import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import EditProfileButton from "../Components/editPImg";
import CustButton from "../Components/cusButton";
import { launchImageLibrary } from "react-native-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";

function ProfileScreen({ navigation }) {
  const [pickerVar, setPicker] = useState("");

  const getImage = () => {
    const options = {
      selectionLimit: 1,
      mediaType: "photo",
      includeBase64: false,
    };
    launchImageLibrary(options, (response) => {
      setPicker(response.assets[0].uri).catch((error) => {
        console.error(error);
      });
    });
  };

  return (
    <SafeAreaView>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Upload a Photo of yourself:</Text>
      </View>
      <View>
        <EditProfileButton
          imgURL={
            pickerVar == ""
              ? require("../assets/AG-Project-DummyProfile.jpg")
              : { uri: pickerVar }
          }
          funcPass={getImage}
        ></EditProfileButton>
      </View>
      <View>
        <CustButton functPass={() => navigation.navigate("Home")}></CustButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    alignItems: "center",
    marginTop: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
});

export default ProfileScreen;
