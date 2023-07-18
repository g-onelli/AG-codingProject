import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  Dimensions,
  Image,
} from "react-native";
import ProTouchLong from "../Components/proTouchLong";
import ProTouchShort from "../Components/proTouchShort";
import { TouchableHighlight } from "react-native-gesture-handler";
import HomeProfileButton from "../Components/homePImg";

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
    <SafeAreaView style={styles.container}>
      <View style={styles.profView}>
        <Text style={styles.profTitle}>Edit Profile</Text>
      </View>
      <HomeProfileButton
        funcPass={() => {
          navigation.navigate("Profile");
        }}
        imgURL={require("../assets/AG-Project-DummyProfile.jpg")}
      ></HomeProfileButton>

      <View style={styles.container}>
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
          titleVal={"Email"}
          functPass={() => {
            navigation.navigate("Email");
          }}
          textVal={eAddress != null ? eAddress : emailVar}
        ></ProTouchShort>
        {/*Bio*/}
        <ProTouchLong
          titleVal={"Tell us about yourself"}
          functPass={() => {
            navigation.navigate("Bio");
          }}
          textVal={biography != null ? biography : bioVar}
        ></ProTouchLong>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundcolor: "#fff",
  },
  textTitle: {
    color: "grey",
    marginLeft: "10%",
    marginTop: 10,
  },
  profTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "cornflowerblue",
    margin: 10,
  },
  profView: {
    alignItems: "center",
  },
});
export default HomeScreen;
