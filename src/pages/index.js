import React from 'react';
import Banner from '../components/Banner/Banner';
import Layout from '../components/Layout/Layout';
import SEO from "../components/seo";
import "../scss/styles.scss"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
  </Layout>
);

export default IndexPage;
