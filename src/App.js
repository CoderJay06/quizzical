import React, { useState } from "react";
import "./styles.css";
import Intro from "../components/Intro";
import Questions from "../components/Questions";

export default function App() {
  const [activePage, setActivePage] = useState("intro");

  return (
    <div className="App">
      {activePage === "intro" ? (
        <Intro setActivePage={setActivePage} />
      ) : activePage === "questions" ? (
        <Questions setActivePage={setActivePage} />
      ) : null}
    </div>
  );
}
