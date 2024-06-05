import Layout from '@/components/templates/Layout/AppLayout';
import ServicesPage from '@/components/pages/ServicesPage/ServicesPage';
import type { NextPage } from 'next';
import Head from 'next/head';
const Services: NextPage = () => {
  return (
    <Layout>
      <Head>
    <title>Our Services - Comprehensive Security Solutions in California & Texas | Joint Power Security Services Inc.</title>
    <meta name="description" content="Joint Power Security Services Inc. offers reliable protection and trusted security services across California and Texas. Our comprehensive range includes emergency security, bank and government facility security, healthcare facility security, Firewatch service and more. We cater to various sectors, ensuring 24/7 safety and security for your premises." />
    <meta name="keywords" content="security services, emergency security, bank security, government facility security, warehouse security, Firewatch guard, healthcare security, loss prevention, roving patrol, construction site security, warehouse security, social event security, alarm monitoring, distribution center security, school security, church security, apartment security, office building security, restaurant security, gated community security, hospital security, care facility security, access control, foot patrol, parking lot control, hotel security, security consulting" />
    <meta name="author" content="Joint Power Security Services Inc." />
</Head>
      <ServicesPage />
    </Layout>
  );
};

export default Services;
