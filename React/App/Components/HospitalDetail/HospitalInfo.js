import { View, Text, FlatList } from "react-native";
import React from "react";
import Colors from "../../../assets/Shared/Colors";
import { FontAwesome6 } from "@expo/vector-icons";
import ActionButton from "./ActionButton";
import SubHeading from "../Home/SubHeading";
import HorizontalLine from "../Shared/HorizontalLine";

export default function HospitalInfo({ hospital }) {
  return (
    hospital && (
      <View>
        <Text style={{ fontSize: 23, fontFamily: "appfont-semibold" }}>
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
        <HorizontalLine />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <FontAwesome6 name="location-dot" size={18} color={Colors.Primary} />
          <Text
            style={{
              fontSize: 16,
              fontFamily: "appfont-regular",
              color: Colors.Grey,
            }}
          >
            {hospital.attributes.Address}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
            marginTop: 6,
          }}
        >
          <FontAwesome6 name="clock" size={14} color={Colors.Primary} />
          <Text
            style={{
              fontSize: 17,
              fontFamily: "appfont-regular",
              color: Colors.Grey,
            }}
          >
            Monday to Sunday , 11 am - 5 pm
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: Colors.LightGrey,
            margin: 5,
            marginBottom: 15,
            marginTop: 10,
          }}
        ></View>
        <ActionButton />
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: Colors.LightGrey,
            margin: 5,
            marginBottom: 15,
            marginTop: 15,
          }}
        ></View>
        <SubHeading subHeadingTitle={"About"} />
        <Text>{hospital.attributes.Description}</Text>
      </View>
    )
  );
}
