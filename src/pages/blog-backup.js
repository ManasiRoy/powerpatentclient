import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/Layout/Layout';
import SEO from "../components/seo";
import BlogImage from "../images/blog.jpg";
import { GatsbyImage } from "gatsby-plugin-image";

const Blog = (props) => {
  const { data: { allWpPost } } = props
  const isLatestPost = allWpPost.nodes.map(d => d.date);
  console.log(allWpPost)
  return (
    <Layout>
      <SEO title="Blog" />
      <figure className="banner-main">
        <img src={BlogImage} alt="blog" />
      </figure>
      <div className="mainSpacing blogOutr">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <div>{isLatestPost ?
                <div>
                  <h2>Featured</h2>
                  <div className="card">
                    <GatsbyImage
                      className="card-img-top"
                      image={
                        allWpPost.nodes[0].featuredImage.node.localFile.childImageSharp
                          .gatsbyImageData
                      }
                      alt="blog"
                    />
                    <div className="card-body">
                      <h4 className="card-title mb-3">
                        <Link to={allWpPost.nodes[0].slug}>
                          {allWpPost.nodes[0].title}
                        </Link>
                      </h4>
                      <div className="card-text" dangerouslySetInnerHTML={{ __html: allWpPost.nodes[0].excerpt }} />
                    </div>
                  </div>
                </div>
                : ''}</div>
            </div>
            <div className="col-md-6 mt-5 pt-3">
              {
                allWpPost.nodes.slice(0, 5).map((node, index) => {
                  return (
                    <div className="col-md-12 mb-4" key={index}>
                      <div className="card">
                        <div className="row">
                          <div className="col-md-4 align-self-center">
                            <GatsbyImage
                              image={
                                node.featuredImage.node.localFile.childImageSharp
                                  .gatsbyImageData
                              }
                              alt="blog"
                            />
                          </div>
                          <div className="col-md-8 align-self-center">
                            <div className="card-body p-0">
                              <h4 className="card-title">
                                <Link to={node.slug}>
                                  {node.title}
                                </Link>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <h3>Explore by topic</h3>
              <ul className="list-group list-group-flash">
                {
                  allWpPost.nodes.map((catG, catGindex) => {
                    return (
                      <li className="list-group-item" key={catGindex}>
                        <Link to={catG.slug}>{catG.categories.nodes.map(n => n.name)}</Link>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className="col-md-8"></div>
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
        date(fromNow: true)
        categories {
          nodes {
            name
          }
      }
      featuredImage {
          node {
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

