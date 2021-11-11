import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/Layout/Layout';
import SEO from "../components/seo";
import BlogImage from "../images/blog.jpg";
import { GatsbyImage } from "gatsby-plugin-image";

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url} className="page-link">{props.text}</Link>
  } else {
    return <span className="page-link">{props.text}</span>
  }
}

const BlogPage = (props) => {
  const { group, index, first, last, pageCount } = props.pageContext;
  const previousUrl = pageCount - index == 1 ? '/blog/' : `/blog/${(index - 1).toString()}`
  const nextUrl = `/blog/${(index + 1).toString()}`
  console.log('collection >> ', props.pageContext)
  return (
    <Layout>
      <SEO title="Blog" />
      <figure className="banner-main">
        <img src={BlogImage} alt="blog" />
      </figure>
      <section className="mainSpacing blogOutrFeatured">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <div>
                <h2>Featured</h2>
                <div className="card">
                  <GatsbyImage
                    className="card-img-top"
                    image={
                      group[0].featuredImage.node.localFile?.childImageSharp
                        .gatsbyImageData
                    }
                    alt="blog"
                  />
                  <div className="card-body">
                    <h4 className="card-title mb-3">
                      <Link to={"/blog/" + group[0].slug}>
                        {group[0].title}
                      </Link>
                    </h4>
                    <div className="card-text" dangerouslySetInnerHTML={{ __html: group[0].content }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <h2>Latest Blog Post</h2>
              </div>
              {
                group.map((node, index) => (
                  <div className="card mb-2" key={index}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <GatsbyImage
                          image={
                            node.featuredImage.node.localFile?.childImageSharp
                              .gatsbyImageData
                          }
                          alt="blog"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h6 className="card-title">
                            <Link to={"/blog/" + node.slug}>
                              {node.title}
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>

                ))}
              <div className="pagination justify-content-end">
                <div className="previousLink d-inline p-2 page-item">
                  <NavLink test={first} url={previousUrl} text="&laquo; Prev" className="page-link" />
                </div>
                <div className="nextLink d-inline p-2 page-item">
                  <NavLink test={last} url={nextUrl} text="&raquo; Next" className="page-link" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}

export const query = graphql`
  {
    allWpPost {
      nodes {
        excerpt
        content
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
                gatsbyImageData(width: 1920, placeholder: TRACED_SVG, height: 100)
              }
            }
          }
        }
      }
    }
  }
`

export default BlogPage;