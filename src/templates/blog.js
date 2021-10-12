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
  /*const { data: { allWpPost } } = props
  const isLatestPost = allWpPost.nodes.map(d => d.date);
  console.log(allWpPost)*/
  const { group, index, first, last, pageCount } = props.pageContext;
  const previousUrl = pageCount - index == 1 ? '/blog/' : `/blog/${(index - 1).toString()}`
  const nextUrl = `/blog/${(index + 1).toString()}`
  //const group = data.allWpPost
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
            <div className="col-md-4">
              <h3>Explore by topic</h3>
              <ul className="list-group list-group-flash">
                {
                  group.map((catG, catGindex) => {
                    return (
                      <li className="list-group-item" key={catGindex}>
                        <Link to={catG.slug}>{catG.categories.nodes.map(n => n.name)}</Link>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className="col-md-8">
              {/* <div>{last ? */}
              <div>
                <h2>Featured</h2>
                <div className="card">
                  <GatsbyImage
                    className="card-img-top"
                    image={
                      group[0].featuredImage.node.localFile.childImageSharp
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
                    <div className="card-text" dangerouslySetInnerHTML={{ __html: group[0].excerpt }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mainSpacing blogOutr">
        <div className="container">
          <div className="row">
            <div className="text-center"><h2>Latest Blog Post</h2></div>
            <div className="col-md-12 mt-5 pt-3">
              <div className="row">
                {
                  group.map((node, index) => (
                    // allWpPost.nodes.slice(0, 5).map((node, index) => {
                    //   return (

                    <div className="col-md-3 mb-4" key={index}>
                      <div className="card">


                        <GatsbyImage
                          image={
                            node.featuredImage.node.localFile.childImageSharp
                              .gatsbyImageData
                          }
                          alt="blog"
                        />


                        <div className="card-body">
                          <h4 className="card-title">
                            <Link to={"/blog/" + node.slug}>
                              {node.title}
                            </Link>
                          </h4>
                        </div>


                      </div>
                    </div>

                  ))}
              </div>
              <div className="pagination justify-content-center">
                <div className="previousLink d-inline p-2 page-item">
                  <NavLink test={first} url={previousUrl} text="&laquo;" className="page-link" />
                </div>
                <div className="nextLink d-inline p-2 page-item">
                  <NavLink test={last} url={nextUrl} text="&raquo;" className="page-link" />
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

