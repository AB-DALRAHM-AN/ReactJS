export const GameOver = ({winner, restart}) => {
  return (
    <div id="game-over">
      <h2>Game Over⚡</h2>
      {winner && <p>Winner is {winner}</p>}
      {!winner && <p>Draw Game</p>}
      <button onClick={restart}>Play again</button>
    </div>
  )
}
