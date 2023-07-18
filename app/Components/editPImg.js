import React from "react";
import { Image, StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

function EditProfileButton({ funcPass, imgURL }) {
  return (
    <TouchableHighlight style={styles.profContainer} onPress={funcPass}>
      <Image style={styles.profImage} source={imgURL}></Image>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  profContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 60,
  },
  profImage: {
    width: 290,
    height: 300,
  },
});

export default EditProfileButton;
