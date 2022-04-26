import { useState } from "react";
import Task from "./Task";
const Tasks = ({ tasks, onDelete, ontoggle }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          ontoggle={ontoggle}
        />
      ))}
    </div>
  );
};
export default Tasks;
