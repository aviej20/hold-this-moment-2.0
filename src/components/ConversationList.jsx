function ConversationList(conversations) {
  return (
    <div className="conversations-list-wrapper">
      <ul>
        {conversations.map((conversation) => {
          <li className="conversation--list-item">{conversation.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default ConversationList;
