import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import DoctorCardItem from "../Shared/DoctorCardItem";
import { useNavigation } from "@react-navigation/native";

export default function DoctorList({ doctorsList }) {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 20 }}>
      <FlatList
        showsVerticalScrollIndicators={false}
        data={doctorsList}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("doctor-detail", {
                doctor: item,
              })
            }
          >
            <DoctorCardItem doctor={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
