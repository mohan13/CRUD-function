import React from "react";
import Heading from "../../components/page-components/Heading/Index";
import TableHead from "../../components/page-components/dashboard/TableHead/THead";
import Layout from "../../HOC/layout";
export const getServerSideProps = async () => {
  const res = await fetch("https://blogs-api-c5dm.onrender.com/blogs");
  const data = await res.json();
  console.log("data", data);
  return {
    props: { data: data.data },
  };
};

const index = ({ data }) => {
  console.log("data", data);

  return (
    <Layout>
      <div className="bg-gray-100 font-medium h-screen">
        <Heading Title="Dashboard" />
        <TableHead Data={data} />
      </div>
    </Layout>
  );
};

export default index;
