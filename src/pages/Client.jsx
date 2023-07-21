import React from 'react'
import styles from "../style";
import {Clients, Testimonials, CTA} from "../components";
import Layout from "./Layout";

const Client = () => {
  return (
    <Layout>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
            <Testimonials />
            <Clients />
            <CTA />
        </div>
      </div>
    </Layout>
  )
}

export default Client