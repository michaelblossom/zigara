import React, { useEffect, useState } from "react";
import AdminDashboard from "./dashboard";

const UserNotification = () => {
  const notification = [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus",
  ];
  return (
    <AdminDashboard>
      <div className=" w-full h-full">
        {notification.map((not, idx) => (
          <p
            className={`py-4 border-b-2 ${
              idx === 0 ? "border-t-2" : null
            } border-gray-200`}
          >
            {not}
          </p>
        ))}
      </div>
    </AdminDashboard>
  );
};

export default UserNotification;
