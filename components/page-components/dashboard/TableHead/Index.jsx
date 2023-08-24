import axios from "axios";
import Link from "next/link";
import React from "react";
import { MdDelete, MdModeEditOutline, MdVisibility } from "react-icons/md";

const Index = ({ Id, Title, Time, Img, View, Description }) => {
  const Delete = (id) => {
    try {
      axios
        .delete(`https://blogs-api-c5dm.onrender.com/blogs/${id}`)
        .then((res) => {
          console.log(res);
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="  text-gray-500 ">
      <div className="flex bg-white text-Headline text-center ">
        <div className="w-14 p-1 border">{Id}</div>
        <div className="grid w-full grid-cols-7">
          <div className="p-1 col-span-2 border ">{Title}</div>{" "}
          <div className="p-1 text-center border">{Time}</div>
          <div className="p-1  col-span-2 border line-clamp-3 text-justify px-3 ">
            {Description}
          </div>
          <div className="border">
            <div className="w-16 py-2 m-auto">
              <img
                className="h-full w-full"
                src={`https://blogs-api-c5dm.onrender.com/${Img}`}
                alt=""
              />
            </div>
          </div>
          <div className="p-1 flex items-center justify-center gap-2 border border-r-2">
            <div className="cursor-pointer font-bold bg-green-500 hover:bg-green-700 text-white  py-1 px-2 border border-green-500 rounded">
              <Link href={`/FullView/${View}`}>
                <MdVisibility />
              </Link>
            </div>
            <div
              className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded"
              // className="cursor-pointe p-1 border transition duration-300 ease-in-out border-red-600 bg-white text-red-600  hover:text-white  hover:bg-red-600 "
            >
              <Link href={`/edit-form/${View}`}>
                <MdModeEditOutline />
              </Link>
            </div>
            <div
              onClick={() => {
                Delete(View);
              }}
              className="cursor-pointer bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
            >
              <MdDelete />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
