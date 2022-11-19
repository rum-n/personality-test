import React from "react";
import "./styles.css";
import questions from "./questions";

const TestSteps = (props) => {
  console.log(questions);

  return (
    <div className="main">
      <div className="question-area">
        <h1>Question 1</h1>
      </div>
      <button className="start-btn">Next</button>
    </div>
  );
};

export default TestSteps;
