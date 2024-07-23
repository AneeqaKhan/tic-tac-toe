import React from "react";

const Cell = ({ cell, id, go, setGo, cells, setCells, winningMsg }) => {
  const handleClick = (e) => {
    if (!winningMsg) {
      const firstChild = e.target.firstChild;
      if (firstChild) {
        const taken =
          firstChild.classList.contains("marshmellow") ||
          firstChild.classList.contains("strawberry");
        if (!taken) {
          if (go === "marshmellow") {
            firstChild.classList.add("marshmellow");
            handleCellChange("marshmellow");
            setGo("strawberry");
          } else if (go === "strawberry") {
            firstChild.classList.add("strawberry");
            handleCellChange("strawberry");
            setGo("marshmellow");
          }
        }
      } else {
        console.error("First child is not found");
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
