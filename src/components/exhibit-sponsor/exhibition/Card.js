import React from "react";
import Image from "next/image";

const Card = ({ exhibition, arabic }) => {
  return (
    <div className="lg:w-[17.4479166667vw] sm:w-[80%] w-full">
      <div className="relative w-full lg:h-[12.5vw] sm:h-[40vw] h-[55.816vw] border20 overflow-hidden">
        <Image
          src={exhibition.img}
          fill
          alt="exhibition-img"
          className="border20 object-cover"
        />
      </div>
      <h6
        className={`${
          arabic ? "f700" : "f600"
        } lg:text28 mtext20 min-h-[3.54166666667vw] text-center text-[#000000] lg:mt-[1.07638888889vw] mt-[14px]`}
      >
        {exhibition.heading}
      </h6>
    </div>
  );
};

export default Card;
