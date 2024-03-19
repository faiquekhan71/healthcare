import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import PageHeader from "../Components/Shared/PageHeader";
import Colors from "../../assets/Shared/Colors";
import DoctorInfo from "../Components/DoctorDetail/DoctorInfo";

export default function DoctorDetails() {
  const [doctor, setDoctor] = useState();
  const param = useRoute().params;
  const navigation = useNavigation();

  useEffect(() => {
    setDoctor(param.doctor);
  }, []);

  return (
    doctor && (
      <View style={{ backgroundColor: Colors.White, flex: 1 }}>
        <ScrollView>
          <View style={{ position: "absolute", zIndex: 10, margin: 15 }}>
            <PageHeader title={""} />
          </View>
          <View>
            <Image
              source={{ uri: doctor.attributes.image.data.attributes.url }}
              style={{ width: "100%", height: 300 }}
            />
            <View
              style={{
                marginTop: -20,
                backgroundColor: Colors.White,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                padding: 20,
              }}
            >
              <DoctorInfo doctor={doctor} />
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("doctor-appointment", {
              doctor: doctor,
            })
          }
          style={{
            padding: 13,
            margin: 10,
            borderRadius: 99,
            left: 0,
            right: 0,
            marginBottom: 10,
            zIndex: 20,
            backgroundColor: Colors.Primary,
          }}
        >
          <Text
            style={{
              color: Colors.White,
              textAlign: "center",
              fontFamily: "appfont-semibold",
              fontSize: 17,
            }}
          >
            Book Appointment
          </Text>
        </TouchableOpacity>
      </View>
    )
  );
}
