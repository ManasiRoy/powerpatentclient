import React from "react"
import Layout from '../components/Layout/Layout';
import SEO from "../components/seo";
import EventsBanner from "../images/events.jpg"

const Events = () => {
    return (
        <>
            <Layout>
                <SEO title="Events / Webinars" />
                <figure className="banner-main">
                    <img src={EventsBanner} alt="events" />
                </figure>
                <section className="mainSpacing">
                    <div className="container">
                        <p>
                            We have weekly open office hours every Tuesday at 11am to go over how to use our system.  Please join us.
                        </p>
                        <a className="btn btn-primary" href="https://us06web.zoom.us/j/85463682173?pwd=MjB2dnVlS21OVlh6QWkzczFsaDJ2UT09" target="_blank">Join Now</a>
                    </div>
                </section>
            </Layout>
        </>
    )
}
export default Events