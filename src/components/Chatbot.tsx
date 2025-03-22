import React, {useState} from 'react';
import './Chatbot.css';

interface Message{
    text:string;
    sender:'user' | 'bot';
};

const Chatbot: React.FC = ()=>{
    const [messages,setMessages] = useState<Message[]>([]);
    const [input,setInput] = useState<string>('');
    const handleSend = ():void =>{
        if(input.trim() === '') return;
        //pack up user's info
        const newMessages = [...messages,{text:input, sender:'user'}] as Message[];
        setMessages(newMessages);
        setInput('');

        //mock(just for test)
        setTimeout(()=>{
            setMessages([...newMessages,{
                text:'I am dealing with your request ...',
                sender:'bot'
            }])
        },1000);
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