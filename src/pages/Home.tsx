import React from 'react';
import Chatbot from '../components/Chatbot';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <div className="home-header">
        <h1 className="home-title">AI Travel Planner</h1>
        <p className="home-subtitle">
          Use our intelligent assistant to easily plan your next trip. Tell us your preferences,
          and we will provide you with personalized travel recommendations and complete itineraries.
        </p>
      </div>

      <div className="home-features">
        <div className="feature-card">
          <div className="feature-icon">✈️</div>
          <h3 className="feature-title">Smart Itinerary Planning</h3>
          <p className="feature-description">
            Based on your interests, budget, and time, our AI will create the optimal travel route for you.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🏨</div>
          <h3 className="feature-title">Accommodation Recommendations</h3>
          <p className="feature-description">
            Get hotel and accommodation suggestions that match your budget and preferences for a comfortable travel experience.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🍽️</div>
          <h3 className="feature-title">Culinary Exploration</h3>
          <p className="feature-description">
            Discover local specialties and restaurants at your destination, and experience the local food culture.
          </p>
        </div>
      </div>

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