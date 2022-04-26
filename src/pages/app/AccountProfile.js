import React, { useState } from "react";
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
const AccountProfile = () => {
  const [active, setActive] = useState("account");

  //   const [eye, setEye] = useState(false);
  //   const [eyes, setEyes] = useState(false);
  //   const [eyeses, setEyeses] = useState(false);
  //   console.log(editImg);
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
            <h3 className="font-bold text-3xl mt-4">Account Settings</h3>
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
              firstName: "",
              lastName: "",
              phoneNumber: "",
              country: "",
              state: "",
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
                <div className="grid grid-cols-2 gap-8">
                  <div className="mb-2 ">
                    <label className=" block text-2 font-2 mb-2">
                      First Name
                    </label>
                    <Input
                      type={"text"}
                      //   placeholder={"first name"}
                      onChange={handleChange}
                      value={values.firstName}
                      error={errors.firstName && touched.firstName}
                      name="firstName"
                      className="py-1 rounded-md w-full outline-none"
                    />
                    <ErrorMessage name="firstName">
                      {(msg) => <p className="text-red-400 text-xs">{msg}</p>}
                    </ErrorMessage>
                  </div>
                  <div className="mb-2">
                    <label className=" block text-2 font-2 mb-2">
                      Last Name
                    </label>
                    <Input
                      type={"text"}
                      //   placeholder={"first name"}
                      onChange={handleChange}
                      value={values.lastName}
                      error={errors.lastName && touched.lastName}
                      name="lasttName"
                      className="py-1 rounded-md w-full outline-none"
                    />
                    <ErrorMessage name="lastName">
                      {(msg) => <p className="text-red-400 text-xs">{msg}</p>}
                    </ErrorMessage>
                  </div>
                  <div className="mb-2">
                    <label className=" block text-2 font-2 mb-2">Email</label>
                    <Input
                      type={"email"}
                      //   placeholder={"first name"}
                      onChange={handleChange}
                      value={values.email}
                      error={errors.email && touched.email}
                      name="email"
                      className="py-1 rounded-md w-full outline-none"
                    />
                    <ErrorMessage name="Email">
                      {(msg) => <p className="text-red-400 text-xs">{msg}</p>}
                    </ErrorMessage>
                  </div>
                  <div className="mb-2">
                    <label className=" block text-2 font-2 mb-2">
                      Phone number
                    </label>
                    <Input
                      type={"text"}
                      //   placeholder={"first name"}
                      onChange={handleChange}
                      value={values.phoneNumber}
                      error={errors.phoneNumber && touched.phoneNumber}
                      name="phoneNumber"
                      className="py-1 rounded-md w-full outline-none"
                    />
                    <ErrorMessage name="phoneNumber">
                      {(msg) => <p className="text-red-400 text-xs">{msg}</p>}
                    </ErrorMessage>
                  </div>
                  <div className="mb-2">
                    <label className=" block text-2 font-2 mb-2">Country</label>
                    <Input
                      type={"text"}
                      //   placeholder={"first name"}
                      onChange={handleChange}
                      value={values.country}
                      error={errors.country && touched.country}
                      name="country"
                      className="py-1 rounded-md w-full outline-none"
                    />
                    <ErrorMessage name="country">
                      {(msg) => <p className="text-red-400 text-xs">{msg}</p>}
                    </ErrorMessage>
                  </div>
                  <div className="mb-2">
                    <label className=" block text-2 font-2 mb-2">State</label>
                    <Input
                      type={"text"}
                      //   placeholder={"first name"}
                      onChange={handleChange}
                      value={values.state}
                      error={errors.state && touched.state}
                      name="state"
                      className="py-1 rounded-md w-full outline-none"
                    />
                    <ErrorMessage name="state">
                      {(msg) => <p className="text-red-400 text-xs">{msg}</p>}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="mb-2">
                  <label className=" block text-2 font-2 mb-2">Bio</label>
                  <Input
                    type={"text"}
                    //   placeholder={"first name"}
                    onChange={handleChange}
                    value={values.bio}
                    error={errors.bio && touched.bio}
                    name="bio"
                    className="py-6 rounded-md w-full outline-none"
                  />
                  <ErrorMessage name="bio">
                    {(msg) => <p className="text-red-400 text-xs">{msg}</p>}
                  </ErrorMessage>
                </div>
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

export default AccountProfile;
