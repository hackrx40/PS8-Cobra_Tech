import React from "react";
import "./Kavach.css";
import KavachCards from "../KavachCards/KavachCard";
import kavachlob from "../../assets/kavachlob.png";
import kavachpercent from "../../assets/kavachpercent.png";
import kavachtime from "../../assets/kavachtime.png";
import kavachbuild from "../../assets/kavachbuild.png";
import kavachppl from "../../assets/kavachppl.png";
import kavachsearch from "../../assets/kavachsearch.png";



const Kavach = () => {
  return (
    <div
      className="flex flex-col justify-center items-center KavachBox"
     
    >
      <h1 className="kavachTitle">Why choose us?</h1>
      <div className="flex justify-center items-center ">
        <KavachCards
          image={kavachpercent}
          planName="99.06%"
          desc="Claims paid percentage"
          imageHeight="66px"
          imageWidth="80px"
        />
        <KavachCards
          image={kavachlob}
          planName="3.82 Cr"
          desc="Lives covered"
          imageHeight="66px"
          imageWidth="80px"
        />
        <KavachCards
          image={kavachtime}
          desc="Claim approval"
          planName="1 Day"
          imageHeight="66px"
          imageWidth="80px"
        />
      </div>
      <div className="flex justify-center items-center ">
        <KavachCards
          image={kavachbuild}
          planName="99.06%"
          desc="Our Presence"
          imageHeight="66px"
          imageWidth="80px"
        />
        <KavachCards
          image={kavachppl}
          planName="3.82 Cr"
          desc="For our customers"
          imageHeight="66px"
          imageWidth="80px"
        />
        <KavachCards
          image={kavachsearch}
          desc="In all phases"
          planName="1 Day"
          imageHeight="66px"
          imageWidth="80px"
        />
      </div>
    </div>
  );
};

export default Kavach;
