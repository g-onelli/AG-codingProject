import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

function ProTouchShort({ textVal, titleVal }) {
  return (
    <TouchableOpacity /*onPress={functPass}*/>
      <View style={styless.conWhole}>
        <View>
          <Text style={styless.titleText}>{titleVal}</Text>
        </View>
        <View style={styless.conInfo}>
          <Text style={styless.infoText}>{textVal}</Text>
          <Icon name="right" size={20} borderBottomColor="black" />
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
    borderBottomWidth: 2,
    backgroundColor: "dogerblue",
  },
  infoText: {
    color: "black",
  },
  titleText: {
    color: "grey",
  },
});
export default ProTouchShort;
