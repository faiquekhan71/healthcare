import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ToastAndroid,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../../../assets/Shared/Colors";
import SubHeading from "../Home/SubHeading";
import moment from "moment";
import GlobalAPI from "../../Services/GlobalAPI";
import { useUser } from "@clerk/clerk-expo";

export default function BookingSection({ hospital }) {
  const [next7Days, setNext7Days] = useState([]);
  const [timeList, setTimeList] = useState([]);
  const { isLoaded, isSignedIn, user } = useUser();
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [notes, setNotes] = useState();
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    getDays();
    getTime();
  }, []);
  const getDays = () => {
    const today = moment();
    const nextSevenDays = [];
    for (let i = 1; i < 8; i++) {
      const date = moment().add(i, "days");
      nextSevenDays.push({
        date: date,
        day: date.format("ddd"),
        formatedDate: date.format("Do MMM"),
      });
    }
    setNext7Days(nextSevenDays);
  };
  const getTime = () => {
    const timeList = [];
    for (let i = 9; i <= 12; i++) {
      timeList.push({
        time: i + ":00 am",
      });
      timeList.push({
        time: i + ":30 am",
      });
    }
    for (let i = 1; i <= 5; i++) {
      timeList.push({
        time: i + ":00 pm",
      });
      timeList.push({
        time: i + ":30 pm",
      });
    }
    setTimeList(timeList);
  };

  const bookAppointment = () => {
    setLoader(true);
    const data = {
      data: {
        UserName: user.fullName,
        Date: selectedDate,
        Time: selectedTime,
        Email: user.primaryEmailAddress.emailAddress,
        hospitals: hospital.id,
        Note: notes,
      },
    };
    GlobalAPI.createAppointment(data).then(
      (resp) => {
        console.log(resp);
        setLoader(false);
        ToastAndroid.show("Appointment Booked !!!", ToastAndroid.LONG);
      },
      (error) => {
        setLoader(false);
      }
    );
  };
  return (
    <View>
      <Text style={{ fontSize: 18, color: Colors.Grey }}>
        Book Your Appointment Now
      </Text>
      <SubHeading subHeadingTitle={"Day  🗓️"} seeAll={false} />
      <FlatList
        data={next7Days}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.dayButton,
              selectedDate == item.date
                ? { backgroundColor: Colors.Primary }
                : null,
            ]}
            onPress={() => setSelectedDate(item.date)}
          >
            <Text
              style={[
                { fontFamily: "appfont-regular" },
                selectedDate == item.date ? { color: Colors.White } : null,
              ]}
            >
              {item.day}
            </Text>
            <Text
              style={[
                { fontFamily: "appfont-semibold", fontSize: 16 },
                selectedDate == item.date ? { color: Colors.White } : null,
              ]}
            >
              {item.formatedDate}
            </Text>
          </TouchableOpacity>
        )}
      />

      <SubHeading subHeadingTitle={"Time  🕒"} seeAll={false} />
      <FlatList
        data={timeList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.dayButton,
              {
                paddingVertical: 15,
              },
              selectedTime == item.time
                ? { backgroundColor: Colors.Primary }
                : null,
            ]}
            onPress={() => setSelectedTime(item.time)}
          >
            <Text
              style={[
                { fontFamily: "appfont-semibold", fontSize: 16 },
                selectedTime == item.time ? { color: Colors.White } : null,
              ]}
            >
              {item.time}
            </Text>
          </TouchableOpacity>
        )}
      />
      <SubHeading subHeadingTitle={"Notes  🗒️"} seeAll={false} />
      <TextInput
        onChangeText={(value) => setNotes(value)}
        numberOfLines={4}
        style={{
          backgroundColor: Colors.LightGrey,
          padding: 10,
          borderRadius: 10,
          borderColor: Colors.Secondary,
          borderWidth: 1,
          textAlignVertical: "top",
        }}
        placeholder="Write Your Notes Here ..."
      />
      <TouchableOpacity
        onPress={() => bookAppointment()}
        disabled={loader}
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
        {!loader ? (
          <Text
            style={{
              color: Colors.White,
              textAlign: "center",
              fontFamily: "appfont-semibold",
              fontSize: 17,
            }}
          >
            Make an Appointment
          </Text>
        ) : (
          <ActivityIndicator />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  dayButton: {
    borderWidth: 1,
    borderRadius: 99,
    padding: 5,
    paddingHorizontal: 20,
    alignItems: "center",
    marginRight: 10,
    borderColor: Colors.Grey,
  },
});
