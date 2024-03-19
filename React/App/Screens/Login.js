import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import login from "./../../assets/images/login.png";
import Colors from "../../assets/Shared/Colors";
import SignInWithOAuth from "../Components/SignInWithOAuth";

export default function Login() {
  return (
    <View style={{ alignItems: "center" }}>
      <Image source={login} style={styles.appImage} />
      <View
        style={{
          backgroundColor: Colors.White,
          padding: 25,
          marginTop: -50,
          alignItems: "center",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}
      >
        <Text style={styles.heading}>Your Ultimate</Text>
        <Text style={styles.heading}>Health Care App</Text>
        <Text
          style={{
            textAlign: "center",
            marginTop: 20,
            fontFamily: "appfont-semibold",
          }}
        >
          Book Your Appointment Now !!!
        </Text>
        <SignInWithOAuth />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appImage: {
    width: 390,
    height: 600,
    objectFit: "contain",
    backgroundColor: Colors.LightGrey,
  },
  heading: {
    fontFamily: "appfont-bold",
    fontSize: 30,
  },
});
