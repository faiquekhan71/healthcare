import { View, Text, Image } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { FontAwesome } from "@expo/vector-icons";

export default function Header() {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 7,
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: user.imageUrl }}
          style={{ width: 45, height: 45, borderRadius: 99 }}
        />
        <View>
          <Text style={{ fontFamily: "appfont-regular" }}> Heyyy 👋🏻 </Text>
          <Text style={{ fontSize: 18, fontFamily: "appfont-bold" }}>
            {user.fullName}
          </Text>
        </View>
      </View>
      <FontAwesome name="bell-o" size={29} color="black" />
    </View>
  );
}
