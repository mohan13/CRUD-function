import React from "react";

const Index = ({ icon, title }) => {
  return (
    <div className="text-lg font-sans flex gap-4 items-center text-white">
      <div>{icon}</div>
      <div>{title}</div>
    </div>
  );
};

export default Index;
