// ButtonsBar.js
import React from "react";

function ButtonsBar({ handleIterate }) {
  return (
    <div>
      <button value={-5} onClick={handleIterate}>
        Previous -5
      </button>
      <button value={-1} onClick={handleIterate}>
        Previous
      </button>
      <button value={1} onClick={handleIterate}>
        Next
      </button>
      <button value={5} onClick={handleIterate}>
        Next +5
      </button>
    </div>
  );
}

export default ButtonsBar;
