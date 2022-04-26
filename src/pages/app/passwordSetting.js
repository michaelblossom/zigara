import React, { useState } from "react";
import { TiUserOutline } from "react-icons/ti";
import { BiLock } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsEye } from "react-icons/bs";
// import { AiOutlineEyeInvisible } from "react-icons/ai";
// import { ErrorMessage, Formik } from "formik";
// import { signupValidationSchema } from "../../utils/formValidationSchem";
// import Input from "../../components/input/input";
// import Button from "../../components/button/button";
import { editImg } from "../../asset/images";
const PasswordSetting = () => {
  const [active, setActive] = useState("password");
  // const [eye, setEye] = useState(false);
  // const [eyes, setEyes] = useState(false);
  // const [eyeses, setEyeses] = useState(false);
  console.log(editImg);
  return (
    <div className=" w-screen h-screen py-16">
      <div className="m-auto w-[1000px] h-[700px] px-6 border shadow bg-white grid grid-cols-3 gap-8">
        <div className="col-span-1 pr-6 border-r-2 border-r-grey-100">
          <div className="mt-16 mb-11 flex items-center justify-center">
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
        {/* <section className="col-span-2 mt-4">
          <div className="mb-12">
            <h3 className="font-bold text-3xl mt-4">Password Settings</h3>
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
              firstName: "",
              lastName: "",
              phoneNumber: "",
            }}
            validationSchema={signupValidationSchema}
            onSubmit={(data) => {
              console.log(data);
            }}
          >
            {({ values, handleChange, handleSubmit, errors, touched }) => (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                <div className="mt-12 ">
                  <label className="block text-2 font-2 mb-2">
                    Enter Old Password
                  </label>
                  <Input
                    type={eye ? "text" : "password"}
                    placeholder={"password"}
                    icon={eye ? <BsEye /> : <AiOutlineEyeInvisible />}
                    onPasswordToggle={() => setEye(!eye)}
                    onChange={handleChange}
                    value={values.oldpassword}
                    error={errors.oldpassword && touched.oldpassword}
                    name="oldpassword"
                    className="border-none px-2 py-2 w-full  focus:outline-none focus:border-gray-300"
                  />
                </div>
                <ErrorMessage name="password">
                  {(msg) => (
                    <p className="text-red-400 text-xs">
                      password must contain one capital and small letter, number
                      and special character and it must be at least 8 characters
                      long{" "}
                    </p>
                  )}
                </ErrorMessage>
                <div className="mt-12 ">
                  <label className="block text-2 font-2 mb-2">
                    Enter New Password
                  </label>
                  <Input
                    type={eyes ? "text" : "password"}
                    placeholder={"password"}
                    icon={eyes ? <BsEye /> : <AiOutlineEyeInvisible />}
                    onPasswordToggle={() => setEyes(!eyes)}
                    onChange={handleChange}
                    value={values.newpassword}
                    error={errors.newpassword && touched.newpassword}
                    name="newpassword"
                    className="border-none px-2 py-2 w-full focus:outline-none focus:border-gray-300"
                  />
                </div>
                <ErrorMessage name="password">
                  {(msg) => (
                    <p className="text-red-400 text-xs">
                      password must contain one capital and small letter, number
                      and special character and it must be at least 8 characters
                      long{" "}
                    </p>
                  )}
                </ErrorMessage>
                <div className="mt-12">
                  <label className="block text-2 font-2 mb-2">
                    Comfirm New Password
                  </label>
                  <Input
                    type={eyeses ? "text" : "password"}
                    placeholder={"password"}
                    icon={eyeses ? <BsEye /> : <AiOutlineEyeInvisible />}
                    onPasswordToggle={() => setEyeses(!eyeses)}
                    onChange={handleChange}
                    value={values.comfirmpassword}
                    error={errors.comfirmpassword && touched.comfirmpassword}
                    name="comfirmpassword"
                    className="border-none px-2 py-2 w-full focus:outline-none focus:border-gray-300"
                  />
                </div>
                <ErrorMessage name="password">
                  {(msg) => (
                    <p className="text-red-400 text-xs">
                      password must contain one capital and small letter, number
                      and special character and it must be at least 8 characters
                      long{" "}
                    </p>
                  )}
                </ErrorMessage>
                <div className="flex justify-start">
                  <div className="mr-4 ">
                    <Button
                      text="Change"
                      type="submit"
                      onClick={() => console.log("Button Clicked")}
                      className="bg-rose-500 text-center px-2 py-2 mt-7 text-white w-36 rounded"
                    />
                  </div>
                  <div>
                    <Button
                      text="Cancel"
                      type="submit"
                      onClick={() => console.log("Button Clicked")}
                      className="bg-white text-center px-2 py-2 mt-7 text-black border border-rose-500 w-36 rounded"
                    />
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </section> */}
      </div>
    </div>
  );
};

export default PasswordSetting;
