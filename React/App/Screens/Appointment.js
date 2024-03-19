import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import PageHeader from "../Components/Shared/PageHeader";
import GlobalAPI from "../Services/GlobalAPI";
import { useUser } from "@clerk/clerk-expo";
import AppointmentCardItem from "../Components/Appointment/AppointmentCardItem";
import HorizontalLine from "../Components/Shared/HorizontalLine";

export default function Appointment() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [appointmentList, setAppointmentList] = useState([]);
  useEffect(() => {
    if (user.firstName) {
      getUserAppointments();
    }
  }, [user]);
  const getUserAppointments = () => {
    GlobalAPI.getUserAppointments(user.primaryEmailAddress.emailAddress).then(
      (resp) => {
        setAppointmentList(resp.data.data);
      }
    );
  };
  return (
    <View style={{ padding: 20 }}>
      <PageHeader title={"My Appointments"} backButton={false} />
      <Text
        style={{
          fontSize: 12,
          fontFamily: "appfont-semibold",
          marginTop: 15,
          marginBottom: 10,
        }}
      >
        Your Punctuality is our Priority : Be on Time , Everytime !
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={appointmentList}
        renderItem={({ item }) => <AppointmentCardItem appointment={item} />}
      />
    </View>
  );
}
