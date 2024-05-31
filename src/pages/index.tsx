import Layout from "@/components/templates/Layout/AppLayout";
import Landing from "@/components/pages/LandingPage/Landing";
import type { NextPage } from "next";
import Head from "next/head";
const Home: NextPage = () => {

  return (
    <>
   
    <Layout>
    <Head>
      <title>Joint Power Security Services INC</title>
    </Head>
      <Landing />
    </Layout>
    </>
  );
};

export default Home;
