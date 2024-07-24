import React from "react";

const Cell = ({ cell, id, go, setGo, cells, setCells, winningMsg }) => {
  const handleClick = (e) => {
    if (!winningMsg) {
      const firstChild = e.target.firstChild;
      const taken =
        firstChild?.classList.contains("marshmallow") ||
        firstChild?.classList.contains("strawberry");
      if (!taken) {
        if (go === "marshmallow") {
          firstChild.classList.add("marshmallow");
          handleCellChange("marshmallow");
          setGo("strawberry");
        } else if (go === "strawberry") {
          firstChild.classList.add("strawberry");
          handleCellChange("strawberry");
          setGo("marshmallow");
        }
      }
    }
  };

  const handleCellChange = (className) => {
    const nextCells = cells.map((cell, index) => {
      if (index === id) {
        return className;
      } else {
        return cell;
      }
    });
    setCells(nextCells);
  };

  return (
    <div className="square" id={id} onClick={handleClick}>
      <div className={cell}></div>
    </div>
  );
};

export default Cell;
