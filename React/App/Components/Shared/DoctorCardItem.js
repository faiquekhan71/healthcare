import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Colors from "../../../assets/Shared/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function DoctorCardItem({ doctor }) {
  // Check if doctor object is null or undefined
  if (!doctor) {
    return null; // or any fallback behavior you prefer
  }

  // Check if nested properties exist before accessing them
  const imageUri = doctor.attributes?.image?.data?.attributes?.url;
  const isPremium = doctor.attributes?.Premium;
  const doctorName = doctor.attributes?.Name;
  const categoryName = doctor.attributes?.category?.data?.attributes?.Name;
  const experience = doctor.attributes?.Experience;

  return (
    <View
      style={{
        backgroundColor: Colors.White,
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
      }}
    >
      <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
        {/* Check if imageUri is available before rendering Image */}
        {imageUri && (
          <Image
            source={{ uri: imageUri }}
            style={{ width: 110, height: 120, borderRadius: 10 }}
          />
        )}
        <View style={{ marginTop: 10 }}>
          {/* Check if isPremium is true before rendering the premium badge */}
          {isPremium && (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: Colors.Secondary,
                padding: 5,
                borderRadius: 99,
                paddingHorizontal: 10,
                gap: 4,
                alignItems: "center",
              }}
            >
              <Ionicons
                name="shield-checkmark"
                size={18}
                color={Colors.Primary}
              />
              <Text
                style={{ fontFamily: "appfont-regular", color: Colors.Primary }}
              >
                Professional Doctor
              </Text>
            </View>
          )}
          <Text
            style={{
              fontSize: 17,
              fontFamily: "appfont-semibold",
              marginTop: 5,
            }}
          >
            {doctorName}
          </Text>
          <Text
            style={{
              color: Colors.Grey,
              fontFamily: "appfont-regular",
              marginTop: 1,
            }}
          >
            {categoryName}
          </Text>
          <Text
            style={{
              fontFamily: "appfont-regular",
              color: Colors.Primary,
              marginTop: 3,
            }}
          >
            {experience + "+ Years Experience"}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          marginTop: 10,
          padding: 10,
          backgroundColor: Colors.Secondary,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: Colors.Primary,
            textAlign: "center",
            fontFamily: "appfont-semibold",
          }}
        >
          Make an Appointment
        </Text>
      </TouchableOpacity>
    </View>
  );
}
