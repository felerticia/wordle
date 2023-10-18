import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Board from "./Board";
import Keyboard from "./Keyboard";
import { words } from "./words";

const ROWS = 6;

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
      if (currentWord.length === 5) {
        if (keyCode !== 13 && keyCode !== 8) return;
      }

      if (keyCode >= 65 && keyCode <= 90) {
        setCurrentWord((currentRow) => currentRow + key);
      }
    },
    [currentWord]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="App">
      {currentWord}
      <Board
        guesses={guesses}
        currentWord={currentWord}
        currentRow={currentRow}
      />
      <Keyboard letters={[]} />
    </div>
  );
}

export default App;
