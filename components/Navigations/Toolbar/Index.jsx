import React from "react";
import NavItems from "../NavItems/Index";
const Index = () => {
  return (
    <div className="h-screen text-white text-center w-60 bg-blue-900 ">
      <div className="text-4xl font-medium py-8">Blogs</div>
      <div className="w-32 mx-auto mt-10">
        <NavItems />
      </div>
    </div>
  );
};

export default Index;
