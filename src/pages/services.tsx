import Layout from '@/components/templates/Layout/AppLayout';
import ServicesPage from '@/components/pages/ServicesPage/ServicesPage';
import type { NextPage } from 'next';
const Services: NextPage = () => {
  return (
    <Layout>
      <ServicesPage />
    </Layout>
  );
};

export default Services;
