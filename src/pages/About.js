import React from 'react'
import { graphql, Link } from "gatsby"
import Layout from '../components/Layout/Layout';
import SEO from "../components/seo";


const About = () => {
    return (
        <Layout>
            <SEO title="About" />
            <div>
                About
            </div>
        </Layout>
    )
}

export default About
