import React, { useState } from "react";
import DisplayTodo from "./DisplayTodo";

const TodoList = () => {

  const [todo, setTodo] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = (task) => {
    //Adding task to TaskList
    return setTaskList([...taskList, task]);
  };
  const deleteTask = (task) => {
      //deleting a task from TaskList
    console.log(task);
    const result = taskList.filter((ele1) => {
      return ele1!==task["ele"]
    });
    setTaskList(result);
  };
  const handleChange = (e) => {
    const result = e.target.value;
    setTodo(result);
  };

  const handleClick = (e) => {
    e.preventDefault();
    addTask(todo);
    setTodo("");
  };
  return (
    <div>
      <input type="text" value={todo} onChange={handleChange} />
      <br />
      <button onClick={handleClick}> Add </button>
      <DisplayTodo taskList={taskList} deleteTask={deleteTask} />
    </div>
  );
};

export default TodoList;