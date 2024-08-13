import React from "react";
import Image from "next/image";

const Card = ({ arabic, participatingBenefit, index }) => {
  return (
    <div
      data-aos="fade"
      data-aos-delay={index * 100}
      className="relative lg:w-[27.7604166667vw] sm:w-[48%] w-full border20 bg-[#000000] bg-opacity-[0.03] overflow-hidden lg:pt-[4.47916666667vw] lg:pb-[1.14583333333vw] sm:pt-[70px] sm:pb-[25px] pt-[60px] pb-[20px]"
    >
      <div className="absolute lg:top-[1.04166666667vw] lrf2 lg:mx-[1.04166666667vw] sm:top-[10px] sm:mx-[10px] top-[20px] mx-[20px] lg:size-[4.32291666667vw] sm:size-[60px] size-[40px]">
        <Image
          fill
          alt="star-icon"
          src="/images/icons/benefits-star.svg"
          className="flipped"
        />
      </div>
      <div className="lg:w-[24.4270833333vw] w-[90%] mx-[auto] relative z-[2]">
        <h6
          className={`${
            arabic ? "f700" : "f600"
          } lg:text28 mtext20 text-[#000] text-opacity-[0.8]`}
        >
          {participatingBenefit.heading}
        </h6>
        <p
          className={`${
            arabic ? "f500 lg:text21" : "f400 lg:text20"
          } lg:mt-[0.41666666666vw] mt-[8px] text-[#1A1C1F] text-opacity-[0.8] mtext18`}
        >
          {participatingBenefit.desc}
        </p>
      </div>
    </div>
  );
};

export default Card;
