import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useChat } from './hooks/useChat';
import ChatView from './components/ChatView';
import Login from './components/Login';
import Register from './components/Register';

const App: React.FC = () => {
  const { messages, sendMessage } = useChat();

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<ChatView messages={messages} onSendMessage={sendMessage} />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
   
  );
};

export default App;
