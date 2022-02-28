import React, { useState, useEffect } from "react";
import nextId from "react-id-generator";

/*
  grab 5 questions from https://opentdb.com/api_config.php
  set questions state to newly generated questions
  render questions to the page

  0: Object
  category: "Science: Computers"
  type: "multiple"
  difficulty: "easy"
  question: "When Gmail first launched, how much storage did it provide for your email?"
  correct_answer: "1GB"
  incorrect_answers: Array(3)
  0: "512MB"
  1: "5GB"
  2: "Unlimited"
*/

export default function Questions() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  // const [isSelected, setIsSelected] = useState(false);
  const openTDBUrl =
    "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple";
  useEffect(() => {
    fetch(openTDBUrl)
      .then((res) => res.json())
      .then((data) => setQuestions(data.results));
  }, []);
  console.log(questions);

  function updateAnswer(e, id) {
    if (e.target.classList.contains("selected")) {
      e.target.classList.remove("selected");
    } else {
      e.target.classList.add("selected");
    }
  }

  function renderAnswers(answers) {
    return answers.map((answer) => (
      <button
        // style={{ backgroundColor: answer.isSelected ? "red" : "lightblue" }}
        key={nextId()}
        className="question-answer-btn"
        onClick={(e) => updateAnswer(e, answer.id)}
      >
        {answer.value}
      </button>
    ));
  }

  function generateAnswer(ans) {
    return {
      value: ans,
      id: nextId(),
      isSelected: false
    };
  }

  function generateAnswers(incorrectAnswers) {
    const array = [];
    for (const ans of incorrectAnswers) {
      array.push(generateAnswer(ans));
    }
    return array;
  }

  function renderQuestions() {
    return questions.map((data) => (
      <div key={nextId()} className="question">
        <h4>{data.question}</h4>
        <div className="answers">
          {renderAnswers(generateAnswers(data.incorrect_answers))}
        </div>
        <hr />
      </div>
    ));
  }

  return (
    <>
      <div className="questions">
        <h1>Questions</h1>
        {renderQuestions()}
        <button className="check-answers-btn">Check answers</button>
      </div>
    </>
  );
}
