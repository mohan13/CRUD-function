import React from "react";
import Image from "next/image";
import ProfileImage from "../../Resources/2.png";
const Index = () => {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <Image className="h-10 w-10" src={ProfileImage} alt="" />
        <div>Mohan Gurung</div>
      </div>
    </div>
  );
};

export default Index;
