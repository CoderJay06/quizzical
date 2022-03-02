import React, { useState } from "react";
import "./styles.css";
import Intro from "../components/Intro";
import Questions from "../components/Questions";

export default function App() {
  const [activePage, setActivePage] = useState("intro");

  return (
    <div className="App">
      <div className="lemony-blob"></div>
      <div className="baby-blob"></div>
      {activePage === "intro" ? (
        <Intro setActivePage={setActivePage} />
      ) : activePage === "questions" ? (
        <Questions setActivePage={setActivePage} />
      ) : null}
    </div>
  );
}
