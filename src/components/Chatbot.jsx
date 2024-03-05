{/*import React, { useState } from React;

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

    const getBotResponse = (userMessage) => {
        //Add more bot logic
        if (userMessage.toLowerCase().includes('hello')) {
            return 'Hi there! How can I help you?';
        } else {
            return "I'm sorry, I don't understand."
        }
    };

    return (
        <div>
            <div>
                {messages.map((message, index) => (
                    <div key={index} className={message.sender}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div>
                <input type="text" value={input} onChange={handleInputChange} />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat*/}