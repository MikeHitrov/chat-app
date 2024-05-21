import axios from "axios";

const API_URL = "http://localhost:3000";

export const sendMessage = (message: {
  content: string;
  sender: string;
  userID: number;
}) => {
  return axios.post(`${API_URL}/chat/sendMessage`, message, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const getMessagesByUser = (userID: number) => {
  return axios.get(`${API_URL}/chat/getMessages/${userID}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
