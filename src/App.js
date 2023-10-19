import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Board from "./Board";
import Keyboard from "./Keyboard";
import { words } from "./words";

const ROWS = 6;

const merge = (letters, word) => {
  return Array.from(new Set(letters + word)).join("");
};

function App() {
  const [solution, setSolution] = useState("");
  const [guesses, setGuesses] = useState(new Array(ROWS).fill(""));
  const [currentRow, setCurrentRow] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [letters, setLetters] = useState("");

  useEffect(() => {
    setSolution(words[Math.floor(Math.random() * words.length)]);
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      const { key, keyCode } = e;
      if (keyCode === 8 && currentWord.length) {
        setCurrentWord((currentRow) => currentRow.slice(0, -1));
        return;
      }
      if (currentWord.length === 5) {
        if (keyCode !== 13 && keyCode !== 8) return;
        if (keyCode === 13) {
          setGuesses((guesses) =>
            guesses.map((guess, idx) =>
              idx === currentRow ? currentWord : guess
            )
          );
          setCurrentRow((currentRow) => currentRow + 1);
          setLetters((letters) => merge(letters, currentWord));
          setCurrentWord("");
        }
      }

      if (keyCode >= 65 && keyCode <= 90) {
        setCurrentWord((currentRow) => currentRow + key.toUpperCase());
      }
    },
    [currentWord, currentRow]
  );

  useEffect(() => {
    if (guesses[currentRow - 1] === solution && solution) {
      console.log("win");
    } else if (currentRow > 5) {
      console.log("lose");
    }
  }, [currentRow, guesses, solution]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="App">
      <Board
        guesses={guesses}
        currentWord={currentWord}
        currentRow={currentRow}
        solution={solution}
      />
      <Keyboard letters={letters} solution={solution} />
    </div>
  );
}

export default App;
