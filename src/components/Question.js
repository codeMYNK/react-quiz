import React from "react";
import Options from "./Options";

export default function Question({ question, dispatch, answer }) {
  if (!question) {
    console.error("No question data available"); // Log when question is not available
    return <div>No question data available</div>; // Provide fallback UI
  }

  console.log("Question data:", question); // Log question data

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}
