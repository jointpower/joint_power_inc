import Layout from "@/components/templates/Layout/AppLayout";
import type { NextPage } from "next";
import BlogPage from "@/components/pages/BlogPage/BlogPage";
import Head from "next/head";
const About: NextPage = () => {
  return (
    <Layout>
      <Head>
      <title>Blog - Get the latest security and firewatch information | Joint Power Security Services Inc</title>
      <meta name="description" content="Explore our blog for the latest security insights, updates, and tips, including fire watch services, from Joint Power Security Services Inc. Stay informed about the best practices and innovations in security across California, Texas and Nationwide." />
      <meta name="keywords" content="security blog, fire watch tips, security insights, fire watch services, Joint Power Security blog, security updates, safety tips, California security, Texas security, news in California, news in Bakersfield,  news in fresno, news in Inglewood, news in Santa Clarita,security in los angeles, security solutions, emergency service, private security news, fire safety" />
      <meta name="author" content="Joint Power Security Services Inc." />
      </Head>
      <div className="blog">
        <BlogPage />
      </div>
    </Layout>
  );
};

export default About;
