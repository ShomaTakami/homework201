import React from "react";

import "./list.css";

let none = {
  listStyle: "none"
};

let style = {
  maxWidth: "700px"
};

let btn = {
  cursor: "pointer"
};

const List = props => (
  <ul style={none} className='todo-list'>
    {props.todos.map((todo, i) => {
      return (
        <li key={i} className='todo-list-item todo-bg-white' style={style}>
          {todo.title}
          <span
            className='todo-tag todo-tag-error todo-hover'
            style={btn}
            onClick={() => props.handleRemove(i)}>
            &nbsp;Done
          </span>
        </li>
      );
    })}
  </ul>
);

export default List;
