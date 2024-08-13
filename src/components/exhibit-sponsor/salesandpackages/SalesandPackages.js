import React from "react";
import SalesExperience from "./salesexperience/SalesExperience";
import ExhibitionPackages from "./exhibitionpackages/ExhibitionPackages";

const SalesandPackages = ({ arabic }) => {
  return (
    <section className="relative bg-[#1A1C1F] py220">
      <img
        src="/images/exhibit-sponsor/pattern.png"
        alt="pattern"
        className="lg:top-[2.70833333333vw] top-[40px] lrf2 absolute flipped lg:w-[18.59375vw] w-[30%]"
      />
      <div className="Container1640 relative z-[2]">
        <SalesExperience arabic={arabic} />
        <ExhibitionPackages arabic={arabic} />
      </div>
    </section>
  );
};

export default SalesandPackages;
