import "./App.css";
import "./components/navbar";
import NavBar from "./components/navbar";
import Home from "./components/home";
import React, { Component } from "react";

class App extends Component {
  state = {
    todos: [
      { id: 1, title: "hello", desc: "hello world", time: "2021/09/01" },
      { id: 2, title: "hello", desc: "hello world", time: "2021/09/01" },
      { id: 3, title: "hello", desc: "hello world", time: "2021/09/01" },
    ],
  };

  handleInsert = (title, desc) => {
    const todo = {
      id: 5,
      title: this.props.title,
      desc: this.props.desc,
      time: "2022/01/01",
    };
    console.log(todo);
    this.setState({ todos: [...this.state.todos, todo] });
    console.log(this.state.todos);
  };

  // handleUpdate = (todoId) => {};

  handleDelete = (todoId) => {
    const todos = this.state.todos.filter((c) => c.id !== todoId);
    this.setState({ todos });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Home
          todos={this.state.todos}
          onDelete={this.handleDelete}
          onSubmit={this.handleInsert}
        />
      </React.Fragment>
    );
  }
}

export default App;
