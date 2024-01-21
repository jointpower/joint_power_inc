import Layout from "@/components/templates/Layout/AppLayout";
import AboutPage from "@/components/pages/AboutPage/AboutPage";
import type { NextPage } from "next";
import LoginPage from "@/components/pages/Login/LoginPage";
const About: NextPage = () => {
    return (
        <Layout>
            <LoginPage />
        </Layout>
    );
};

export default About;