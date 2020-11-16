import React from "react"
import Layout from "../components/Layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1 className={styles.page.h1}> This is our blog</h1>
        <p className={styles.text}>
          Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem
          ipsumLorem ipsum
        </p>
      </div>
    </Layout>
  )
}

export default blog
