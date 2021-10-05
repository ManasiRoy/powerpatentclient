import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout/Layout';
import SEO from "../components/seo";


const Accelerator = ({ data }) => {
    const common = data.wpgraphql.page.partnersinnerpages
    const commonNext = data.wpgraphql.page.accelerator
    return (
        <Layout>
            <SEO title="Accelerator" />
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
                                    <p className="mb-5">{common.paraghaph}</p>
                                    <h4 className="mb-3">{commonNext.secondheading}</h4>
                                    <p>{commonNext.secondpara}</p>

                                </article>
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
        page(id: "cG9zdDo3MDgw") {
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
            accelerator {
                secondheading
                secondpara
            }
        }
    }
  }
`
export default Accelerator
