import React, { context } from "react";
import Heading from "../../components/page-components/Heading/Index";
import Layout from "../../HOC/layout";
import FullViews from "../../components/page-components/Full-View/Index";

export async function getServerSideProps(context) {
  const { Id } = context.params;
  const res = await fetch(`https://blogs-api-c5dm.onrender.com/blogs/${Id}`);
  const data = await res.json();
  return {
    props: { data: data.data, Id }, // will be passed to the page component as props
  };
}

const index = ({ data, Id }) => {
  console.log(data, Id);
  return (
    <div>
      <Layout>
        <Heading Title="Details" />
        <FullViews Details={[data]} />
      </Layout>
    </div>
  );
};

export default index;

// export const getStaticPaths = async () => {
//   const res = await fetch("https://blogs-for-api.onrender.com/blogs");
//   const Data = await res.json();
//   const paths = Data?.data.map((val) => {
//     return {
//       params: { id: val._id },
//     };
//   });
//   // console.log("paths", paths);
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => {
//   const { id } = context.params.id;
//   const res = await fetch(`https://blogs-for-api.onrender.com/blogs/${id}`);
//   const data = await res.json();
//   return {
//     props: {
//       data: data.data,
//     },
//   };
// };
