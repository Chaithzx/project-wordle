import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function constructClass(status) {
  const classname = status ? `cell ${status}` : "cell";
  return classname;
}

function Guess({ value, answer }) {
  let validatedGuess = checkGuess(value, answer);

  return (
    <p className="guess">
      {(validatedGuess ?? range(5)).map((item, index) => {
        return (
          <span key={index} className={constructClass(item.status)}>
            {value ? value[index] : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
