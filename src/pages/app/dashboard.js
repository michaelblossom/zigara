import React, { useEffect, useState } from "react";
import Input from "../../components/input/input";
import { TiUserOutline } from "react-icons/ti";
import { BiLock } from "react-icons/bi";
import { BsGear } from "react-icons/bs";
import { logo } from "../../asset/images";
import { vector } from "../../asset/images";
import { MdNotificationsActive } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { IoPersonCircleSharp } from "react-icons/io5";
import { BsArrowDownRight } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { BsArrowUpRight } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";

const AdminDashboard = ({ children }) => {
  const [active, setActive] = useState("orders");
  const location = useLocation();
  const [heading, setHeading] = useState("Welcome back, Admin");
  console.log(location.pathname);

  const renderHeading = (val) => {
    switch (val) {
      case "employee":
        return (
          <div>
            <h1 className="text-3xl font-bold py-2">Manage your Employees</h1>
            <p className="font-sans">Here's how our Employees are doing</p>
          </div>
        );
      case "notification":
        return <h1 className="text-3xl font-bold py-2">Notifications</h1>;
      case "settings":
        return (
          <div>
            <h1 className="text-3xl font-bold py-2">Reset User information</h1>
            <p className="font-sans">make changes to user data</p>
          </div>
        );
      default:
        return (
          <div>
            <h1 className="text-3xl font-bold py-2">Welcome back, Admin</h1>
            <p className="font-sans">Like what you see?</p>
          </div>
        );
    }
  };

  useEffect(() => {
    setHeading(location.pathname.split("/")[1]);
  }, []);
  return (
    <div className=" w-screen h-screen ">
      <div className=" border shadow grid grid-cols-6 gap-4 h-screen ">
        <div className="col-span-1 bg-zinc-900 text-white h-full ">
          <div className="text-white flex items- justify-start ml-12 mt-8 mb-10">
            <img src={logo} />
          </div>
          <div className="flex items-center flex-start text-lg">
            <div>
              <div
                className={` ${
                  location.pathname === "/" ? "text-black bg-white" : null
                } py-6 px-28`}
                onClick={() => {
                  setActive("orders");
                }}
              >
                <Link to="/">
                  <p className="flex items-center justify-flex-start">
                    <span className="mr-2">
                      <TiUserOutline size={30} />
                    </span>
                    Orders
                  </p>
                </Link>
              </div>
              <div
                className={`  ${
                  location.pathname === "/employee"
                    ? "text-black bg-white"
                    : null
                } py-6 px-28`}
                onClick={() => setActive("employee")}
              >
                <Link to="/employee">
                  <p className="flex items-center justify-flex-start">
                    <span className="mr-2">
                      <BiLock size={30} />
                    </span>
                    Employees
                  </p>
                </Link>
              </div>
              <div
                className={`${
                  location.pathname === "/notification"
                    ? "text-black bg-white"
                    : null
                } py-6 px-28`}
                onClick={() => setActive("notification")}
              >
                <Link to="/notification">
                  <p className="flex items-center justify-flex-start">
                    <span className="mr-2">
                      <MdNotificationsActive size={30} />
                    </span>
                    Notifications
                  </p>
                </Link>
              </div>
              <div
                className={`${
                  location.pathname === "/settings"
                    ? "text-black bg-white"
                    : null
                } py-6 px-28`}
                onClick={() => setActive("settings")}
              >
                <Link to="/settings">
                  <p className="flex items-center justify-flex-start">
                    <span className="mr-2">
                      <BsGear size={30} />
                    </span>
                    Settings
                  </p>
                </Link>
              </div>
              <div className={`py-6 px-28 mt-96 flex items-center`}>
                <div>
                  <AiOutlineLogout className="text-white" />
                </div>
                <div className="ml-2">
                  <Link to="/logout">Log out</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5 mt-8 mr-8 ">
          <div className="flex items-center justify-between">
            {renderHeading(heading)}
            <div>
              <div className="flex items-center justify-center">
                <IoPersonCircleSharp size={20} />
                <p className="text-gray-500">Admin</p>
              </div>
              <div>
                <p className="text-right mt-2">April 16th 2022</p>
              </div>
            </div>
          </div>
          <div className="my-16">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
