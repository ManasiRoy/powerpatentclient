import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout/Layout';
import SEO from "../components/seo";
import Button from 'react-bootstrap/Button'

const Law = ({ data }) => {
  const common = data.wpgraphql.page.partnersinnerpages
  return (
    <Layout>
      <SEO title="Law" />
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
              </div>
              <div className="row mb-5 text-center innerpages">
                <div className="col-md-4 mb-3 mb-md-0">
                  <figure>
                    <img src={data.wpgraphql.page.law.icon1.link} alt={data.wpgraphql.page.law.icon1.title} />
                  </figure>
                  <h4>{common.firsttext}</h4>
                  <p>{common.firstpara}</p>
                </div>
                <div className="col-md-4 mb-3 mb-md-0">
                  <figure>
                    <img src={data.wpgraphql.page.law.icon2.link} alt={data.wpgraphql.page.law.icon2.title} />
                  </figure>
                  <h4>{common.secondtext}</h4>
                  <p>{common.secondpara}</p>
                </div>
                <div className="col-md-4 mb-3 mb-md-0">
                  <figure>
                    <img src={data.wpgraphql.page.law.icon3.link} alt={data.wpgraphql.page.law.icon3.title} />
                  </figure>
                  <h4>{common.thirdtext}</h4>
                  <p>{common.thirdpara}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <figure>
                    <img src={common.identityimage.link} alt={common.identityimage.title} />
                  </figure>
                </div>
              </div>
              <div className="d-flex flex-wrap justify-content-center">
                <Button variant="primary" className="m-2">Request a Demo</Button>
                <Button variant="primary" className="m-2">Take a video tour</Button>
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
      page(id: "cG9zdDo3MDgz") {
        partnersinnerpages {
          headingmain
          subheading
          paraghaph
          thirdtext
          thirdpara
          secondtext
          secondpara
          firstpara
          firsttext
          headingmain
          subheading
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
        law {
          icon1 {
            altText
            uri
            link
          }
          icon2 {
            altText
            uri
            link
          }
          icon3 {
            altText
            uri
            link
          }
        }
      }
    }
  }
`
export default Law