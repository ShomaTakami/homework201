import React from "react";

import "./form.css";

const Form = props => (
  <form className='todo-form' onSubmit={props.handleAdd}>
    <div className='todo-form-field'>
      <label className='todo-label todo-color-white'>TODO:</label>
      <input
        type='text'
        name='title'
        placeholder='  Enter Todo'
        className='todoinput'
      />
      <input type='submit' value='Add' className='todo-btn todo-teal' />
    </div>
  </form>
);

export default Form;
