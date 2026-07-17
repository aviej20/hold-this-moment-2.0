import { useState } from 'react';

import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';

function Chat({onMessageSent}) {

  const [messages, setMessages] = useState([{
    role: "Therapist Bot",
    content: "I am here to help."
  }]);

  const [chatGridClass, setChatGridClass] = useState(false);

  function addMessage(sentMessage){
    onMessageSent();
    setChatGridClass(true);
    setMessages((prevMessages) =>{
      return [...prevMessages, {
        role: "User",
        content: sentMessage
      }];
    });
  }

  return (
    <div className={`main__chat ${chatGridClass ? "main__chat--grid" : ""}`}>
      {chatGridClass && <ChatWindow messages={messages} />}
      <ChatInput onSendMessage={addMessage}/>
    </div>
  );
}

export default Chat;