import { Link } from "gatsby"
import React from "react"

export default function Home() {
  return (
    <div>
      Hello world!
      <div>
        <Link to="/blog/">blog page</Link>
      </div>
    </div>
  )
}
