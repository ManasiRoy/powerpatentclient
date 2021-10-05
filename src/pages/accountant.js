import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout/Layout';
import SEO from "../components/seo";


const Accountant = ({ data }) => {
    const common = data.wpgraphql.page.partnersinnerpages
    return (
        <Layout>
            <SEO title="Accountant" />
            <div className="mainSection">
                <figure className="banner-main">
                    <img src={common.pagebanner.link} alt={common.pagebanner.title} />
                </figure>
                <div className="mainSpacing">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <article className="mb-5">
                                    <h2>{common.headingmain}</h2>
                                    <h3 className="mb-5">{common.subheading}</h3>
                                    <p>{common.paraghaph}</p>
                                </article>
                                <figure>
                                    <img src={common.identityimage.link} alt={common.identityimage.title} />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
  {
    wpgraphql {
      page(id: "cG9zdDo3MDg4") {
        partnersinnerpages {
          headingmain
          subheading
          paraghaph
          identityimage {
            uri
            title
            srcSet(size: MEDIUM_LARGE)
            slug
            link
          }
          pagebanner {
            link
            uri
            title
            srcSet
            }
        }
      }
    }
  }
`
export default Accountant