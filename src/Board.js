const Board = ({ guesses, currentWord, currentRow }) => (
  <div className="board">
    {guesses.map((row, rowIdx) => (
      <div key={rowIdx} className="board__row">
        {new Array(5).fill("").map((cell, cellIdx) => (
          <div className="board__cell" key={cellIdx}>
            {currentRow === rowIdx
              ? currentWord[cellIdx] ?? ""
              : row[cellIdx] ?? ""}
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default Board;
