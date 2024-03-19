import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../../assets/Shared/Colors";

export default function SearchBar({ setSearchText }) {
  const [searchInput, setSearchInput] = useState();
  return (
    <View style={{ marginTop: 15 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          alignItems: "center",
          borderWidth: 0.7,
          padding: 10,
          borderColor: Colors.Grey,
          borderRadius: 9,
        }}
      >
        <FontAwesome name="search" size={24} color={Colors.Primary} />
        <TextInput
          placeholder="    Search ..."
          onChangeText={(value) => setSearchInput(value)}
          onSubmitEditing={() => setSearchText(searchInput)}
          style={{ width: "100%", fontFamily: "appfont-regular" }}
        />
      </View>
    </View>
  );
}
