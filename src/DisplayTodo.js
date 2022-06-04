import React from "react";
//import TodoList from "./TodoList";

const DisplayTodo = (props) => {
  const { taskList, deleteTask } = props;
  const handleDelete = (id) => {
    deleteTask(id);
  };
  return (
    <div>
      <h1 className="container">Todo List</h1>
      {taskList.length > 0 ? (
        taskList.map((ele, id) => {
          return (
            <li key={id}>
              {ele}
              <button
                onClick={() => {
                  handleDelete({ ele });
                }}
              >
                delete
              </button>
            </li>
          );
        })
      ) : (
        <p>You are compliant</p>
      )}
      {}
    </div>
  );
};
export default DisplayTodo;
