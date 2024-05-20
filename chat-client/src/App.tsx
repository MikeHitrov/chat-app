import React from 'react';
import ChatView from './components/ChatView';
import { useChat } from './hooks/useChat';

const App: React.FC = () => {
  const { messages, sendMessage } = useChat();

  return (
    <div className="app">
      <ChatView messages={messages} onSendMessage={sendMessage} />
    </div>
  );
};

export default App;
