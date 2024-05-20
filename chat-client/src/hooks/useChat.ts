import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { Message } from '../types';
import { sendMessage as sendMessageApi } from '../services/api';

const socket = io('http://localhost:3001');

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    socket.on('message', (message: Message) => {
      setMessages((prev) => [...prev, message]);
    });
    return () => {
      socket.off('message');
    };
  }, []);

  const sendMessage = async (content: string) => {
    const userMessage: Message = { sender: 'user', content, timestamp: new Date() };
    setMessages((prev) => [...prev, userMessage]);
    
    const response = await sendMessageApi(content);

    const botMessage: Message = { sender: 'bot', content: response.data, timestamp: new Date() };
    setMessages((prev) => [...prev, botMessage]);
  };

  return { messages, sendMessage };
};
