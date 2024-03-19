import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import HospitalDoctorsTab from "../Components/HospitalDoctorsScreen/HospitalDoctorsTab";
import HospitalListBig from "../Components/HospitalDoctorsScreen/HospitalListBig";
import DoctorList from "../Components/HospitalDoctorsScreen/DoctorList";
import Colors from "../../assets/Shared/Colors";
import GlobalAPI from "../Services/GlobalAPI";

export default function Explore() {
  const [hospitalList, setHospitalList] = useState([]);
  const [doctorsList, setDoctorsList] = useState([]);

  const [activeTab, setActiveTab] = useState("Hospital");
  useEffect(() => {
    activeTab == "Hospital" ? getAllHospitals() : getAllDoctors();
  }, [activeTab]);

  const getAllHospitals = () => {
    GlobalAPI.getAllHospitals().then((resp) => {
      setHospitalList(resp.data.data);
    });
  };

  const getAllDoctors = () => {
    GlobalAPI.getAllDoctors().then((resp) => {
      setDoctorsList(resp.data.data);
    });
  };
  return (
    <View style={{ padding: 20, marginTop: 25 }}>
      <Text
        style={{
          fontSize: 26,
          fontFamily: "appfont-semibold",
        }}
      >
        Explore
      </Text>
      <HospitalDoctorsTab activeTab={(value) => setActiveTab(value)} />
      {!hospitalList?.length ? (
        <ActivityIndicator
          size={"large"}
          color={Colors.Primary}
          style={{ marginTop: "70%" }}
        />
      ) : activeTab == "Hospital" ? (
        <HospitalListBig hospitalList={hospitalList} />
      ) : (
        <DoctorList doctorsList={doctorsList} />
      )}
    </View>
  );
}
