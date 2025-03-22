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

        //mock
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
                {

                }
            </div>
        </div>
    )
}

export default Chatbot;