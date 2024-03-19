import { View, Text, Image } from "react-native";
import React from "react";
import Colors from "../../../assets/Shared/Colors";
import HorizontalLine from "../Shared/HorizontalLine";
import { FontAwesome6 } from "@expo/vector-icons";
import { useUser } from "@clerk/clerk-expo";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";

export default function AppointmentCardItem({ appointment }) {
  const { isLoaded, isSignedIn, user } = useUser();
  return (
    <View
      style={{
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.LightGrey,
        borderRadius: 10,
        marginTop: 15,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: user.imageUrl,
          }}
          style={{ height: 100, borderRadius: 25, width: 90 }}
        />
        <View>
          {/* <Text style={{ fontSize: 16, fontFamily: "appfont-semibold" }}>
            {appointment.attributes.hospitals.data[0].attributes.Name}
          </Text> */}
          {/* <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <FontAwesome6
              name="location-dot"
              size={22}
              color={Colors.Primary}
            />
            <Text style={{ fontFamily: "appfont-regular" }}>
              {appointment.attributes.hospitals.data[0].attributes.Address}
            </Text>
          </View> */}

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <FontAwesome6
              name="id-card-clip"
              size={18}
              color={Colors.Primary}
            />
            <Text style={{ fontFamily: "appfont-regular", color: Colors.Grey }}>
              {" "}
              Booking Id : #{appointment.id}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <FontAwesome6 name="user-large" size={18} color={Colors.Primary} />
            <Text style={{ fontFamily: "appfont-regular", color: Colors.Grey }}>
              {" "}
              Booking for {appointment.attributes.UserName}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <Ionicons name="calendar" size={18} color={Colors.Primary} />
            <Text style={{ fontFamily: "appfont-regular", color: Colors.Grey }}>
              {" "}
              Appointment on{" "}
              {moment(appointment.attributes.Date).format("Do MMMM YY")}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <AntDesign name="clockcircle" size={18} color={Colors.Primary} />
            <Text style={{ fontFamily: "appfont-regular", color: Colors.Grey }}>
              {" "}
              Appointment at {appointment.attributes.Time}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
