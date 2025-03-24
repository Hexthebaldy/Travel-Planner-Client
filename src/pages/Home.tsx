import React from 'react';
import Chatbot from '../components/Chatbot';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <div className="home-header">
        <h1 className="home-title">AI 旅行规划助手</h1>
        <p className="home-subtitle">
          使用我们的智能助手，轻松规划您的下一次旅行。告诉我们您的偏好，
          我们将为您提供个性化的旅行建议和完整的行程安排。
        </p>
      </div>

      <div className="home-features">
        <div className="feature-card">
          <div className="feature-icon">✈️</div>
          <h3 className="feature-title">智能行程规划</h3>
          <p className="feature-description">
            基于您的兴趣、预算和时间，我们的AI将为您创建最佳旅行路线。
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🏨</div>
          <h3 className="feature-title">住宿推荐</h3>
          <p className="feature-description">
            获取符合您预算和偏好的酒店和住宿建议，享受舒适的旅行体验。
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🍽️</div>
          <h3 className="feature-title">美食探索</h3>
          <p className="feature-description">
            发现目的地的特色美食和餐厅，体验当地的饮食文化。
          </p>
        </div>
      </div>

      <div className="chatbot-section">
        <div className="chatbot-header">
          与旅行助手对话
        </div>
        <Chatbot />
      </div>
    </div>
  );
};

export default Home;