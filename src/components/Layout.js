import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

export default function layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
