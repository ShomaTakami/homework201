import React from "react";

const Header = props => {
  return (
    <form onSubmit={props.addTodo}>
      <input
        type='text'
        placeholder='Enter todo!'
        value={props.item}
        onChange={props.updateItem}
      />
      <input type='submit' value='Add to list' />
    </form>
  );
};

export default Header;
