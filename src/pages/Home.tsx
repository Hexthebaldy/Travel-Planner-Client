import React from 'react';
import Chatbot from '../components/Chatbot';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">      
      <div className="chatbot-section">
        <div className="chatbot-header">
          Chat with Travel Assistant
        </div>
        <Chatbot />
      </div>
    </div>
  );
};

export default Home;