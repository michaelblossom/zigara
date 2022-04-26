import React, { useState } from "react";
import { TiUserOutline } from "react-icons/ti";
import { BiLock } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import Button from "../../components/button/button";
import { editImg } from "../../asset/images";
import Input from "../../components/input/input";

const NotificationSettings = () => {
  const [active, setActive] = useState("notification");

  return (
    <div className=" w-screen h-screen py-16">
      <div className="m-auto w-[1000px] h-[700px] px-6 border shadow bg-white grid grid-cols-3 gap-8">
        <div className="col-span-1 pr-6 border-r-2 border-r-grey-100">
          <div className="mt-16 mb-16 flex items-center justify-center">
            <img src={editImg} />
          </div>
          <div
            className={`flex items-center ${
              active === "account" ? "text-red-400" : null
            } justify-flex-start border-2  py-2 px-2 `}
            onClick={() => setActive("account")}
          >
            <span>
              <TiUserOutline size={25} />
            </span>
            <p>Account</p>
          </div>
          <div
            className={`flex items-center ${
              active === "password" ? "text-red-400" : null
            } justify-flex-start border-2  py-2 px-2 `}
            onClick={() => setActive("password")}
          >
            <span>
              <BiLock size={25} />
            </span>
            <p>Password</p>
          </div>
          <div
            className={`flex items-center ${
              active === "notification" ? "text-red-400" : null
            } justify-flex-start border-2  py-2 px-2 `}
            onClick={() => setActive("notification")}
          >
            <span>
              <IoMdNotificationsOutline size={25} />
            </span>
            <p>Notifications</p>
          </div>
        </div>
        {/* <section className="col-span-2">
          <div className="mb-12">
            <h3 className="font-bold text-3xl mt-4">Notification Settings</h3>
          </div>
          <div className="flex items-center justify-between mb-14 font-semibold">
            <div>
              <p>Get notified via email</p>
            </div>
            <div>
              <input type="checkbox" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-14 font-semibold">
            <div>
              <p>Get notified via email</p>
            </div>
            <div>
              <input type="checkbox" />
            </div>
          </div>

          <div className="flex justify-start">
            <div className="mr-4 ">
              <Button
                text="Change"
                type="submit"
                // onClick={() => console.log("Button Clicked")}
                className="bg-rose-500 text-center px-2 py-2 mt-7 text-white w-36 rounded"
              />
            </div>
            <div>
              <Button
                text="Cancel"
                type="submit"
                // onClick={() => console.log("Button Clicked")}
                className="bg-white text-center px-2 py-2 mt-7 text-black border border-rose-500 w-36 rounded"
              />
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default NotificationSettings;
