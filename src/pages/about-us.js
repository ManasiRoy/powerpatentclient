import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from '../components/Layout/Layout';
import SEO from "../components/seo";
import "react-multi-carousel/lib/styles.css";

const getdata = graphql`
{
  wpgraphql {
    page(id: "cG9zdDo3MjYz") {
      uri
      title
      slug
      about {
        texttwo
        textone
        paratwo
        paraone
        banner {
          uri
          title
          link
        }
        icontwo {
          link
          title
          uri
        }
        iconone {
          link
          title
          uri
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

                <figure>
                    <img src={common.banner.link} alt="banner" />
                </figure>

                <section className="mainSpacing">
                    <div className="container">
                        <div className="row">
                            <div className="row">
                                <div className="col-md-12 text-center mb-5">
                                    <h2> ABOUT POWERPATENT</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 align-self-center mb-4">
                                    <article className="text-center">
                                        <img src={common.iconone.link} alt={common.iconone.title} />
                                        <h4> {common.textone}</h4>
                                        <p> {common.paraone}</p>
                                    </article>
                                </div>
                                <div className="col-md-6 align-self-center mb-4">
                                    <article className="text-center">
                                        <img src={common.icontwo.link} alt={common.icontwo.title} />
                                        <h4> {common.texttwo}</h4>
                                        <p> {common.paratwo}</p>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </Layout>
        </>
    )
}
export default About