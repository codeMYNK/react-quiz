import React from "react";

export default function Options({ question, dispatch, answer }) {
  if (!question || !question.options) {
    console.error("No options available"); // Log when options are not available
    return <div>No options available</div>; // Provide fallback UI
  }

  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => {
            console.log(`Option clicked: ${index}`);
            dispatch({ type: "newAnswered", payload: index });
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
