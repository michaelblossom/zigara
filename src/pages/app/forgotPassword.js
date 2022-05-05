import React, { useState } from "react";
import axios from "axios";

import { ErrorMessage, Formik } from "formik";
import { signInValidationSchema } from "../../utils/formValidationSchem";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  const Auth = async (data) => {
    const token = localStorage.getItem("token");

    console.log(token);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {


      
      const response = await axios.post(
        "https://zigara-app.herokuapp.com/login",
        data
      );
      

      JSON.stringify(localStorage.setItem("token", response.data.message));
    } catch (error) {
      console.log(error.response.message);
    }
  };
  return (
    <>
      <div className="bg-slate-800 w-screen h-screen py-16">
        <section className="m-auto w-[550px] h-[400px] p-6 border shadow bg-white">
          <div className="mb-8">
            <h3 className="font-bold text-3xl">Log In</h3>
           
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={signInValidationSchema}
            onSubmit={(data) => {
              console.log(data);
              Auth(data);
            }}
          >
            {({ values, handleChange, handleSubmit, errors, touched }) => (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                <div className="mt-6">
                  <label className=" block text-2 font-2 mb-2">
                    Email address *
                  </label>
                  <Input
                    type={"email"}
                    placeholder={"email"}
                    onChange={handleChange}
                    value={values.email}
                    error={errors.email && touched.email}
                    name="email"
                    className="w-full outline-none"
                  />
                  <ErrorMessage name="email">
                    {(msg) => <p className="text-red-400 text-xs">{msg}</p>}
                  </ErrorMessage>
                </div>

                <div>
                  <Button
                    text="Reset Password"
                    type="submit"
                    className="bg-rose-500 text-center px-2 py-2 mt-7 text-white  rounded w-full"
                  />
                </div>
              </form>
            )}
          </Formik>

          <div className="flex items-center mt-8 justify-center">
            <p>
              Don't have an account?{" "}
              <Link to="/signup">
                <span className="text-red-300">sign up</span>
              </Link>{" "}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
export default ForgotPassword;
