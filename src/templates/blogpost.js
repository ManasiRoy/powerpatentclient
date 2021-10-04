import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Post(props) {
  console.log(props)
  return (
    <Layout>
      <div>
        hello
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    wpPost(slug: { eq: $slug }) {
      author {
        node {
          avatar {
            url
          }
          lastName
          firstName
        }
      }
    }
  }`