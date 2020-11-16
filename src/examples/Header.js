import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const getData = graphql`
  {
    site {
      siteMetadata {
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

const Header = () => {
  //const data = useStaticQuery(getData)
  const {
    site: {
      siteMetadata: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      {/* <h1>title: {data.site.siteMetadata.title}</h1> */}
      <h1>title : {title}</h1>
      <h1>Name : {name}</h1>
    </div>
  )
}

export default Header
