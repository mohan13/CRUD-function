import React, { useState } from "react";
// import { Schema } from "../schema/Index";
import { FormDatas } from "../FormDatas/Index";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
const Index = ({ savedData }) => {
  const [savedValues, setSavedValues] = useState(savedData);
  console.log("Saved Values", savedValues[0]);

  return (
    <div className="w-2/4  mx-auto">
      <div className="text-xl mt-14 mb-10 text-center ">Edit Your Blog</div>
      <Formik
        //eslai object ma break gareko kina ki mathi data array ma xa

        initialValues={savedValues[0]}
        // enableReinitialize

        onSubmit={(values) => {
          let formData = new FormData();
          formData.append("title", values.title);
          formData.append("description", values.description);
          formData.append("time", values.time);
          formData.append("images", values.images);

          alert("successful !");

          //update use patch in axios
          axios
            .patch(
              `https://blogs-api-c5dm.onrender.com/blogs/${values._id}`,
              formData
            )
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
        // validationSchema={Schema}
        render={({ handleSubmit, setFieldValue, values }) => {
          console.log("Set Saved Values", setSavedValues);

          return (
            <div className=" p-24">
              {console.log(values)}
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
