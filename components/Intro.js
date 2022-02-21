import React from "react";

export default function Intro(props) {
  console.log(props);
  return (
    <>
      <div className="intro-lemony-blob"></div>
      <div className="intro">
        <div className="intro-title">
          <h1>Quizzical</h1>
        </div>
        <div className="intro-description">
          <p>Some description if needed</p>
        </div>
        <div className="intro-play-again">
          <button onClick={() => props.setActivePage("questions")}>
            Start Quiz
          </button>
        </div>
      </div>
      <div className="intro-baby-blob"></div>
    </>
  );
}
