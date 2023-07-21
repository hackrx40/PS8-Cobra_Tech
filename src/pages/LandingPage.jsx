
import React from 'react'
import styles from "../style";
import {Stats, Hero} from "../components";
import Layout from './Layout';

const LandingPage = () => {
  return (
    <Layout>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
        </div>
      </div>
    </Layout>
  );
}

export default LandingPage