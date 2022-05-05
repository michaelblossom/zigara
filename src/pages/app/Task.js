import { useEffect, useState } from "react";
import Header from "./Header";
import AddTask from "./AddTask";
import Demo from "./demo";
import AdminDashboard from "./dashboard";
import axios from "axios";

const Task = () => {
  const [showAddTask, setShowAddTask] = useState(true);
  const [riders, setRiders] = useState([]);

  console.log(riders);
  // get all riders
  const getAllRiders = async () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const res = await axios.get(
        "https://zigara-app.herokuapp.com/getriders",
        config
      );
      console.log(res.data);
      setRiders(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  //   Add task
  const addTask = (rider) => {
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    setRiders([...riders, rider]);
  };

  //   delete task
  const deleteTask = (id) => {
    setRiders(riders.length > 0 && riders.filter((rider) => rider._id !== id));

    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .delete(`https://zigara-app.herokuapp.com/deleterider/${id}`, config)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  //   togle reminder
  const toggleReminder = (id) => {
    setRiders(
      riders.length > 0 &&
        riders.map((rider) =>
          rider.id === id ? { ...rider, reminder: !rider.reminder } : rider
        )
    );
  };

  useEffect(() => {
    getAllRiders();
  }, []);
  return (
    <AdminDashboard>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
          title="Active Riders"
        />
        {showAddTask && <AddTask onAdd={addTask} />}

        {riders.length > 0 ? (
          <Demo
            tasks={riders}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          "No Employee data to show"
        )}
      </div>
    </AdminDashboard>
  );
};

export default Task;
