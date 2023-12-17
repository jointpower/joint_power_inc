import Layout from "@/components/templates/Layout/AppLayout";
import type { NextPage } from "next";
import BlogPage from "@/components/pages/BlogPage/BlogPage";
const About: NextPage = () => {
    return (
        <Layout>
            <BlogPage />
        </Layout>
    );
};

export default About;