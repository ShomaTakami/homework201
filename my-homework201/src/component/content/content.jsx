import React from "react";

const Content = props => {
  return (
    <li>
      <input
        type='checkbox'
        checked={props.todo.isDone}
        onChange={() => props.checkTodo(props.todo)}
      />
      <span className={props.todo.isDone ? "done" : ""}>{props.todo.item}</span>
    </li>
  );
};

export default Content;
