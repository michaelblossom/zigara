import { useState, useEffect } from "react";
import axios from "axios";
import Input from "../../components/input/input";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
const AddTask = ({ onAdd }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [route, setRoute] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [riders, setRiders] = useState([]);
  const navigate = useNavigate();

  const addTask = async (data) => {
    const token = localStorage.getItem("token");

    console.log(token);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    console.log(config);
    try {
      const response = await axios.post(
        "https://zigara-app.herokuapp.com/createrider",
        data,
        config
      );

      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!firstname) {
      alert("please add a task");
      return;
    }
    onAdd({ firstname, lastname, route, phonenumber });
    setFirstname("");
    setLastname("");
    setRoute("");
    setPhoneNumber("");
    const data = {
      firstName: firstname,
      lastName: lastname,
      route,
      phone: phonenumber,
    };
    addTask(data);
  };

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
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    getAllRiders();
  }, []);

  console.log(riders);
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label className="text-black">firstName</label>
        <Input
          type={"text"}
          placeholder={"Add name"}
          onChange={(e) => setFirstname(e.target.value)}
          value={firstname}
          className="w-full outline-none text-black"
        />
      </div>
      <div className="form-control">
        <label className="text-black">lastName</label>
        <Input
          type={"text"}
          placeholder={"last name"}
          onChange={(e) => setLastname(e.target.value)}
          value={lastname}
          className="w-full outline-none text-black"
        />
      </div>
      <div className="form-control">
        <label className="text-black">route</label>
        <Input
          type={"text"}
          placeholder={"Address"}
          onChange={(e) => setRoute(e.target.value)}
          value={route}
          className="w-full outline-none text-black"
        />
      </div>
      <div className="form-control">
        <label className="text-black">phone</label>
        <Input
          type={"text"}
          placeholder={"phone number"}
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phonenumber}
          className="w-full outline-none text-black"
        />
      </div>

      <Button
        text="Save Employee"
        type="submit"
        className="bg-red-500 text-center px-2 py-2 mt-7 text-white w-36 rounded"
      />
    </form>
  );
};
export default AddTask;
