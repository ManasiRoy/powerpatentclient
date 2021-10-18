import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout/Layout';
import SEO from "../components/seo";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const Product = ({ data }) => {
    const common = data.wpgraphql.page.productsAndFeatures
    return (
        <Layout>
            <SEO title="Product" />
            <section className="mainSection">
                <figure className="banner-main">
                    <img src={common.banner.link} alt="banner" />
                </figure>
            </section>
            <div className="mainSpacing">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <article className="mb-5">
                                <h2>{common.mainheading}</h2>
                                <h3 className="mb-5">{common.subheading}</h3>
                                <p>{common.description}</p>
                            </article>
                        </div>
                        <div className="mb-5 col-md-12">
                            <Table striped bordered hover size="lg" responsive="md">
                                <thead>
                                    <tr>
                                        <th>Launch</th>
                                        <th>Starter</th>
                                        <th>Growth</th>
                                        <th>Scale</th>
                                        <th>IPO Ready</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Free Idea Capture</td>
                                        <td>Everything in Launch</td>
                                        <td>Everything in Starter</td>
                                        <td>Everything in Growth</td>
                                        <td>Everything in Scale</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>Provisional Application</td>
                                        <td>Provisional/Utility Applications</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>Trademark Application</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>Copyright Application</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>NDA for Trade Secrets</td>
                                        <td></td>
                                        <td></td>
                                        <td>Blockchain</td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><Button variant="primary">Learn More</Button></td>
                                        <td className="text-center"><Button variant="primary">Contact Sales</Button></td>
                                        <td className="text-center"><Button variant="primary">Contact Sales</Button></td>
                                        <td className="text-center"><Button variant="primary">Contact Sales</Button></td>
                                        <td className="text-center"><Button variant="primary">Contact Sales</Button></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>

            <section className="mainSpacing">
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <article>
                                    <h3>JOIN POWERPATENT</h3>
                                    <p>Get in touch to discuss plans and pricing</p>
                                </article>
                                <div className="d-flex flex-wrap justify-content-center">
                                    <Button variant="primary" className="m-2">Request a Demo</Button>
                                    <Button variant="primary" className="m-2">Take a video tour</Button>
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
  wpgraphql {
    page(id: "cG9zdDo2OTc5") {
      productsAndFeatures {
        categoryimage {
          link
          uri
          title
          slug
        }
        subheading
        mainheading
        description
        banner {
          uri
          title
          link
        }
      }
    }
  }
}
`
export default Product

