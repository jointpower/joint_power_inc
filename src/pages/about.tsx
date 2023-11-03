import Layout from "@/components/templates/Layout/AppLayout";
import AboutPage from "@/components/pages/AboutPage/AboutPage";
import type { NextPage } from "next";
const About: NextPage = () => {
    return (
        <Layout>
            <AboutPage />
        </Layout>
    );
};

export default About;