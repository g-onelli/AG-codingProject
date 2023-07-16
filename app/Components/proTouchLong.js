import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

function ProTouchLong({ textVal, functPass }) {
  return (
    <TouchableOpacity /*onPress={functPass}*/>
      <View style={styles.container}>
        <Text>{textVal}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    flexDirection: "row",
    padding: 10,
    borderBottomColor: "grey",
    backgroundColor: "dogerblue",
  },
});
export default ProTouchLong;
