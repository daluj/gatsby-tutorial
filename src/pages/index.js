import { Link } from "gatsby"
import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div>
      <Navbar />
      Hello world!
      <div>
        <Link to="/blog/">blog page</Link>
      </div>
      <Footer />
    </div>
  )
}
