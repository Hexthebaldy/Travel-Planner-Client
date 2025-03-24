import React from 'react';
import Chatbot from '../components/Chatbot';
import './Chat.css';

const Chat: React.FC = () => {
  return (
    <div className="home-page">      
      <Chatbot />
    </div>
  );
};

export default Chat;