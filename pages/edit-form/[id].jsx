import React, { useState } from "react";
import Edit from "../../components/page-components/Edit-Form/Index";
import Layout from "../../HOC/layout";
export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`https://blogs-api-c5dm.onrender.com/blogs/${id}`);
  const data = await res.json();
  return {
    props: {
      data: data.data,
      id,
    },
  };
};
const index = ({ data, id }) => {
  return (
    <Layout>
      <Edit savedData={[data]} />
    </Layout>
  );
};

export default index;
