import { useEffect, useState } from "react";
import "./App.css";
import Board from "./Board";
import Keyboard from "./Keyboard";
import { words } from "./words";

const ROWS = 6;

function App() {
  const [solution, setSolution] = useState("");
  const [guesses, setGuesses] = useState(new Array(ROWS).fill("abc"));
  const [currentRow, setCurrentRow] = useState(0);
  const [letters, setLetters] = useState("");

  useEffect(() => {
    setSolution(words[Math.floor(Math.random() * words.length)]);
  }, []);

  return (
    <div className="App">
      <Board guesses={guesses} />
      <Keyboard letters={[]} />
    </div>
  );
}

export default App;
