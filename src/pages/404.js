import React from "react"
import Layout from "../components/Layout/Layout"
import { Link } from "gatsby"
import PageNotFound from "../images/pagenotfound.jpg"

const NotFound = () => {
    return (
        <Layout>
            <figure className="banner-main">
                <img src={PageNotFound} alt="404 error" />
            </figure>
            <div className="container mainSpacing">
                <h1>404: Page Not Found</h1>
                <p>
                    <Link to="/">Go to main Page</Link>
                </p>
            </div>
        </Layout>
    )
}

export default NotFound