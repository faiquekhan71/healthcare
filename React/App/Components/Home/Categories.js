import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalAPI from "../../Services/GlobalAPI";
import Colors from "../../../assets/Shared/Colors";
import SubHeading from "./SubHeading";
import { useNavigation } from "@react-navigation/native";

export default function Categories() {
  const navigation = useNavigation();
  const [categoryList, setCategoryList] = useState();

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    GlobalAPI.getCategories().then((resp) => {
      setCategoryList(resp.data.data);
    });
  };
  if (!categoryList) {
    return null;
  }
  return (
    <View style={{ marginTop: 10 }}>
      <SubHeading subHeadingTitle={"Doctor Speciality"} />
      <FlatList
        data={categoryList}
        numColumns={4}
        columnWrapperStyle={{ flex: 1, justifyContent: "space-between" }}
        renderItem={({ item, index }) =>
          index < 4 && (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("hospital-doctor-list-screen", {
                  categoryName: item.attributes.Name,
                })
              }
              style={{ alignItems: "center" }}
            >
              <View
                style={{
                  backgroundColor: Colors.Secondary,
                  padding: 15,
                  borderRadius: 99,
                }}
              >
                <Image
                  source={{ uri: item.attributes.Icon.data.attributes.url }}
                  style={{ width: 35, height: 35 }}
                />
              </View>
              <Text>{item.attributes.Name}</Text>
            </TouchableOpacity>
          )
        }
      />
    </View>
  );
}
