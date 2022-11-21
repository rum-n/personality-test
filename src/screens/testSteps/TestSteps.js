import React from "react";
import "./styles.css";
import Questions from "./../../components/questions/Questions";

const TestSteps = (props) => {
  const [page, setPage] = React.useState(1);
  const [selected, setSelected] = React.useState(false);

  const nextPage = () => {
    if (page <= 5) {
      setPage(page + 1);
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="main">
      <h1>Are you an introvert or an extrovert?</h1>
      <Questions page={page} selected={setSelected} />
      {page <= 5 && (
        <button disabled={!selected} onClick={nextPage} className="start-btn">
          {page < 5 ? "Next" : "Finish"}
        </button>
      )}
      {page > 5 && (
        <button onClick={reload} className="start-btn">
          Retake test
        </button>
      )}
    </div>
  );
};

export default TestSteps;
