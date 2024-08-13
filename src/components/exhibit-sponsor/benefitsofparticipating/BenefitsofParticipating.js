import React from "react";
import Content from "./Content";
import CardsWrapper from "./CardsWrapper";

const BenefitsofParticipating = ({ arabic }) => {
  return (
    <section>
      <div className="pb220 Container1640 flex flex-wrap sm:gap-[40px] gap-[30px] items-start lg:gap-[6.25vw] justify-between">
        <Content arabic={arabic} />
        <CardsWrapper arabic={arabic} />
      </div>
    </section>
  );
};

export default BenefitsofParticipating;
