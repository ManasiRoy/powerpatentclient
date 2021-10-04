import React from 'react'
import { graphql, Link } from "gatsby"
import Layout from '../components/Layout/Layout';
import SEO from "../components/seo";


const Product = () => {
    return (
        <Layout>
            <SEO title="Product" />
            <div>
                Product
            </div>
        </Layout>
    )
}

export default Product
