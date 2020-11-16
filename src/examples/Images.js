import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/image1.jpeg"
import Image from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image1.jpeg" }) {
      childImageSharp {
        fixed(width: 300, height: 400) {
          src
        }
      }
    }
    fluid: file(relativePath: { eq: "image2.jpeg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`

function Images() {
  return (
    <section className="images">
      <article className="single-image">
        <h3>basic image</h3>
      </article>
      <article className="single-image">
        <h3>fixed image/blur</h3>
      </article>
      <article className="single-image">
        <h3>fluid image/svg</h3>
      </article>
    </section>
  )
}

export default Images
