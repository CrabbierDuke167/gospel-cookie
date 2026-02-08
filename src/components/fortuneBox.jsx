import React from "react";
import { RefreshCw } from "lucide-react";
import "../extra-css/box.css";

const FortuneBox = ({ verseText, verseRef, loading, onReset }) => {
  return (
    <div className="box">
      <h3 className="fortune-text">{loading ? "loading verse..." : verseText}</h3>
      <h5 className="fortune-ref">{verseRef || "— BOOK CHAPTER:VERSE —"}</h5>
      <div className="reset" onClick={onReset}>
        <span className="reset-text">Another Cookie?</span>
        <span className="reset-icon">
          <RefreshCw size={18} strokeWidth={1.5} />
        </span>
      </div>
    </div>
  );
};

export default FortuneBox;
