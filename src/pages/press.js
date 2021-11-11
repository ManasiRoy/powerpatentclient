import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from '../components/Layout/Layout';
import SEO from "../components/seo";

const getdata = graphql`
{
  wpgraphql {
    page(id: "cG9zdDo3Nzcw") {
      id
      title
      content
    }
  }
}
  `
const Press = () => {
    const data = useStaticQuery(getdata);
    const common = data.wpgraphql.page;
    return (
        <>
            <Layout>
                <SEO title="Press" />
                <section className="mainSpacing">
                    <div className="container">
                        <div dangerouslySetInnerHTML={{ __html: common.content }} />
                    </div>

                </section >
            </Layout >
        </>
    )
}
export default Press