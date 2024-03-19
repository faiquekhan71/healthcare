import axios from "axios";

const BASE_URL = "http://192.168.252.42:1337/api";

const API_KEY =
  "cd35ac9706438e90f53e3b7f6a91b29bdc1af053382ec7ee68eb0e2ec75471503f7f8de3a6b6821c4c6ad7af0a4a5cfd8879442ff854478ff6c9d434ac5c44a53f47d2ca347ff7e298f27c83e83850df316b4bc7b2d55399945b0f8932577ba58b6740c39bb817686df4aaf1e98d1cd3b5cf095accaf534e1aeacaaac1c4224f";

const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: "Bearer " + API_KEY,
  },
});

const getSlider = () => AxiosInstance.get("/sliders?populate=*");

const getCategories = () => AxiosInstance.get("/categories?populate=*");

const getPremiumHospitals = () =>
  AxiosInstance.get("/hospitals?filters[Premium][$eq]=true&populate=*");

const getHospitalsByCategory = (category) =>
  AxiosInstance.get(
    "/hospitals?filters[categories][Name][$in]=" + category + "&populate=*"
  );

const getDoctorsByCategory = (category) =>
  AxiosInstance.get(
    "/doctors?filters[category][Name][$in]=" + category + "&populate=*"
  );

const createAppointment = (data) => AxiosInstance.post("/appointments", data);

const getAllHospitals = () => AxiosInstance.get("/hospitals?populate=*");

const getAllDoctors = () => AxiosInstance.get("/doctors?populate=*");

const getUserAppointments = (email) =>
  AxiosInstance.get(
    "/appointments?filters[email][$eq]=" + email + "&populate=*"
  );

export default {
  getSlider,
  getCategories,
  getPremiumHospitals,
  getHospitalsByCategory,
  getDoctorsByCategory,
  createAppointment,
  getAllHospitals,
  getAllDoctors,
  getUserAppointments,
};
