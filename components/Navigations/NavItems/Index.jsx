import Link from "next/link";
import React from "react";
import NavItem from "../NavItem/Index";
import { NavData } from "../NavData";
const Index = () => {
  return (
    <div className="flex flex-col gap-10 ">
      {NavData?.map((val, i) => {
        return (
          <div key={i}>
            <Link href={val.path}>
              <NavItem title={val.title} icon={val.icon} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
