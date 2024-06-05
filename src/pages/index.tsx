import Layout from "@/components/templates/Layout/AppLayout";
import Landing from "@/components/pages/LandingPage/Landing";
import type { NextPage } from "next";
import Head from "next/head";
const Home: NextPage = () => {

  return (
    <>
   
    <Layout>
    <Head>
      <title>Leading Private Security Service Provider in California & Texas | Joint Power Security Services Inc.</title>
      <meta name="description" content="Joint Power Security Services Inc. offers comprehensive, efficient, and proactive security solutions across California and Texas. Trusted for over a decade, we provide exceptional security guard services and firewatch services, ensuring the safety of personnel, infrastructure, and assets. Contact us for low rates and no contract security services." />
      <meta name="keywords" content="private security, security guard services, firewatch service, security company, Joint Power Security, California security, Texas security, comprehensive security solutions, low rates, no contract, security near me, body guards, security guard service, security guard companies near me, security guard services near me, construction site security services, security concert, hotel security services, event security" />
      <meta name="author" content="Joint Power Security Services Inc." />
    </Head>
      <Landing />
    </Layout>
    </>
  );
};

export default Home;
