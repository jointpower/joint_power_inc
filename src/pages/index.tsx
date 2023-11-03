import Layout from "@/components/templates/Layout/AppLayout";
import Landing from "@/components/pages/LandingPage/Landing";
import type { NextPage } from "next";
const Home: NextPage = () => {
    return (
        <Layout>
            <Landing />
        </Layout>
    );
};

export default Home;
