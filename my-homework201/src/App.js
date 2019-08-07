import React, { Component } from "react";
import Form from "./component/Form";
import List from "./component/TodoList";

import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: []
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  // save data
  handleAdd(e) {
    console.log(e.target.title.value);
    e.preventDefault();
    this.state.todo.push({ title: e.target.title.value });
    this.setState({ todo: this.state.todo });
    e.target.title.value = "";
  }

  // delete data
  handleRemove(i) {
    this.state.todo.splice(i, 1);
    this.setState({ todo: this.state.todo });
  }

  render() {
    return (
      <div className='todo-box todo-bg-dark'>
        <h1 className='todo-box-title todo-color-white'>React Todo App</h1>
        <Form handleAdd={this.handleAdd} />
        <div className='todo-rule' />
        <List todos={this.state.todo} handleRemove={this.handleRemove} />
      </div>
    );
  }
}
