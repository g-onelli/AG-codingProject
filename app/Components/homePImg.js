import React from "react";
import { Image, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function HomeProfileButton({ funcPass, imgURL }) {
  return (
    <TouchableWithoutFeedback style={styles.profContainer} onPress={funcPass}>
      <Image style={styles.profImage} source={imgURL}></Image>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  profContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  profImage: {
    width: 120,
    height: 120,
    borderRadius: 200 / 2,
    borderWidth: 4,
    borderColor: "cornflowerblue",
  },
});

export default HomeProfileButton;
