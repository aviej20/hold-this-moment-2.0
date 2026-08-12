import { useState } from "react";

import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";

const viteAPI = import.meta.env.VITE_API_BASE_URL;

function Chat({
  onMessageSent,
  conversation,
  setConversation,
  firstMessageSent,
}) {
  const conversationMessages = conversation?.messages ?? [];

  const chatGridClass = firstMessageSent;

  const [isLoading, setIsLoading] = useState(false);

  function addMessage(role, sentMessage) {
    const trimmedMessage = sentMessage.trim();
    if (!trimmedMessage) return;
    const updateTime = new Date().toISOString();

    const additionalMessageObj = {
      id: crypto.randomUUID(),
      role: role,
      createdAt: updateTime,
      content: trimmedMessage,
    };

    setConversation((prevConversation) => {
      return {
        id: prevConversation.id,
        title: prevConversation.title,
        createdAt: prevConversation.createdAt,
        updatedAt: updateTime,
        messages: [...prevConversation.messages, additionalMessageObj],
      };
    });
  }

  async function sendMessage(messages) {
    const strippedMessages = messages
      .filter((message) => message.role !== "system")
      .map((message) => {
        return {
          role: message.role,
          content: message.content,
        };
      });

    const response = await fetch(viteAPI + "/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: strippedMessages,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error || `Request failed with status ${response.status}`,
      );
    }

    addMessage("assistant", data.answer);
  }

  async function handleMessages(message) {
    const updateTime = new Date().toISOString();
    onMessageSent?.();
    const messageObj = {
      id: crypto.randomUUID(),
      role: "user",
      createdAt: updateTime,
      content: message.trim(),
    };

    const newConversation = {
      id: conversation?.id ?? crypto.randomUUID(),
      title: conversation?.title ?? "New conversation",
      createdAt: conversation?.createdAt ?? updateTime,
      updatedAt: updateTime,
      messages: [...conversationMessages, messageObj],
    };

    setConversation(newConversation);
    setIsLoading(true);

    try {
      await sendMessage(newConversation.messages);
    } catch (error) {
      console.error("Unable to send message:", error);
      addMessage(
        "system",
        "Sorry, I couldn't process your message. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  function deleteConversation() {
    setConversation(null);
  }

  return (
    <div className={`main__chat ${chatGridClass ? "main__chat--grid" : ""}`}>
      {chatGridClass && (
        <ChatWindow messages={conversationMessages} isLoading={isLoading} />
      )}
      <ChatInput
        onSendMessage={handleMessages}
        isLoading={isLoading}
        deleteMessages={deleteConversation}
      />
    </div>
  );
}

export default Chat;
