import React from "react";
import BackGrounds from "./BackGrounds";
import Content from "./Content";

const Hero = () => {
  return (
    <section className="w-full lg:h-[90.7407407407vh] h-[90vh] relative flex items-end">
      <BackGrounds />
      <Content />
    </section>
  );
};

export default Hero;
