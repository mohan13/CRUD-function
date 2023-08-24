import Link from "next/link";
import TableDatas from "./Index";
import React, { useState } from "react";
const Index = ({ Data }) => {
  const [blog, setBlogs] = useState("");
  const searchFilter = (array) => {
    return array.filter((e) => e.title.toLowerCase().includes(blog));
  };
  const Filterd = searchFilter(Data);
  const Search = (e) => {
    setBlogs(e.target.value);
  };
  return (
    <div className="px-24  mt-14  drop-shadow-md">
      <div className=" items-center  flex text-xl justify-between ">
        <div className="">Dashboard</div>
        <div>
          <input
            onChange={Search}
            className="mr-8 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            type="search"
          />
          <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            <Link href="/BlogsForm">Add</Link>
          </button>
        </div>
      </div>
      <div className="flex mt-4 rounded-t-lg text-md bg-white text-Headline text-gray-500 text-center">
        <div className="w-14 p-2 border border-b-1">Id</div>
        <div className="grid grid-cols-7 w-full bg-grey-600">
          <div className="p-2 col-span-2 border border-b-1 ">Title</div>{" "}
          <div className="p-2  border">Date</div>{" "}
          <div className="p-2 col-span-2  border">Description</div>
          <div className="p-2  border">Images</div>
          <div className=" p-2  border">Actions</div>
        </div>
      </div>
      <div>
        {Filterd?.map((val, i) => {
          console.log(val);
          return (
            <div key={i}>
              <TableDatas
                Id="1"
                Title={val.title}
                Time={val.time}
                Description={val.description}
                Img={val.images}
                View={val._id}
                // Delete={val._id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
