import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from '../components/Layout/Layout';
import SEO from "../components/seo";

const getdata = graphql`
{
  wpgraphql {
    page(id: "cG9zdDo3MjYz") {
      about {
        content
        fieldGroupName
        banner {
          title
          guid
        }
      }

    }
  }
}
  `
const About = () => {
  const data = useStaticQuery(getdata);
  const common = data.wpgraphql.page.about
  return (
    <>
      <Layout>
        <SEO title="About" />

        <figure className="banner-main">
          <img src={common.banner.guid} alt="banner" />
        </figure>

        <section className="mainSpacing">
          <div className="container">

            <div className="row">
              <div className="col-md-12 align-self-center mb-4">
                <article className="text-center">
                  <div className="card-text" dangerouslySetInnerHTML={{ __html: common.content }} />
                </article>
              </div>

            </div>
          </div>
        </section>


      </Layout>
    </>
  )
}
export default About