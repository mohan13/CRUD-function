import React from "react";
// import { Schema } from "../schema/Index";
import axios from "axios";
import { signUpList } from "./insideSignUp";
import { Formik, Form, ErrorMessage, Field } from "formik";
const signUp = () => {
  return (
    <div className="w-1/4 mx-auto">
      <Formik
        initialValues={{
          username: "",
          password: "",
          email: "",
          images: "",
        }}
        // validationSchema={Schema}
        onSubmit={async (values, { resetForm }) => {
          alert("Successfull !");
          console.log(values);
          try {
            let formData = new FormData();
            formData.append("username", values.username);
            formData.append("password", values.password);
            formData.append("email", values.email);
            formData.append("images", values.images);
            axios
              // .post("https://blogs-api-c5dm.onrender.com/account", formData)
              .post("http://localhost:5000/accounts", formData)
              .then((res) => {
                console.log(res);
              });
            resetForm({
              values: { username: "", password: "", email: "", images: "" },
            });
          } catch (error) {
            console.log(error);
          }
        }}
        render={({ handleSubmit, setFieldValue, values }) => {
          return (
            <Form className="grid gap-4">
              {signUpList?.map((val, i) => {
                return (
                  <div key={i} className="">
                    <Field
                      onSubmit={handleSubmit}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      name={val.name}
                      placeholder={val.placeholder}
                      type={val.type}
                    />
                    <ErrorMessage
                      className="text-red-400"
                      name={val.name}
                      component="div"
                    />
                  </div>
                );
              })}
              <input
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                type="file"
                onChange={(e) => {
                  console.log(e.target.files[0], values);
                  setFieldValue("images", e.target.files[0]);
                }}
              />
              <div className="flex justify-between">
                <button
                  className=" text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      />
    </div>
  );
};

export default signUp;
