import React from "react"
import Layout from "../components/Layout"
import styles from "../components/products.module.css"

const products = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1 className={styles.page.h1}>This is our products page</h1>
        <p className={styles.text}>
          Lorem ipsum dorlorasd hic, asdfkjwerit jfguiowe r
        </p>
      </div>
    </Layout>
  )
}

export default products
