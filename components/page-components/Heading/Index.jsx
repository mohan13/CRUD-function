import Link from "next/link";
import React from "react";
const Index = ({ Title }) => {
  return (
    <div className="flex text-white text-xl py-8 justify-between px-10  bg-blue-900 cursor-pointer">
      <div>{Title}</div>
      <div>
        {/* <SignUp /> */}
        <Link href="/SignUp">Sign Up</Link>
      </div>
    </div>
  );
};

export default Index;
