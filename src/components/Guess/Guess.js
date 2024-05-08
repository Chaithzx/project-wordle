import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  let validatedGuess = checkGuess(value, answer);

  return (
    <p className="guess">
      {(validatedGuess ?? range(5)).map((item, index) => {
        return (
          <span key={index} className={`cell ${item.status}`}>
            {value ? value[index] : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
