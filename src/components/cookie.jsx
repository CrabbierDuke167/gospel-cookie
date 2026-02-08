import React from "react";
import "../extra-css/cookie.css";
import before from "../assets/cookiebefore.png";
import cracking1 from "../assets/cookiecracking1.png";
import cracking2 from "../assets/cookiecracking.png";
import after from "../assets/cookieafter.png";

const Cookie = ({ stage, onClick }) => {
  const imgSrc =
    stage === "before"
      ? before
      : stage === "crack1"
      ? cracking1
      : stage === "crack2"
      ? cracking2
      : after;

  return (
    <div className="cookie">
      <img
        src={imgSrc}
        alt="cookie"
        onClick={onClick}
        className={stage === "after" ? "opened" : ""}
      />
    </div>
  );
};

export default Cookie;
