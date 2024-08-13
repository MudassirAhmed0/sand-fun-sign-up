import React from "react";
import CardsWrapper from "./CardsWrapper";

const Benefits = ({ arabic }) => {
  return (
    <section className="bg-[#1A1C1F]">
      <div className="Container1640 lg:pb-[5.10416666667vw] pb-[40px]">
        <h2 data-aos="fade-up" className="text64 text-white text-center">
          Fly-In Benefits
        </h2>
        <CardsWrapper />
        <span
          data-aos="fade"
          className="lg:text20 mtext18 text-white text-center block"
        >
          *maximum of 250 US Gallons*
        </span>
      </div>
    </section>
  );
};

export default Benefits;
