export default SplashScreen;

import { useState, useEffect } from "react";
import Button from "./Button";

function SplashScreen({ onComplete }) {
  const splashScreenMessages = [
    "My name is Alejandro",
    "I made this tool to get you through this moment.",
    "I believe in you. Let’s get you some help.",
  ];

  const [messageIndex, setMessageIndex] = useState(0);
  const [showText, setShowText] = useState(true);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 1500);

    return () => clearTimeout(buttonTimer);
  }, []);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setShowText(false);
    }, 2500);

    const changeTimer = setTimeout(() => {
      if (messageIndex < splashScreenMessages.length - 1) {
        setMessageIndex(messageIndex + 1);
        setShowText(true);
      } else {
        onComplete();
      }
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(changeTimer);
    };
  }, [messageIndex, onComplete]);

  return (
    <div className="splash-container">
      <div className="splash">
        <p className={`splash__text ${showText ? "show" : ""}`}>
          {splashScreenMessages[messageIndex]}
        </p>
        <Button
          label="skip"
          classList={[showButton ? "show" : "", "btn--skip"]}
          clickFunction={onComplete}
        />
      </div>
    </div>
  );
}
