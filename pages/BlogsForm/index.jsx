import React from "react";
import Heading from "../../components/page-components/Heading/Index";

import Blogs from "../../components/page-components/writeBlogs/Index";
import Layout from "../../HOC/layout";
const index = () => {
  return (
    <Layout>
      <Heading Title="Write Your Blogs" />
      <Blogs />
    </Layout>
  );
};

export default index;
