export default ChatWindow;

import { useState } from "react";

function ChatWindow({messages}){

    return(
        <div className="chat__window">
        {messages.map((message, index) => (
          <p key={index} className={`message message--${message.role.replaceAll(' ', '-').toLowerCase()}`}>
            <span className="message__role">{message.role}: </span> {message.content}
          </p>
        )) }
      </div>
    );

}