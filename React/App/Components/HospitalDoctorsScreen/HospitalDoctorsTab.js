import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import Colors from "../../../assets/Shared/Colors";

export default function HospitalDoctorsTab({ activeTab }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <View style={{ marginTop: 10 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setActiveIndex(0);
            activeTab("Hospital");
          }}
          style={[activeIndex == 0 ? styles.activeTab : styles.inActiveTab]}
        >
          <Text
            style={[activeIndex == 0 ? styles.activeText : styles.inActiveText]}
          >
            Hospitals
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActiveIndex(1);
            activeTab("Doctor");
          }}
          style={[activeIndex == 1 ? styles.activeTab : styles.inActiveTab]}
        >
          <Text
            style={[activeIndex == 1 ? styles.activeText : styles.inActiveText]}
          >
            Doctors
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  activeText: {
    textAlign: "center",
    fontFamily: "appfont-regular",
    fontSize: 18,
    color: Colors.Primary,
  },
  inActiveText: {
    textAlign: "center",
    fontFamily: "appfont-regular",
    fontSize: 18,
    color: Colors.Grey,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.Primary,
    padding: 3,
  },
  inActiveTab: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.Grey,
    padding: 3,
  },
});
