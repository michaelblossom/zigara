import React, { useState } from "react";
import { BsEye } from "react-icons/bs";
import axios from "axios";
import { newPasswordValidationSchema } from "../../utils/formValidationSchem";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { ErrorMessage, Formik } from "formik";
import { useNavigate } from "react-router-dom";

const Password = () => {
  const [eye, setEye] = useState(false);
  const [eyes, setEyes] = useState(false);
  const [eyeses, setEyeses] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const resetPassword = async (data) => {
    setLoading(true);
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
        "https://zigara-app.herokuapp.com/passwordsetting",
        data,
        config
      );
      // console.log(response.data);
      JSON.stringify(localStorage.setItem("token", response.data.message));
      setLoading(false);
      // navigate("/");
    } catch (error) {
      console.log(error.response.message);
      JSON.stringify(localStorage.removeItem("token"));
      // navigate("/login");
      setLoading(false);
      alert("There was error! please try again!");
    }
  };
  return (
    <div className="w-auto border-gray-200 p-6">
      <section className="col-span-2 mt-4">
        <div className="mb-12">
          <h3 className="font-bold text-xl mt-4">Password Settings</h3>
        </div>
        <Formik
          initialValues={{
            password: "",
            newPassword: "",
            conPassword: "",
          }}
          validationSchema={newPasswordValidationSchema}
          onSubmit={(data) => {
            console.log(data);
            resetPassword(data);
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
                  value={values.password}
                  error={errors.password && touched.password}
                  name="password"
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
                  value={values.newPassword}
                  error={errors.newPassword && touched.newPassword}
                  name="newPassword"
                  className="border-none px-2 py-2 w-full focus:outline-none focus:border-gray-300"
                />
              </div>
              <ErrorMessage name="newPassword">
                {(msg) => (
                  <p className="text-red-400 text-xs">
                    newPassword must contain one capital and small letter,
                    number and special character and it must be at least 8
                    characters long{" "}
                  </p>
                )}
              </ErrorMessage>
              <div className="mt-12">
                <label className="block text-2 font-2 mb-2">
                  Comfirm New Password
                </label>
                <Input
                  type={eyeses ? "text" : "password"}
                  placeholder={"Confirm password"}
                  icon={eyeses ? <BsEye /> : <AiOutlineEyeInvisible />}
                  onPasswordToggle={() => setEyeses(!eyeses)}
                  onChange={handleChange}
                  value={values.conPassword}
                  error={errors.conPassword && touched.conPassword}
                  name="conPassword"
                  className="border-none px-2 py-2 w-full focus:outline-none focus:border-gray-300"
                />
              </div>
              <ErrorMessage name="conPassword">
                {(msg) => (
                  <p className="text-red-400 text-xs">
                    comfirm password must contain one capital and small letter,
                    number and special character and it must be at least 8
                    characters long and it must be the same as the new password{" "}
                  </p>
                )}
              </ErrorMessage>
              <div className="flex justify-start">
                <div className="mr-4 ">
                  <Button
                    text="Change"
                    type="submit"
                    loading={loading}
                    onClick={() => console.log("Button Clicked")}
                    className="bg-rose-500 text-center px-2 py-2 mt-7 text-white w-36 rounded"
                  />
                </div>
                <div>
                  <Button
                    text="Cancel"
                    type="submit"
                    loading={loading}
                    // onClick={() => console.log("Button Clicked")}
                    className="bg-white text-center px-2 py-2 mt-7 text-black border border-rose-500 w-36 rounded"
                  />
                </div>
              </div>
            </form>
          )}
        </Formik>
      </section>
    </div>
  );
};
export default Password;
