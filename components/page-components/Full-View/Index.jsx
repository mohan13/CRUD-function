import React from "react";
// import Image from "next/image";
// import { TableData } from "../dashboard/TableDatas";
const Index = ({ Details }) => {
  return (
    <div className="p-16">
      {Details?.map((val, i) => {
        return (
          <div key={i} className="grid">
            <div className="w-1/3 bg-green-300 mx-auto">
              <img
                className="w-full"
                src={`https://blogs-api-c5dm.onrender.com/${val.images}`}
                alt=""
              />
            </div>
            <div className="flex flex-col items-baseline gap-4">
              <div className="text-4xl font-medium">{val.title}</div>
              <div className="text-md font-medium text-blue-400">{val.time}</div>
            </div>
            <div className="text-lg">{val.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
