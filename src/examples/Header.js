import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const getData = graphql`
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

const Header = () => {
  //const data = useStaticQuery(getData)
  const {
    site: {
      info: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      {/* <h1>title: {data.site.info.title}</h1> */}
      <h1>title : {title}</h1>
      <h1>Name : {name}</h1>
    </div>
  )
}

export default Header
