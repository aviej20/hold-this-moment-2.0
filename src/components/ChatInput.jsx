import Button from "./Button";
import { useState } from "react";

export default ChatInput;

function ChatInput({ onSendMessage, isLoading, deleteMessages }) {
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!message.trim()) return;

    onSendMessage(message);
    setMessage("");
  }

  return (
    <div className="chat__input">
      <form id="chat-input__form" onSubmit={handleSubmit}>
        <label htmlFor="user-input" className="hidden">
          Text Chat Input
        </label>
        <textarea
          id="user-input"
          name="user-input"
          rows="3"
          placeholder="I just need someone to talk to..."
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={isLoading}
        ></textarea>
        <div className="btn-group">
          <Button
            label={"Delete Chat"}
            classList={["btn--delete"]}
            type={"button"}
            clickFunction={deleteMessages}
            disabled={isLoading}
          />
          <Button
            label={"Send"}
            classList={["btn--send"]}
            type={"submit"}
            disabled={isLoading}
          />
        </div>
      </form>
    </div>
  );
}
