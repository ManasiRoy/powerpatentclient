import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from '../components/Layout/Layout';
import SEO from "../components/seo";

const getdata = graphql`
  {
    wpgraphql {
      page(id: "cG9zdDo3MzMz") {
        id
        title
        caseStudies {
          caseDescription
          caseHeading
          readmore {
            title
            url
            target
          }
          features {
            description
            heading
            readmore {
              target
              title
              url
            }
            logo {
              guid
              title
            }
          }
          caseLogo {
            guid
            title
          }
          caseBanner {
            guid
            title
          }
        }
      }
    }
  }
`
const CustomerStories = () => {
  const data = useStaticQuery(getdata);
  const common = data.wpgraphql.page.caseStudies
  return (
    <>
      <Layout>
        <SEO title="Customer Studies" />


        <section className="mainSpacing">
          <div className="container">
            <div className="row">
              <div className="col-md-7 mb-4 mb-md-0 align-self-center">
                <h2
                >{common.caseHeading}</h2
                >
                <figure>
                  <img src={common.caseLogo.guid} alt={common.caseLogo.title} />
                </figure>
                <p>{common.caseDescription}</p>
                <a className="btn btn-primary" href={common.readmore.url} target={common.readmore.target}>Read the full case study</a>
              </div>
              <div className="col-md-5">
                <figure>
                  <img src={common.caseBanner.guid} alt={common.caseBanner.title} className="w-100" />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className="mainSpacing">
          <div className="container">
            <div className="row text-center">
              {common.features.map((cs, index) => {
                return (
                  <div className="col-md-4 mb-4 mb-md-0" key={index}>
                    <div className="border p-3 h-100">
                      <h3>{cs.heading}</h3>
                      <figure>
                        <img src={cs.logo.guid} alt={cs.logo.title} />
                      </figure>
                      <p>{cs.description}</p>
                      <a className="btn btn-primary" href={cs.readmore.url} target="_blank">Read More</a>
                    </div>
                  </div>
                )

              })}
            </div>
          </div>
        </section>

      </Layout>
    </>
  )
}
export default CustomerStories