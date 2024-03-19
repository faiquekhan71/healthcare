import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import HospitalDoctorsListScreen from "../Screens/HospitalDoctorsListScreen";
import HospitalDetails from "../Screens/HospitalDetails";
import BookAppointment from "../Screens/BookAppointment";
import DoctorDetails from "../Screens/DoctorDetails";
import Appointment from "../Screens/Appointment";
import Explore from "../Screens/Explore";
import Medicines from "../Screens/Medicines";

const Stack = createStackNavigator();
export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Homes" component={Home} />
      <Stack.Screen
        name="hospital-doctor-list-screen"
        component={HospitalDoctorsListScreen}
      />
      <Stack.Screen name="hospital-detail" component={HospitalDetails} />
      <Stack.Screen name="doctor-detail" component={DoctorDetails} />
      <Stack.Screen name="book-appointment" component={BookAppointment} />
      <Stack.Screen name="doctor-appointment" component={BookAppointment} />
      <Stack.Screen name="my-appointments" component={Appointment} />
      <Stack.Screen name="explore" component={Explore} />
      <Stack.Screen name="medicines" component={Medicines} />
    </Stack.Navigator>
  );
}
