import Button from "./Button";
import { useState } from 'react';

export default ChatInput;

function ChatInput({onSendMessage}){

    const [message, setMessage] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        if (!message.trim()) return;
        
        onSendMessage(message);
        setMessage("");
    }

    return(
        <div className="chat__input">
            <form id="chat-input__form" onSubmit={handleSubmit}>
                <label htmlFor="user-input" className="hidden">Text Chat Input</label>
                <textarea id="user-input" name="user-input" rows="3" placeholder="I just need someone to talk to..." required value={message} onChange={(e) => setMessage(e.target.value) }></textarea>
                <Button label={"Send"} classList={["btn--send"]} type={"submit"}/>
            </form>
        </div>
    );
}