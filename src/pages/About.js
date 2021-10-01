import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

const About = ({ data }) => {
    console.log(data);
    return (
        <>
            <Header />
            <div className="pt-5" style={{ marginTop: "200px" }}>

                <h1>{data.wpPage.title}</h1>

            </div>
            <Footer />
        </>
    )

}





export const query = graphql`
  {
    page(id: "6778", idType: DATABASE_ID) {
        title
        content
    }
  }
`

export default About
