import React from "react";
import styles from "../style";
import Layout from "./Layout";
import { Business} from "../components";

const Features = () => {
  return (
    <Layout>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
            <Business />
        </div>
      </div>
    </Layout>
  );
};

export default Features;
