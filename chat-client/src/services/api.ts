import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const sendMessage = (message: string) =>
  api.post("chat/sendMessage", { message });
