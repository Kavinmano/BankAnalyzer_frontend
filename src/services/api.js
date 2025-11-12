import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/analyzer",
});

export const uploadStatement = (formData) =>
  API.post("/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
