import React from "react";

const Cell = ({ cell, id, go, setGo }) => {
  const handleClick = (e) => {
    const taken =
      e.target.firstChild.classList.contains("marshmellow") ||
      e.target.firstChild.classList.contains("strawberry");

      if(!taken) {
        if(go === "marshmellow") {
            e.target.firstChild.classList.add("marshmellow")
            setGo("strawberry")
        }
        if(go === "strawberry") {
            e.target.firstChild.classList.add("strawberry")
            setGo("marshmellow")
        }
      }
  };

  return (
    <div className="square" id={id} onClick={handleClick}>
      <div className="inner">{cell}</div>
    </div>
  );
};

export default Cell;
