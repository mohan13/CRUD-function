import React from "react";
import Heading from "../components/page-components/Heading/Index";
import Toolbar from "../components/Navigations/Toolbar/Index";
const layout = ({ children }) => {
  return (
    <div className="flex ">
      <div>
        <Toolbar />
      </div>
      <div className="w-full">
        {/* <Heading /> */}

        <div>{children}</div>
      </div>
    </div>
  );
};

export default layout;
