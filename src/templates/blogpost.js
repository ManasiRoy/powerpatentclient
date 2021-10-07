import React from "react"
import Layout from '../components/Layout/Layout';
import SEO from "../components/seo";
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

export default function Post({ data }) {
  const allBlog = data.wpPost

  return (
    <Layout>
      <SEO title="Blog" />
      <div className="mainSpacing">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <article className="mb-5 text-center">
                <h4 className="card-title mb-2">
                  {allBlog.title}
                </h4>
                <small>{allBlog.date}</small>
              </article>
              <div className="card-text" dangerouslySetInnerHTML={{ __html: allBlog.excerpt }} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    wpPost(slug: { eq: $slug }) {
      date(formatString: "LL")
      excerpt
      id
      uri
      title
    }
  }`