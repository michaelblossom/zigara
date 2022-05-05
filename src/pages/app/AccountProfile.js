import React, { useEffect, useState } from "react";
import { TiUserOutline } from "react-icons/ti";
import { BiLock } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsEye } from "react-icons/bs";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { ErrorMessage, Formik } from "formik";
import { signupValidationSchema } from "../../utils/formValidationSchem";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { editImg } from "../../asset/images";
import AdminDashboard from "./dashboard";
import Account from "./account";
import Password from "./password";
import Notification from "./notification";

const AccountProfile = () => {
  const [active, setActive] = useState("account");
  const [step, setStep] = useState(1);

  const accountModule = (data) => {
    switch (data) {
      case 1:
        return <Account />;
      case 2:
        return <Password />;
      case 3:
        return <Notification />;
      default:
        <Account />;
    }
  };

  useEffect(() => {
    console.log(step);
  }, [step]);
  return (
    <AdminDashboard>
      <div className=" w-full h-full py-16">
        <div className="m-auto w-auto h-[700px] px-6 border shadow bg-white grid grid-cols-5 gap-4">
          <div className="col-span-1 pr-6 border-r-2 border-r-grey-100">
            <div className="mt-16 mb-11 flex items-center justify-center">
              <img src={editImg} />
            </div>
            <div
              className={`flex items-center ${
                active === "account" ? "text-red-400" : null
              } justify-flex-start border-2  py-2 px-2 `}
              onClick={() => {
                setActive("account");
                setStep(1);
              }}
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
              onClick={() => {
                setActive("password");
                setStep(2);
              }}
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
              onClick={() => {
                setActive("notification");
                setStep(3);
              }}
            >
              <span>
                <IoMdNotificationsOutline size={25} />
              </span>
              <p>Notifications</p>
            </div>
          </div>

          <section className="col-span-4 mt-4 h-full w-full">
            {accountModule(step)}
          </section>
        </div>
      </div>
    </AdminDashboard>
  );
};

export default AccountProfile;
