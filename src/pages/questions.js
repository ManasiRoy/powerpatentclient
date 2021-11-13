import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from '../components/Layout/Layout';
import SEO from "../components/seo";


const getdata = graphql`
{
  wpgraphql {
    page(id: "cG9zdDo3MzQ1") {
      id
      title
      content
    }
  }
}
  `
const Questions = () => {
    const data = useStaticQuery(getdata);
    const common = data.wpgraphql.page
    return (
        <>
            <Layout>
                <SEO title="Customer Studies" />
                <section className="mainSpacing">
                    <div dangerouslySetInnerHTML={{ __html: common.content }} />
                </section>
            </Layout>
        </>
    )
}
export default Questions