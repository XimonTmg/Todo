import React, { Component } from "react";

class Home extends Component {
  render() {
    const { todos, onDelete, onSubmit } = this.props;
    return (
      <React.Fragment>
        <div className="container my-3">
          <h2>Add a Todo</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="text"
                className="form-control"
                id="title"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <input type="text" className="form-control" id="desc" />
            </div>
            <button
              type="submit"
              onClick={() => {
                onSubmit(
                  document.getElementById("title").value,
                  document.getElementById("desc").value
                );
              }}
              className="btn btn-dark"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="container my-3">
          <h2>Todo Table</h2>
          {/* <div className="alert alert-secondary" role="alert">
            No Record Found. Add your first Todo.
          </div> */}
          <table className="table">
            <thead>
              <tr>
                <th scope="col">SN</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Time</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr>
                  <th scope="row">{todo.id}</th>
                  <td>{todo.title}</td>
                  <td>{todo.desc}</td>
                  <td>{todo.time}</td>
                  <td>
                    <button
                      href="#"
                      type="button"
                      className="btn btn-outline-dark btn-sm mx-1"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => onDelete(todo.id)}
                      type="button"
                      className="btn btn-outline-dark btn-sm mx-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
