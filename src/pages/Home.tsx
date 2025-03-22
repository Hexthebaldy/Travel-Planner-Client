import React from "react";
import Chatbot from "../components/Chatbot";

const Home:React.FC = ()=>{
    return (
        <div>
            <h1>AI Travel Planner</h1>
            <p>Let's use AI Agent create your travel plan</p>
            <Chatbot/>
        </div>
    )
}

export default Home;