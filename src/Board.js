const getColors = (solution, word) => {
  const convertedSolution = solution.split("");

  for (let i = 0; i < word.length; i++) {
    if (word[i] === convertedSolution[i]) {
      convertedSolution[i] = "*";
    }
  }

  for (let i = 0; i < word.length; i++) {
    const ind = convertedSolution.indexOf(word[i]);
    if (ind > -1 && convertedSolution[i] !== "*") convertedSolution[i] = "+";
  }

  return convertedSolution.map((letter) => {
    if (letter === "*") return "correct";
    if (letter === "+") return "semi-correct";
    return "wrong";
  });
};

const Row = ({ word, solution, isFinished }) => {
  const colors = isFinished ? getColors(solution, word) : new Array(5).fill("");

  return new Array(5).fill("").map((cell, idx) => (
    <div className={`board__cell ${colors[idx]}`} key={idx}>
      {word[idx] ?? ""}
    </div>
  ));
};

const Board = ({ guesses, currentWord, currentRow, solution }) => (
  <div className="board">
    {guesses.map((row, rowIdx) => (
      <div key={rowIdx} className="board__row">
        <Row
          solution={solution}
          word={currentRow === rowIdx ? currentWord : guesses[rowIdx]}
          isFinished={currentRow > rowIdx}
        />
      </div>
    ))}
  </div>
);

export default Board;
