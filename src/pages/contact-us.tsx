import Layout from "@/components/templates/Layout/AppLayout";
import ContactUsPage from "@/components/pages/ContactUsPage/ContactUsPage";
import type { NextPage } from "next";
const Contact: NextPage = () => {
    return (
        <Layout>
            <ContactUsPage />
        </Layout>
    );
};

export default Contact;