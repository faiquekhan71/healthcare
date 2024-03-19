import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import Colors from "../../../assets/Shared/Colors";
import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function HospitalCardItem({ hospital }) {
  return (
    <View style={{ marginBottom: 20 }}>
      <Image
        source={{ uri: hospital.attributes.image.data.attributes.url }}
        style={{
          width: "100%",
          height: 140,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <View
        style={{
          padding: 10,
          backgroundColor: Colors.White,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <Text style={{ fontSize: 18, fontFamily: "appfont-semibold" }}>
          {hospital.attributes.Name}
        </Text>
        <FlatList
          data={hospital.attributes.categories.data}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Text style={{ marginRight: 10, color: Colors.Grey }}>
              {item.attributes.Name}
            </Text>
          )}
        />
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: Colors.LightGrey,
            margin: 5,
            marginBottom: 10,
          }}
        ></View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <FontAwesome6 name="location-dot" size={18} color={Colors.Primary} />
          <Text>{hospital.attributes.Address}</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
            marginTop: 4,
          }}
        >
          <FontAwesome5 name="eye" size={15} color={Colors.Primary} />
          <Text>3784 Views</Text>
        </View>
      </View>
    </View>
  );
}
