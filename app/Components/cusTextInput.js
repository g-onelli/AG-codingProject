import React from "react";
import { View, Text, TextInput } from "react-native";

function CusTextInput({ stateVar, setFunc }) {
  return (
    <View>
      <Text></Text>
      <TextInput placeholder={stateVar} onChangeText={setFunc} />
    </View>
  );
}

export default CusTextInput;
