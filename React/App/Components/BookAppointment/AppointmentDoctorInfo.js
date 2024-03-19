import { View, Text, Image } from "react-native";
import React from "react";
import PageHeader from "../Shared/PageHeader";
import { FontAwesome6 } from "@expo/vector-icons";
import Colors from "../../../assets/Shared/Colors";
import HorizontalLine from "../Shared/HorizontalLine";

export default function AppointmentDoctorInfo({ doctor }) {
  return (
    <View>
      <PageHeader title={"Book Appointment"} />
      <View
        style={{
          marginTop: 10,
          display: "flex",
          flexDirection: "row",
          gap: 15,
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: doctor.attributes.image.data.attributes.url }}
          style={{ width: 100, height: 100, borderRadius: 99 }}
        />
        <View>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "appfont-semibold",
              marginBottom: 8,
            }}
          >
            {doctor.attributes.Name}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
            }}
          >
            <FontAwesome6
              name="location-dot"
              size={18}
              color={Colors.Primary}
            />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "appfont-regular",
                color: Colors.Grey,
                width: "70%",
              }}
            >
              {doctor.attributes.Address}
            </Text>
          </View>
        </View>
      </View>
      <HorizontalLine />
    </View>
  );
}
