import Layout from "@/components/templates/Layout/AppLayout";
import type { NextPage } from "next";
import BlogPage from "@/components/pages/BlogPage/BlogPage";
const About: NextPage = () => {
  return (
    <Layout>
      <div className="blog">
        <BlogPage />
      </div>
    </Layout>
  );
};

export default About;
