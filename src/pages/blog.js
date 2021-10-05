import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/Layout/Layout';
import SEO from "../components/seo";
import BlogImage from "../images/blog.jpg";


const Blog = ({ data }) => {
  const allBlog = data.allWpPost

  return (
    <Layout>

      <SEO title="Blog" />
      <figure className="banner-main">
        <img src={BlogImage} alt="blog" />
      </figure>
      <div className="mainSpacing">
        <div className="container">
          <div className="row">

            {
              allBlog.nodes.map((blogP, index) => (
                <div className="col-md-4 mb-4">
                  <div key={index} className="card">
                    <div className="card-body">
                      <h4 className="card-title mb-4">
                        <Link to={blogP.slug}>
                          {blogP.title}
                        </Link>
                      </h4>
                      <div className="card-text" dangerouslySetInnerHTML={{ __html: blogP.excerpt }} />
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allWpPost {
      nodes {
        excerpt
        id
        uri
        title
        slug
      }
    }
  }
`

export default Blog;

