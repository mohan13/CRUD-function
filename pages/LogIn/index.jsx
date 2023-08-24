import React from "react";
import SignUp from '../../components/page-components/profile/logIn'

const index = () => {
  return (
    <div className=" h-screen flex flex-col justify-center items-center gap-10">
      <div className="text-4xl font-medium ">Sign Up</div>
      <SignUp />
    </div>
  );
};

export default index;
