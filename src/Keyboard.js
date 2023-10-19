const rows = ["QWERTYUIOP", "ASDFGHJKL+", "ZXCVBNM-"];

const getColor = (letter, solution) => {
  if (solution.includes(letter)) return "correct";

  return "wrong";
};

const Keyboard = ({ letters, solution }) => (
  <div className="keyboard">
    {rows.map((row, rowIdx) => (
      <div key={rowIdx} className="keyboard__row">
        {row.split("").map((letter, letterIdx) => (
          <div
            key={letterIdx}
            className={`keyboard__letter ${
              letters.includes(letter) && getColor(letter, solution)
            }`}
          >
            {letter === "+" ? "Enter" : letter === "-" ? "Delete" : letter}
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default Keyboard;
