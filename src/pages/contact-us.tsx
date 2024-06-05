import Layout from "@/components/templates/Layout/AppLayout";
import ContactUsPage from "@/components/pages/ContactUsPage/ContactUsPage";
import type { NextPage } from "next";
import Head from "next/head";
const Contact: NextPage = () => {
    return (
        <Layout>
    <Head>
        <title>Contact Us - Joint Power Security Services Inc. | Reach Out for Inquiries and Feedback</title>
        <meta name="description" content="Contact Joint Power Security Services Inc. for any questions, inquiries, or requests. We are here to assist you with all your security and firewatch needs. Reach out to us at our California and Texas locations or via email or phone." />
        <meta name="keywords" content="Joint Power Security, security services inquiries, security services feedback, contact security company, Los Angeles security, Dallas Security, Bakersfield security, Santa clarita security, Fort Worth security, security near me, security services, cost effective security, security officers, Firewatch guard, construction site security, warehouse security, mobile patrols" />
        <meta name="author" content="Joint Power Security Services Inc." />
    </Head>
            <ContactUsPage />
        </Layout>
    );
};

export default Contact;