import React, { useState } from "react";
import Cookie from "./cookie";
import FortuneBox from "./fortuneBox";
import { useVerse } from "../hooks/useVerse";
import "../extra-css/cookieSection.css";

const CookieSection = () => {
  const [cookieStage, setCookieStage] = useState("before");
  const [showFortune, setShowFortune] = useState(false);
  const { verseText, verseRef, fetchVerse, loading } = useVerse();

  const handleCookieClick = () => {
    if (cookieStage !== "before") return;

    setCookieStage("crack1");
    setTimeout(() => setCookieStage("crack2"), 240);
    setTimeout(() => {
      setCookieStage("after");
      setShowFortune(true);
      fetchVerse();
    }, 480);
  };

  const handleReset = () => {
    setCookieStage("before");
    setShowFortune(false);
    fetchVerse();
  };

  return (
    <div className="cookie-section">
      <Cookie stage={cookieStage} onClick={handleCookieClick} />

      {!showFortune && cookieStage === "before" && (
        <p className="click-text">
          <span>°✩ </span>Click on Cookie<span> ⋆｡</span>
        </p>
      )}

      {showFortune && (
        <div className={`fortune-wrapper ${showFortune ? "show" : ""}`}>
          <FortuneBox
            verseText={verseText}
            verseRef={verseRef}
            loading={loading}
            onReset={handleReset}
          />
        </div>
      )}
    </div>
  );
};

export default CookieSection;
