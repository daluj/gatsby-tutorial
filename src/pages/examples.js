import React from "react"
import Header from "../examples/Header"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const examples = ({ data }) => {
  const {
    site: {
      info: { description },
    },
  } = data
  return (
    <Layout>
      <h1> Hello from examples page</h1>
      <Header />
      <h3>Description: {description}</h3>
    </Layout>
  )
}

export const data = graphql`
  {
    site {
      info: siteMetadata {
        title
        description
        author
        person {
          name
          age
        }
      }
    }
  }
`
export default examples
