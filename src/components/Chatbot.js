import React, { useState } from React;

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSendMessage = () => {
        const userMessage = input;
        setMessages([...messages, { text: userMessage, sender: 'user'}]);

        const botResponse = getBotResponse(userMessage);
        setMessages([...messages, { text: botResponse, sender: 'bot'}]);

        setInput('');
    };

    
}