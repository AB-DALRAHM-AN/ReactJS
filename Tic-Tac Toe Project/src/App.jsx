import { Header } from "./components/Header";
import logo from "../public/game-logo.png";
import { Player } from "./components/player";
import { GameBoard } from "./components/GameBoard";
import { useState } from "react";
import { Log } from "./components/Log";
import { WINNING_COMBINATIONS } from "./components/winningCompination";
import { GameOver } from "./components/GameOver";

const initGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [playerName, setPlayerName] = useState({
    'X' : 'Player 1',
    'O' : 'Player 2'
  })
  const [gameTurn, setGameTurn] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");
  let gameBoard = [...initGameBoard.map((array) => [...array])];
  let winner;

  for (const turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  for (const compination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[compination[0].row][compination[0].column];
    const secondSquareSymbol =
      gameBoard[compination[1].row][compination[1].column];
    const thirdSquareSymbol =
      gameBoard[compination[2].row][compination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = playerName[firstSquareSymbol];
    }
  }

  const drawgame = gameTurn.length == 9 && !winner;

  function handelActivePlayer(rowIndex, colIndex) {
    setActivePlayer((active) => (active === "X" ? "O" : "X"));
    setGameTurn((prevTurn) => {
      let currentPlayer = "X";
      if (prevTurn.length > 0 && prevTurn[0].player === "X") {
        currentPlayer = "O";
      }
      const updatedTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];
      return updatedTurn;
    });
  }

  function restartGame() {
    setGameTurn([]);
  }

  function handelPlayerNameChanges (symbol, playerName) {
    setPlayerName(prevPlayerInfo => {
    return {
      ...prevPlayerInfo,
      [symbol] : playerName
    }
    })
  }

  return (
    <>
    {/* making a header for the game by using props  */}
      <Header title="Tic-Tac Toe" image={logo} />
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              name={"Player 1"}
              symbol={"X"}
              isActive={activePlayer === "X"}
              nameChange={handelPlayerNameChanges}
              />
            <Player
              name={"Player 2"}
              symbol={"O"}
              isActive={activePlayer === "O"}
              nameChange={handelPlayerNameChanges}
            />
          </ol>
          {(winner || drawgame) && (
            <GameOver winner={winner} restart={restartGame} />
          )}
          <GameBoard clickActive={handelActivePlayer} board={gameBoard} />
        </div>
      </main>
      <Log Turns={gameTurn} />
    </>
  );
}

export default App;
