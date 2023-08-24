import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import { Schema } from "./Schema";
import { FormDatas } from "../FormDatas/Index";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
const Index = () => {
  const [savedValued, setSavedValues] = useState([]);
  return (
    <div className="w-2/4  mx-auto">
      <div className="text-xl mt-14 mb-10 text-center ">Enter Your Blog</div>
      <Formik
        initialValues={{
          title: "",
          description: "",
          time: "",
          images: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          alert("successful !");
          // console.log("wirte blogs", values);
          try {
            let formData = new FormData();
            formData.append("title", values.title);
            formData.append("description", values.description);
            formData.append("time", values.time);
            formData.append("images", values.images);
            axios
              .post("https://blogs-api-c5dm.onrender.com/blogs", formData)
              // .post("http://localhost:5000/blogs", formData)
              .then((res) => {
                console.log(res);
              });
            resetForm({
              values: { title: "", description: "", time: "", images: "" },
            });
          } catch (error) {
            console.log(error);
          }
        }}
        // validationSchema={Schema}
        render={({ handleSubmit, setFieldValue, values }) => {
          return (
            <div className=" p-24">
              <Form
                onSubmit={handleSubmit}
                className="flex flex-col gap-8 justify-center"
              >
                {FormDatas?.map((val, i) => {
                  return (
                    <div key={i}>
                      <div>
                        <Field
                          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          type={val.type}
                          name={val.name}
                          // onChange={(e)=>{
                          //   setFieldValue("image",e.target.files[0])
                          // }}
                          placeholder={val.title}
                        />
                        <ErrorMessage
                          className="text-red-400"
                          name={val.name}
                          component="div"
                        />
                      </div>
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
                <button
                  type="submit"
                  className="w-40 mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Submit
                </button>
              </Form>
            </div>
          );
        }}
      />
    </div>
  );
};

export default Index;
