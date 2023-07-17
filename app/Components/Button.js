import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

function CustButton({ functPass }) {
  return (
    <TouchableOpacity onPress={functPass}>
      <View style={styless.container}>
        <Text style={styless.textVal}>Update</Text>
      </View>
    </TouchableOpacity>
  );
}

const styless = StyleSheet.create({
  container: {
    backgroundColor: "black",
    width: "80%",
    height: 45,

    marginLeft: "10%",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    justifyContent: "center",
    alignItems: "center",
  },
  textVal: {
    color: "white",
  },
});
export default CustButton;
