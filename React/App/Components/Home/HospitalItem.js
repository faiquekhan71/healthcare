import { View, Text, Image } from "react-native";
import React from "react";
import Colors from "../../../assets/Shared/Colors";

export default function HospitalItem({ hospital }) {
  return (
    <View
      style={{
        width: 200,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.LightGrey,
        marginRight: 10,
      }}
    >
      <Image
        source={{ uri: hospital.attributes.image.data.attributes.url }}
        style={{
          width: "100%",
          height: 110,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <View style={{ padding: 7 }}>
        <Text style={{ fontFamily: "appfont-semibold", fontSize: 16 }}>
          {hospital.attributes.Name}
        </Text>
        <Text style={{ color: Colors.Grey }}>
          {hospital.attributes.Address}
        </Text>
      </View>
    </View>
  );
}
