import React from "react";
import CardsWrapper from "./CardsWrapper";

const SalesExperience = ({ arabic }) => {
  return (
    <div>
      <h2 data-aos="fade-up" className="text64 text-white text-center">
        Seamless Sales Experience
      </h2>
      <CardsWrapper arabic={arabic} />
    </div>
  );
};

export default SalesExperience;
