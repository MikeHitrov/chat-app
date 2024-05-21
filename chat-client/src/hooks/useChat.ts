import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { Message } from "../types";
import {
  sendMessage as sendMessageApi,
  getMessagesByUser,
} from "../services/api";
import { jwtDecode } from "jwt-decode";

const socket = io("http://localhost:3001");

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded: { id: number } = jwtDecode(token);
      const userID = decoded.id;

      getMessagesByUser(userID).then((response) => {
        setMessages(response.data);
      });
    }

    socket.on("message", (message: Message) => {
      setMessages((prev) => [...prev, message]);
    });
    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = async (content: string) => {
    const token = localStorage.getItem("token");

    if (token) {
      const decoded: { id: number } = jwtDecode(token);
      const userID = decoded.id;

      const userMessage: Message = {
        sender: "user",
        content,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMessage]);
      const response = await sendMessageApi({
        sender: "user",
        content,
        userID,
      });

      const botMessage: Message = {
        sender: "bot",
        content: response.data,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }
  };

  return { messages, sendMessage };
};
