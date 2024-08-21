import React from "react";

export default function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = '🥇';

  return (
    <>
    <p className="result">
      <span>{emoji}</span>You Scored Points <strong>{points}</strong> out of {maxPossiblePoints}{" "}
      which is ({Math.ceil(percentage)})
    </p>
    <p className="highscore">(Highscore: {highscore} points)</p>


    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "restart" })}
    >
      Restart Quiz
    </button>
    </>
  );
}
