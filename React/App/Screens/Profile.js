import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Linking,
  Platform,
} from "react-native";
import React from "react";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../assets/Shared/Colors";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const handleOpenSettings = async () => {
    if (Platform.OS === "ios") {
      await Linking.openURL("app-settings:");
    } else {
      await Linking.openSettings();
    }
  };

  const handleOpenEmergencyContact = async () => {
    await Linking.openURL("tel:104");
  };

  const handleOpenCustomerSupport = async () => {
    const url = "https://example.com";
    await Linking.openURL(url);
  };
  const handleOpenWebsite = async () => {
    const url = "https://faiqueportfolio.netlify.app";
    await Linking.openURL(url);
  };

  const { isLoaded, signOut } = useAuth();
  const navigation = useNavigation();
  const onMenuPress = async (item) => {
    switch (item.name) {
      case "Website":
        await handleOpenWebsite();
        break;
      case "Settings":
        await handleOpenSettings();
        break;
      case "Emergency Contact":
        await handleOpenEmergencyContact();
        break;
      case "Customer Support":
        await handleOpenCustomerSupport();
        break;
      case "LogOut":
        signOut();
        break;
      default:
        item.path ? navigation.navigate(item.path) : null;
        break;
    }
  };

  const { isSignedIn, user } = useUser();
  const menuList = [
    {
      id: 1,
      name: "Appointments",
      icon: "calendar",
      path: "my-appointments",
    },
    {
      id: 2,
      name: "Explore",
      icon: "search",
      path: "explore",
    },
    {
      id: 3,
      name: "Website",
      icon: "earth",
    },
    {
      id: 4,
      name: "Settings",
      icon: "settings",
    },
    {
      id: 5,
      name: "Emergency Contact",
      icon: "call",
    },
    {
      id: 6,
      name: "Customer Support",
      icon: "cloud-done",
    },
    {
      id: 7,
      name: "LogOut",
      icon: "exit",
    },
  ];

  return (
    <View style={{ padding: 5, marginTop: 70 }}>
      <View style={{ alignItems: "center", marginTop: 25 }}>
        <Image
          source={{ uri: user.imageUrl }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 99,
          }}
        />
        <Text
          style={{ fontFamily: "appfont-bold", fontSize: 25, marginTop: 15 }}
        >
          {user.fullName}
        </Text>
        <Text
          style={{
            fontSize: 18,
            marginTop: 5,
            color: Colors.Grey,
            fontFamily: "appfont-regular",
          }}
        >
          {user.primaryEmailAddress.emailAddress}
        </Text>
      </View>
      <FlatList
        data={menuList}
        numColumns={3}
        style={{ marginTop: 40 }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => onMenuPress(item)}
            style={{
              display: "flex",
              flex: 1,
              padding: 10,
              borderWidth: 1,
              alignItems: "center",
              margin: 9,
              borderRadius: 10,
              borderColor: Colors.LightGrey,
              backgroundColor: Colors.Sky,
            }}
          >
            <Ionicons name={item.icon} size={50} color={Colors.Primary} />
            <Text
              style={{
                fontSize: 12,
                marginTop: 7,
                fontFamily: "appfont-semibold",
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
