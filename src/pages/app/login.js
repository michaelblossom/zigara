import React, { useState } from "react";
import axios from "axios";
import { FaFacebook } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { ErrorMessage, Formik } from "formik";
import { signInValidationSchema } from "../../utils/formValidationSchem";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [eye, setEye] = useState(false);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const Auth = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://zigara-app.herokuapp.com/login",
        data
      );
      console.log(response.data);
      JSON.stringify(localStorage.setItem("token", response.data.message));
      setLoading(false);
      navigate("/");
    } catch (error) {
      // console.log(error.response.message);
      JSON.stringify(localStorage.removeItem("token"));
      navigate("/login");
      setLoading(false);
      alert("There was error! please try again!");
    }
  };
  return (
    <>
      <div className="bg-slate-800 w-screen h-screen py-16">
        <section className="m-auto w-[550px] h-[600px] p-6 border shadow bg-white">
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

                <div className="mt-6 ">
                  <label className="block text-2 font-2 mb-2">Password *</label>
                  <Input
                    type={eye ? "text" : "password"}
                    placeholder={"password"}
                    icon={eye ? <BsEye /> : <AiOutlineEyeInvisible />}
                    onPasswordToggle={() => setEye(!eye)}
                    onChange={handleChange}
                    value={values.password}
                    error={errors.password && touched.password}
                    name="password"
                    className="w-full outline-none"
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
                <div className="flex items-center mt-2 justify-end">
                  <Link to="/forgot-password">
                    <p>forgot password?</p>
                  </Link>
                </div>

                <div>
                  <Button
                    text="Login"
                    type="submit"
                    className="bg-rose-500 text-center px-2 py-2 mt-7 text-white w-full rounded-xl"
                    loading={loading}
                  />
                </div>
              </form>
            )}
          </Formik>

          <div className="flex items-center mt-8 justify-center">
            <div>
              <FaFacebook size={30} className="text-sky-400" />
            </div>
            <div className="ml-3">
              <p className="text-md">Login With FaceBook</p>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex justify-center items-center">
              Don’t have an account?{" "}
              <Link to="/signup">
                <span className="text-blue-400">Sign up</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Login;
