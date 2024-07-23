import React, { useEffect, useState } from "react";
import Cell from "./components/Cell";

const App = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("marshmellow");
  const [winningMsg, setWinningMsg] = useState(null);

  const message = "it is now " + go + "'s go.";

  const checkScore = () => {
    const winningCombos = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ]

    winningCombos.forEach(array => {
      let marshmellowWins = array.every(cell => cells[cell] === "marshmellow")
      if(marshmellowWins) {
        setWinningMsg("Marshmellow Wins!")
        return
      }
    })

    winningCombos.forEach(array => {
      let strawberrywWins = array.every(cell => cells[cell] === "strawberry")
      if(strawberrywWins) {
        setWinningMsg("Strawberry Wins!")
        return
      }
    })
  }

  useEffect(() => {
    checkScore()
  }, [cells])

  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            go={go}
            setGo={setGo}
            cells={cells}
            setCells={setCells}
            winningMsg={winningMsg}
          />
        ))}
      </div>
      <p className="message">{winningMsg || message}</p>
    </div>
  );
};

export default App;
