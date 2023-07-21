import React from 'react'
import styles from "../style";
import { Billing, CardDeal} from "../components";
import Layout from "./Layout";

const Product = () => {
  return (
    <Layout>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Billing />
          <CardDeal />
        </div>
      </div>
    </Layout>
  );
}

export default Product