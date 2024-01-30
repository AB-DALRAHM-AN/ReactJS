export const GameBoard = ({ clickActive, board }) => {
return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSympol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => clickActive(rowIndex, colIndex)} disabled={col === 'X' || col === 'O'}>
                  {playerSympol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};
