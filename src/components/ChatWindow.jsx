export default ChatWindow;

import { useRef, useEffect } from "react";

function ChatWindow({ messages, isLoading }) {
  const chatWindowRef = useRef(null);

  useEffect(() => {
    if (!chatWindowRef.current) return;
    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
  }, [isLoading, messages]);

  return (
    <div className="chat__window" ref={chatWindowRef}>
      {messages.map((message) => (
        <div
          key={message.id}
          className={`message message--${message.role.replaceAll(" ", "-").toLowerCase()}`}
        >
          <p className="message__content">{message.content}</p>
          <span className="message__role">
            {message.role === "assistant"
              ? "Therapist Bot"
              : message.role === "system"
                ? "Error"
                : "User"}
          </span>
        </div>
      ))}

      {isLoading && (
        <div className="message message--therapist">
          <p className="message__content">Thinking...</p>
          <span className="message__role"> Therapist Bot</span>
        </div>
      )}
    </div>
  );
}
