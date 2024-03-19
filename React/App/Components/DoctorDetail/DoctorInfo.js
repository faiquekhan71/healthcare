import { View, Text, FlatList } from "react-native";
import React from "react";
import Colors from "../../../assets/Shared/Colors";
import { FontAwesome6 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import SubHeading from "../Home/SubHeading";
import HorizontalLine from "../Shared/HorizontalLine";
import ActionButton from "../HospitalDetail/ActionButton";

export default function DoctorInfo({ doctor }) {
  return (
    doctor && (
      <View>
        <Text style={{ fontSize: 23, fontFamily: "appfont-semibold" }}>
          {doctor.attributes.Name}
        </Text>
        <FlatList
          data={doctor.attributes.category.data}
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
          <FontAwesome6 name="hospital" size={13} color={Colors.Primary} />
          <Text
            style={{
              fontSize: 16,
              fontFamily: "appfont-regular",
              color: Colors.Grey,
            }}
          >
            {doctor.attributes.OPD}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <Fontisto name="doctor" size={15} color={Colors.Primary} />
          <Text
            style={{
              fontSize: 16,
              fontFamily: "appfont-regular",
              color: Colors.Grey,
            }}
          >
            {doctor.attributes.category.data.attributes.Name}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <FontAwesome6 name="location-dot" size={15} color={Colors.Primary} />
          <Text
            style={{
              fontSize: 16,
              fontFamily: "appfont-regular",
              color: Colors.Grey,
            }}
          >
            Experience of {doctor.attributes.Experience}+ Years
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
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
            Monday to Saturday , 11 am - 4 pm
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
        <Text>{doctor.attributes.About}</Text>
      </View>
    )
  );
}
