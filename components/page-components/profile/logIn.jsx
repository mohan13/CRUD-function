import React from "react";
import { signUpList } from "./insideSignUp";
import { Formik, Form, ErrorMessage, Field } from "formik";
import Link from "next/link";
import axios from "axios";
const signUp = () => {
  return (
    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0">
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        // validationSchema={Schema}
        onSubmit={async (values) => {
          alert("Successfull !");
          console.log(values);
          try {
            axios
              // .post("https://blogs-api-c5dm.onrender.com/account", formData)
              .post("http://localhost:5000/accounts/verifyLogin", values)
              .then((res) => {
                console.log(res);
                localStorage.setItem('token',res.data.token)
              });
            // resetForm({
            //   values: { title: "", description: "", time: "", images: "" },
            // });
          } catch (error) {
            console.log(error);
          }
        }}
        render={({ handleSubmit, values }) => {
          return (
            <Form className="grid gap-4">
              {signUpList?.map((val, i) => {
                return (
                  <div key={i} className="">
                    <Field
                      onSubmit={handleSubmit}
                      className="   w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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

              <div className="flex justify-between">
                <div className=" text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  <button type="submit">Login</button>
                </div>
              </div>
              <Link href="/SignUp" className="text-blue-500">
                Create a new account
              </Link>
            </Form>
          );
        }}
      />
    </div>
  );
};

export default signUp;
