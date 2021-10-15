import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout/Layout';
import SEO from "../components/seo";
import Table from 'react-bootstrap/Table';
import TickImg from "../images/check.png";

const Accountant = ({ data }) => {
  const common = data.wpgraphql.page.partnersinnerpages
  return (
    <Layout>
      <SEO title="Accountant" />
      <section className="mainSection">
        <figure className="banner-main">
          <img src={common.pagebanner.link} alt={common.pagebanner.title} />
        </figure>
        <div className="mainSpacing innerpages">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <article className="mb-5">
                  <h2>{common.headingmain}</h2>
                  <h3 className="mb-5">{common.subheading}</h3>
                </article>
              </div>
            </div>
            <div className="row mb-5 text-center">
              <div className="col-md-4 mb-3 mb-md-0">
                <h4>{common.firsttext}</h4>
                <p>{common.firstpara}</p>
              </div>
              <div className="col-md-4 mb-3 mb-md-0">
                <h4>{common.secondtext}</h4>
                <p>{common.secondpara}</p>
              </div>
              <div className="col-md-4 mb-3 mb-md-0">
                <h4>{common.thirdtext}</h4>
                <p>{common.thirdpara}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mainSpacing">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <Table striped bordered hover size="lg" responsive="md" className="mb-0">
                <thead>
                  <tr>
                    <th></th>
                    <th>Partner <br /> <small>0-4 active referrals</small></th>
                    <th>Bronze <br /><small>5-9 active referrals</small></th>
                    <th>Silver <br /><small>10-24 active referrals</small></th>
                    <th>Gold <br /><small>25+ active referrals</small></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Waived implementation fees</td>
                    <td><img src={TickImg} alt="check" /></td>
                    <td><img src={TickImg} alt="check" /></td>
                    <td><img src={TickImg} alt="check" /></td>
                    <td><img src={TickImg} alt="check" /></td>
                  </tr>
                  <tr>
                    <td>Access to Launch</td>
                    <td><img src={TickImg} alt="check" /></td>
                    <td><img src={TickImg} alt="check" /></td>
                    <td><img src={TickImg} alt="check" /></td>
                    <td><img src={TickImg} alt="check" /></td>
                  </tr>
                  <tr>
                    <td>Partner Resource Center</td>
                    <td><img src={TickImg} alt="check" /></td>
                    <td><img src={TickImg} alt="check" /></td>
                    <td><img src={TickImg} alt="check" /></td>
                    <td><img src={TickImg} alt="check" /></td>
                  </tr>
                  <tr>
                    <td>Dedicated account manager</td>
                    <td></td>
                    <td><img src={TickImg} alt="check" /></td>
                    <td><img src={TickImg} alt="check" /></td>
                    <td><img src={TickImg} alt="check" /></td>
                  </tr>
                  <tr>
                    <td>Introduction to potential clients</td>
                    <td></td>
                    <td></td>
                    <td><img src={TickImg} alt="check" /></td>
                    <td><img src={TickImg} alt="check" /></td>
                  </tr>
                  <tr>
                    <td>Co-marketing</td>
                    <td></td>
                    <td></td>
                    <td><img src={TickImg} alt="check" /></td>
                    <td><img src={TickImg} alt="check" /></td>
                  </tr>
                  <tr>
                    <td>Early access to betas</td>
                    <td></td>
                    <td></td>
                    <td><img src={TickImg} alt="check" /></td>
                    <td><img src={TickImg} alt="check" /></td>
                  </tr>
                  <tr>
                    <td>Access to Legal Design Program</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><img src={TickImg} alt="check" /></td>
                  </tr>
                  <tr>
                    <td>Dedicated onboarding</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><img src={TickImg} alt="check" /></td>
                  </tr>

                </tbody>
              </Table>
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
      page(id: "cG9zdDo3MDg4") {
        partnersinnerpages {
          headingmain
          subheading

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
      }
    }
  }
`
export default Accountant