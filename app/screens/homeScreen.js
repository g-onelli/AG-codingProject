import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  Dimensions,
} from "react-native";
import ProTouchLong from "../Components/proTouchLong";
import ProTouchShort from "../Components/proTouchShort";
import { TouchableHighlight } from "react-native-gesture-handler";

function HomeScreen({ navigation, route }) {
  const [nameVar, setName] = useState("Gabriela Onelli");
  const [phoneVar, setPhone] = useState("(123) 456-7890");
  const [emailVar, setEmail] = useState("gonelli@gmail.com");
  const [bioVar, setBio] = useState(
    "I like taking my dogs on long walks and driving at a legal speed."
  );

  let fullName = route.params?.nVar;
  let phoneNum = route.params?.pVar;
  let eAddress = route.params?.eVar;
  let biography = route.params?.bVar;

  //const []
  return (
    <View style={styles.container}>
      <Text>{fullName}</Text>
      {/*Name*/}
      <ProTouchShort
        titleVal={"Name"}
        textVal={fullName != null ? fullName : nameVar}
        functPass={() => {
          navigation.navigate("Name", {
            callBack: this.receiveData,
          });
        }}
      ></ProTouchShort>
      {/*Phone Number*/}
      <ProTouchShort
        titleVal={"Phone"}
        textVal={phoneNum != null ? phoneNum : phoneVar}
        functPass={() => {
          navigation.navigate("Phone");
        }}
      ></ProTouchShort>
      {/*Email*/}
      <ProTouchShort
        titleVal={"email"}
        functPass={() => {
          navigation.navigate("Email");
        }}
        textVal={eAddress != null ? eAddress : emailVar}
      ></ProTouchShort>
      {/*Bio*/}
      <ProTouchLong
        titleVal={"bio"}
        functPass={() => {
          navigation.navigate("Bio");
        }}
        textVal={biography != null ? biography : bioVar}
      ></ProTouchLong>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundcolor: "blue",
    borderWidth: 3,
    borderColor: "black",
    height: "100%",
  },
  textTitle: {
    color: "grey",
    marginLeft: "10%",
    marginTop: 10,
  },
});
export default HomeScreen;
