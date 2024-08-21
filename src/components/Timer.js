import React from "react";
import { useState, useEffect } from "react";

export default function Timer(dispatch, secoundsRemaining) {
  useEffect(
    function () {
      setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
    },
    [dispatch]
  );

  return <div className="timer">{secoundsRemaining}</div>;
}
