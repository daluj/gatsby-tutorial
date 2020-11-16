import React from "react"
import Layout from "../components/Layout"
import { ExampleButton } from "../components/button"

export default function Home() {
  return (
    <Layout>
      <h1 style={{ color: "red", textTransform: "uppercase" }}>
        Hello from the other side
      </h1>
      <ExampleButton>click me</ExampleButton>
    </Layout>
  )
}
