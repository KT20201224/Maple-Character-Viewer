import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api", // ✅ 백엔드 API 기본 주소
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
