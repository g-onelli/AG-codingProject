import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

function ProTouchLong({ textVal, titleVal, functPass }) {
  return (
    <TouchableOpacity onPress={functPass}>
      <View style={styless.conWhole}>
        <View>
          <Text style={styless.titleText}>{titleVal}</Text>
        </View>
        <View style={styless.conInfo}>
          <Text style={styless.infoText}>{textVal}</Text>
          <Icon name="right" size={20} color="grey" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styless = StyleSheet.create({
  conWhole: {
    marginLeft: "10%",
    width: "100%",
    paddingTop: 10,
  },
  conInfo: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  },
  infoText: {
    color: "black",
    width: "90%",
  },
  titleText: {
    color: "grey",
    fontSize: 13,
  },
});
export default ProTouchLong;
