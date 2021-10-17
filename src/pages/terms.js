import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from '../components/Layout/Layout';
import SEO from "../components/seo";

const getdata = graphql`
{
  wpgraphql {
    page(id: "cG9zdDo3MzI1") {
      title
      content
    }
  }
}
  `
const Terms = () => {
    const data = useStaticQuery(getdata);
    const common = data.wpgraphql.page;
    return (
        <>
            <Layout>
                <SEO title="Law-Firm" />
                <section className="mainSpacing">
                    <div className="container">
                        <div className="row">
                            <div className="row">
                                <div className="col-md-12">
                                    <div dangerouslySetInnerHTML={{ __html: common.content }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
export default Terms