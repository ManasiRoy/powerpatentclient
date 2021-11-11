import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from '../components/Layout/Layout';
import SEO from "../components/seo";

const query = graphql`
  {
    wpgraphql {
      page(id: "cG9zdDo3NzU0") {
        id
        title
        videos {
          video {
            videoes
          }
        }
      }
    }
  }
`
const Video = () => {
    const data = useStaticQuery(query);
    const common = data.wpgraphql.page.videos
    return (
        <>
            <Layout>
                <SEO title="Video" />
                <section className="mainSpacing">
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2> See All Videos</h2>
                        </div>
                        <div className="row">
                            {common.video.map((v, index) => (
                                <div className="col-md-4 align-self-center mb-4" key={index}>
                                    <div className="ratio ratio-16x9">
                                        <iframe src={v.videoes} allowFullScreen controls></iframe>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </section>


            </Layout>
        </>
    )
}
export default Video