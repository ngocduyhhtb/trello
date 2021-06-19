import React from "react";
import "./Column.scss";
import Task from "components/Task/Task";
const Column = () => {
  return (
    <div className="column">
      <header>Brainstorm</header>
      <ul className="task-list">
        <Task />
        {/* <li>Add what you'd to work on below</li>
        <li>Add what you'd to work on below</li>
        <li>Add what you'd to work on below</li>
        <li>Add what you'd to work on below</li>
        <li>Add what you'd to work on below</li>
        <li>Add what you'd to work on below</li>
        <li>Add what you'd to work on below</li>
        <li>Add what you'd to work on below</li>
        <li>Add what you'd to work on below</li>
        <li>Add what you'd to work on below</li> */}
      </ul>
      <footer>Add another card</footer>
    </div>
  );
};

export default Column;