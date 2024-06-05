import Layout from "@/components/templates/Layout/AppLayout";
import AboutPage from "@/components/pages/AboutPage/AboutPage";
import type { NextPage } from "next";
import Head from "next/head";
const About: NextPage = () => {
    return (
        <Layout>

<Head>
    <title>About Us - Leading Private Security Service Provider in California & Texas | Joint Power Security Services Inc.</title>
    <meta name="description" content="Discover the story behind Joint Power Security Services Inc. A leading private security firm in California and Texas. We offer top-tier security solutions, including uniformed security officers, concierge services, Firewatch service, mobile patrols, and more. Our team is dedicated to providing unparalleled security services at cost effective prices." />
    <meta name="keywords" content="Joint Power Security, private security, security guard services, firewatch service, security company, California security, Texas security, security in Los Angeles, Security in Vernon,  security in commerce, security in Inglewood, Security in Dallas,  security in Bakersfield,comprehensive security solutions, cost effective security, security officers, mobile patrols, concierge services, security escorts, surveillance, security audits, security consulting" />
    <meta name="author" content="Joint Power Security Services Inc." />
</Head>
            <AboutPage />
        </Layout>
    );
};

export default About;