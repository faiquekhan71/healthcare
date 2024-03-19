import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import PageHeader from "../Components/Shared/PageHeader";
import HospitalDoctorsTab from "../Components/HospitalDoctorsScreen/HospitalDoctorsTab";
import HospitalListBig from "../Components/HospitalDoctorsScreen/HospitalListBig";
import GlobalAPI from "../Services/GlobalAPI";
import Colors from "../../assets/Shared/Colors";
import DoctorList from "../Components/HospitalDoctorsScreen/DoctorList";

export default function HospitalDoctorsListScreen() {
  const [hospitalList, setHospitalList] = useState([]);
  const [doctorsList, setDoctorsList] = useState([]);

  const param = useRoute().params;
  const [activeTab, setActiveTab] = useState("Hospital");

  useEffect(() => {
    activeTab == "Hospital" ? getHospitalsByCategory() : getDoctorsByCategory();
  }, [activeTab]);

  const getHospitalsByCategory = () => {
    GlobalAPI.getHospitalsByCategory(param?.categoryName).then((resp) => {
      setHospitalList(resp.data.data);
    });
  };

  const getDoctorsByCategory = () => {
    GlobalAPI.getDoctorsByCategory(param?.categoryName).then((resp) => {
      setDoctorsList(resp.data.data);
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <PageHeader title={param?.categoryName} />

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
