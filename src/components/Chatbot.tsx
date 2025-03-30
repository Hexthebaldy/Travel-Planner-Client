import React, {useState} from 'react';
import './Chatbot.css';
import { sendChatMessage } from '../services/api';

interface Message{
    text:string;
    sender:'user' | 'bot';
};

interface Response{
    success: boolean;
    data: string;
}

const Chatbot: React.FC = ()=>{
    const [messages,setMessages] = useState<Message[]>([]);
    const [input,setInput] = useState<string>('');
    const handleSend = ():void =>{
        if(input.trim() === '') return;
        //chat history append
        const newMessages = [...messages,{text:input, sender:'user'}] as Message[];
        setMessages(newMessages);
        setInput('');

        sendChatMessage(input).then((response) => {
            setMessages([...newMessages,{
                text: response.data,
                sender:'bot'
            }])
        });
    }

    return(
        <div className="chatbot-container">
            <div className="chatbot-messages">
                {messages.length === 0 ? (
                    <div className="empty-state">
                        <p>talk to AI Agent and design your trip ~</p>
                    </div>
                ):(
                    messages.map((msg,index)=>(
                        <div key={index} className={`message ${msg.sender}`}>
                            {msg.text}
                        </div>
                    ))
                )
                }
            </div>

            <div className="chatbot-input">
                <input 
                    type="text"
                    value={input}
                    onChange={(e)=> setInput(e.target.value)}
                    placeholder='Type your message...'
                 />
                 <button onClick={handleSend}>Send</button>
            </div>
        </div>
    )
}

export default Chatbot;