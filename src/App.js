import React, { useState } from "react";
import Cell from "./components/Cell"

const App = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("marshmellow");
  const [winningMsg, setWinningMsg] = useState(null);

  const message = "it is now " + go + "'s go."

  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell key={index} id={index} cell={cell} go={go} setGo={setGo}/>
        ))}
      </div>
      <p className="message">{winningMsg || message}</p>
    </div>
  );
};

export default App;
