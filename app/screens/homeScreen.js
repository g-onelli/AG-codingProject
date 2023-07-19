import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import ProTouchLong from "../Components/proTouchLong";
import ProTouchShort from "../Components/proTouchShort";
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
  let profPic = route.params?.pickVar;

  //const []
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profView}>
        <Text style={styles.profTitle}>Edit Profile</Text>
      </View>
      <View
        style={{
          flexDirection: "row-reverse",
          borderRadius: 3,
          borderColor: "black",
          marginLeft: 125,
          marginBottom: -40,
          zIndex: 1,
        }}
      >
        <Icon name="pencil-outline" size={20} style={styles.profIcon} />
      </View>
      <HomeProfileButton
        funcPass={() => {
          navigation.navigate("Profile");
        }}
        imgURL={
          profPic == null
            ? require("../assets/AG-Project-DummyProfile.jpg")
            : { uri: profPic }
        }
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
    marginBottom: 40,
  },
  profTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "cornflowerblue",
    margin: 10,
    marginBottom: 50,
  },
  profView: {
    alignItems: "center",
  },
  profImage: {
    justifyContent: "flex-end",
  },
  profIcon: {
    position: "absolute",
    zIndex: 1,
    alignSelf: "center",
    padding: 5,
    borderRadius: 15,
    shadowColor: "black",
    color: "cornflowerblue",
    borderWidth: 0,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
});
export default HomeScreen;
