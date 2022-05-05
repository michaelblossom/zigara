import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Login from "./pages/app/login";
import SignUp from "./pages/app/signUp";
import AdminDashboard from "./pages/app/dashboard";
import Orders from "./pages/app/orders";
import Account from "./pages/app/account";
import Notification from "./pages/app/notification";
import Password from "./pages/app/password";
import Task from "./pages/app/Task";
import AddTask from "./pages/app/AddTask";
import AccountProfile from "./pages/app/AccountProfile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgotPassword from "./pages/app/forgotPassword";
import UserNotification from "./pages/app/userNotification";
import Logout from "./pages/app/logout";

function App() {
  // const getAdmin = async () => {
  //   const token = localStorage.getItem("token");
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };
  //   try {
  //     const response = await axios.get(
  //       "https://zigara-app.herokuapp.com/getadmin",
  //       config
  //     );
  //     JSON.stringify(localStorage.setItem("adminInfo", response.data.message));
  //     console.log(response.data.message);
  //     // setOrders(response.data.data.services);
  //   } catch (error) {
  //     console.log(error.response.message);
  //     JSON.stringify(localStorage.removeItem("adminInfo"));
  //   }
  // };
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Orders />} path="/" />
        <Route element={<Task />} path="employee" />
        <Route element={<UserNotification />} path="notification" />
        <Route element={<AccountProfile />} path="settings" />
        <Route element={<Login />} path="login" />
        <Route element={<SignUp />} path="signup" />
        <Route element={<ForgotPassword />} path="forgot-password" />
        <Route element={<Logout />} path="/logout" />
      </Routes>
    </BrowserRouter>
    // <Password />
  );
}

export default App;
