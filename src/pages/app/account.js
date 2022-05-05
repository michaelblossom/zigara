import React, { useState } from "react";
import axios from "axios";
import { ErrorMessage, Formik } from "formik";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { accountSettingsSchema } from "../../utils/formValidationSchem";

const Account = () => {
  const [loading, setLoading] = useState(false);

  const accountSettings = async (data) => {
    const token = localStorage.getItem("token");

    // console.log(token);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    setLoading(true);
    console.log(data);
    try {
      const response = await axios.patch(
        "https://zigara-app.herokuapp.com/updateuserprofile",
        data,
        config
      );

      setLoading(false);

      console.log(response.data);
    } catch (error) {
      console.log(error.response.message);
      setLoading(false);
    }
  };
  return (
    <div>
      <section className="col-span-2 mt-4">
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
            bio: "",
          }}
          validationSchema={accountSettingsSchema}
          onSubmit={(data) => {
            // console.log(data);
            accountSettings(data);
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
                  <label className=" block text-2 font-2 mb-2">Last Name</label>
                  <Input
                    type={"text"}
                    //   placeholder={"first name"}
                    onChange={handleChange}
                    value={values.lastName}
                    error={errors.lastName && touched.lastName}
                    name="lastName"
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
                    loading={loading}
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
      </section>
    </div>
  );
};

export default Account;
