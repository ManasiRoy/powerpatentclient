import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/Layout/Layout';
import SEO from "../components/seo";
import BlogImage from "../images/blog.jpg";
import IMG from "gatsby-image"

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
                <div className="col-md-4 mb-4" key={index}>
                  <div className="card">
                    <div className="card-body">
                      <figure>
                        {/* <IMG src={data.allWpPost.nodes?.featuredImage.node?.localFile.childImageSharp?.gatsbyImageData} /> */}
                      </figure>
                      <h4 className="card-title mb-4">
                        <Link to={blogP.slug}>
                          {blogP.title}
                        </Link>
                      </h4>
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
        featuredImage {
          node {
            id
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1920, layout: CONSTRAINED, placeholder: TRACED_SVG)
              }
            }
          }
        }
      }
    }
  }
`

export default Blog;

