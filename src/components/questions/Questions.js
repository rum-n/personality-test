import React from "react";
import data from "./questionsData";
import results from "./resultData";
import "./styles.css";

const Questions = (props) => {
  const { page, selected } = props;
  const [clicked, setClicked] = React.useState();
  const [score, setScore] = React.useState(0);
  const [tempScore, setTempScore] = React.useState(0);
  const currentQuestion = data.find((item) => item.id === page);

  React.useEffect(() => {
    setScore(score + tempScore);
    setClicked(null);
    setTempScore(null);
  }, [page]);

  const handleAnswer = (points) => {
    setClicked(points);
    setTempScore(points);
    selected(true);
  };

  return (
    <div data-testid="question-component" className="question-wrapper">
      {page <= 5 && (
        <div>
          <h2>
            Question{" "}
            <span data-testid="question-number">{currentQuestion.id}</span>
          </h2>
          <h3>{currentQuestion.question}</h3>

          {currentQuestion.options.map((item) => (
            <div
              key={item.points}
              className={item.points === clicked ? "answer-clicked" : "answer"}
              onClick={() => handleAnswer(item.points)}
            >
              {item.text}
            </div>
          ))}
        </div>
      )}
      {page > 5 && score >= 10 && (
        <div>
          <h2>{results[1].title}</h2>
          <p className="result-text">{results[1].text}</p>
        </div>
      )}
      {page > 5 && score < 10 && (
        <div>
          <h2>{results[0].title}</h2>
          <p className="result-text">{results[0].text}</p>
        </div>
      )}
    </div>
  );
};

export default Questions;
