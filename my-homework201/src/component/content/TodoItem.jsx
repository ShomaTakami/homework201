import React from "react";

const TodoItem = props => {
  return (
    <li>
      <span>{props.todo.title}</span>
    </li>
  );
};

export default TodoItem;
