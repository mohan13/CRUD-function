import React from "react";
import SignUp from "../../components/page-components/profile/signUp";

const index = () => {
  return (
    <div className=" h-screen flex flex-col justify-center items-center gap-10">
      <div className="text-4xl font-medium ">Log in</div>
      <SignUp />
    </div>
  );
};

export default index;
