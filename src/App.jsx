import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import Navigation from "./components/Navigation";
import ResourceLinks from "./components/ResourceLinks";
import MainHeader from "./components/MainHeader";
import Chat from "./components/Chat";
import Footer from "./components/Footer";
import "./styles.scss";

function App() {
  const [conversation, setConversation] = useState(() => {
    try {
      const prevConversation = localStorage.getItem("conversation");
      const parsedPrevConversation = JSON.parse(prevConversation);

      if (
        !parsedPrevConversation ||
        !Array.isArray(parsedPrevConversation.messages)
      )
        return null;

      return parsedPrevConversation;
    } catch (err) {
      console.log(err);
      return null;
    }
  });

  useEffect(() => {
    if (!conversation) {
      localStorage.removeItem("conversation");
      return;
    }
    localStorage.setItem("conversation", JSON.stringify(conversation));
  }, [conversation]);

  const hasConversationStarted = (conversation?.messages.length ?? 0) > 0;
  const [showSplash, setShowSplash] = useState(!hasConversationStarted);
  const [firstMessageSent, setFirstMessageSent] = useState(
    hasConversationStarted,
  );

  return (
    <>
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <div className="grid-wrapper">
          <Navigation />
          <ResourceLinks phone={"988"} link={"https://988lifeline.org/"} />
          <main className="main-container">
            {!firstMessageSent && <MainHeader />}
            <Chat
              onMessageSent={() => {
                setFirstMessageSent(true);
              }}
              conversation={conversation}
              setConversation={setConversation}
              firstMessageSent={firstMessageSent}
            />
          </main>
          <Footer link={"https://www.alejandro-viejo.com/"} />
        </div>
      )}
    </>
  );
}

export default App;
