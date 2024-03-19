import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  Modal,
  ScrollView,
  Alert,
} from "react-native";
import WebView from "react-native-webview";

const Medicines = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedDisease, setSelectedDisease] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const diseaseOptions = [
    {
      name: "Cold",
      image: require("./../../assets/images/Cold.png"),
      medicines: ["Acetaminophen", "Ibuprofen"],
      description:
        "The common cold is a viral infection affecting the nose and throat.",
      symptoms:
        "Symptoms include sneezing, sore throat, runny or stuffy nose, coughing, and fatigue.",
      cure: "Colds typically resolve on their own within a week. Rest, hydration, and over-the-counter medications may help alleviate symptoms.",
      diet: "Increase fluid intake, consume warm soups, and consume foods rich in vitamin C.",
      exerciseVideo: "https://www.youtube.com/embed/exercise",
    },
    {
      name: "Fever",
      image: require("./../../assets/images/Fever.png"),
      medicines: ["Tylenol", "Advil"],
      description:
        "Fever is a temporary increase in body temperature, often in response to an infection or illness.",
      symptoms:
        "Symptoms include elevated body temperature, chills, sweating, headache, and muscle aches.",
      cure: "Fever often resolves on its own. Treatment involves rest, hydration, and over-the-counter fever reducers.",
      diet: "Stay hydrated with water, consume clear fluids, and eat light, easily digestible foods.",
      exerciseVideo: "https://www.youtube.com/embed/exercise",
    },
    {
      name: "Allergies",
      image: require("./../../assets/images/Allergies.png"),
      medicines: ["Antihistamines", "Corticosteroids"],
      description:
        "Allergies occur when the immune system overreacts to a harmless substance, such as pollen or pet dander.",
      symptoms:
        "Symptoms include sneezing, runny or stuffy nose, itchy or watery eyes, and skin rashes or hives.",
      cure: "Avoiding allergens is the best way to prevent symptoms. Medications like antihistamines and nasal sprays can provide relief.",
      diet: "Certain foods may exacerbate allergies, so it's essential to identify and avoid triggers. Consume foods rich in vitamin C and omega-3 fatty acids to support the immune system.",
      exerciseVideo: "https://www.youtube.com/embed/exercise",
    },
    {
      name: "Headache",
      image: require("./../../assets/images/Headache.png"),
      medicines: ["Aspirin", "Excedrin"],
      description:
        "Headaches can occur due to various factors, including stress, tension, dehydration, or underlying health conditions.",
      symptoms:
        "Symptoms include pain or pressure in the head, sensitivity to light or sound, and nausea.",
      cure: "Treatment depends on the underlying cause. Over-the-counter pain relievers, relaxation techniques, and lifestyle changes may help alleviate headaches.",
      diet: "Stay hydrated, avoid caffeine and alcohol, and consume magnesium-rich foods like nuts, seeds, and leafy greens.",
      exerciseVideo: "https://www.youtube.com/embed/exercise",
    },
    {
      name: "Diabetes",
      image: require("./../../assets/images/Diabetes.png"),
      medicines: ["Insulin", "Metformin"],
      description:
        "Diabetes is a chronic condition characterized by high blood sugar levels, resulting from insulin resistance or insufficient insulin production.",
      symptoms:
        "Symptoms include increased thirst, frequent urination, fatigue, blurred vision, and slow wound healing.",
      cure: "Diabetes is managed through medication, diet, exercise, and lifestyle modifications. Insulin therapy may be necessary for type 1 diabetes.",
      diet: "Follow a balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats. Monitor carbohydrate intake and avoid sugary foods and beverages.",
      exerciseVideo: "https://www.youtube.com/embed/exercise",
    },
    {
      name: "Hypertension",
      image: require("./../../assets/images/Hypertension.png"),
      medicines: ["ACE inhibitors", "Calcium channel blockers"],
      description:
        "Hypertension, or high blood pressure, occurs when the force of blood against artery walls is consistently too high.",
      symptoms:
        "Hypertension is often asymptomatic but may cause headaches, shortness of breath, nosebleeds, or vision changes in severe cases.",
      cure: "Treatment involves lifestyle modifications and medication to lower blood pressure and reduce the risk of complications.",
      diet: "Adopt the DASH (Dietary Approaches to Stop Hypertension) diet, which emphasizes fruits, vegetables, whole grains, and lean proteins while limiting sodium, saturated fats, and added sugars.",
      exerciseVideo: "https://www.youtube.com/embed/exercise",
    },
    {
      name: "Asthma",
      image: require("./../../assets/images/Asthma.png"),
      medicines: ["Albuterol", "Inhaled corticosteroids"],
      description:
        "Asthma is a chronic respiratory condition characterized by inflammation and narrowing of the airways, leading to difficulty breathing.",
      symptoms:
        "Symptoms include wheezing, coughing, chest tightness, and shortness of breath, which may worsen in response to triggers like allergens, exercise, or cold air.",
      cure: "While asthma has no cure, it can be managed with medication and lifestyle changes. Quick-relief inhalers provide immediate relief during asthma attacks, while controller medications prevent symptoms and reduce inflammation.",
      diet: "Consume a balanced diet rich in fruits, vegetables, whole grains, and lean proteins. Avoid foods that may trigger asthma symptoms, such as sulfites, preservatives, and high-sodium foods.",
      exerciseVideo: "https://www.youtube.com/embed/exercise",
    },
    {
      name: "Arthritis",
      image: require("./../../assets/images/Arthritis.png"),
      medicines: ["NSAIDs", "DMARDs"],
      description:
        "Arthritis is a group of conditions characterized by inflammation and stiffness of the joints, causing pain and reduced mobility.",
      symptoms:
        "Symptoms include joint pain, stiffness, swelling, and decreased range of motion. Arthritis may also affect other organs and cause fatigue and fever.",
      cure: "While there is no cure for arthritis, treatment aims to manage symptoms, improve joint function, and prevent disease progression. Medications, physical therapy, and lifestyle changes are often recommended.",
      diet: "Follow an anti-inflammatory diet rich in fruits, vegetables, fish, nuts, and seeds. Limit processed foods, refined sugars, and saturated fats, which may exacerbate inflammation.",
      exerciseVideo: "https://www.youtube.com/embed/exercise",
    },
  ];

  const handlePress = (disease) => {
    const selected = diseaseOptions.find((option) => option.name === disease);
    setSelectedDisease(selected);
    setModalVisible(true);
  };

  const handleSearchChange = (text) => {
    setSearch(text);
    const filteredSuggestions = diseaseOptions.filter((option) =>
      option.name.toLowerCase().includes(text.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleOkayPress = () => {
    setModalVisible(false);
    Alert.alert(
      "Stay Healthy ... Stay Safe",
      "Your Health is our first Priority",
      [{ text: "Thank You !!!" }]
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.header}> Choose a Disease </Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search diseases ..."
        value={search}
        onChangeText={handleSearchChange}
      />
      <View style={styles.gridContainer}>
        {(search === "" ? diseaseOptions : suggestions).map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.option}
            onPress={() => handlePress(option.name)}
          >
            <Image source={option.image} style={styles.image} />
            <Text style={styles.label}>{option.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <ScrollView contentContainerStyle={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedDisease?.name}</Text>
            <Text style={styles.modalSubTitle}>Medicines:</Text>
            {selectedDisease?.medicines.map((medicine, index) => (
              <Text key={index}>{medicine}</Text>
            ))}
            <Text style={styles.modalSubTitle}>Description:</Text>
            <Text>{selectedDisease?.description}</Text>
            <Text style={styles.modalSubTitle}>Symptoms:</Text>
            <Text>{selectedDisease?.symptoms}</Text>
            <Text style={styles.modalSubTitle}>Cure:</Text>
            <Text>{selectedDisease?.cure}</Text>
            <Text style={styles.modalSubTitle}>Diet Suggestions:</Text>
            <Text>{selectedDisease?.diet}</Text>
            <Text style={styles.modalSubTitle}>Exercise Video:</Text>
            <View style={styles.videoContainer}>
              <WebView
                source={{ uri: selectedDisease?.exerciseVideo }}
                style={styles.video}
              />
            </View>
            <TouchableOpacity
              style={styles.okayButton}
              onPress={handleOkayPress}
            >
              <Text style={styles.okayButtonText}>Okay</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontFamily: "appfont-bold",
    marginBottom: 20,
    textAlign: "center",
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontFamily: "appfont-regular",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    fontFamily: "appfont-regular",
  },
  option: {
    width: "48%",
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 5,
    backgroundColor: "#fff",
    fontFamily: "appfont-regular",
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  label: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    paddingVertical: 10,
    backgroundColor: "#fff",
    fontFamily: "appfont-bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 27,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "95%",
    maxHeight: "95%",
    fontFamily: "appfont-regular",
  },
  modalTitle: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "appfont-bold",
  },
  modalSubTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  videoContainer: {
    width: "100%",
    aspectRatio: 16 / 9,
    marginTop: 15,
  },
  video: {
    flex: 1,
    borderRadius: 10,
  },
  okayButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "center",
    fontFamily: "appfont-bold",
  },
  okayButtonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "appfont-bold",
  },
});

export default Medicines;
