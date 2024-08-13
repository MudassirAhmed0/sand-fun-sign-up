import Image from "next/image";
import React from "react";

const Owner = ({ img, position, name, classes }) => {
  return (
    <div
      data-aos="fade"
      data-aos-delay="400"
      className={`${
        classes
          ? classes
          : "relative lg:w-[22.0833333333vw] lg:h-[26.0416666667vw]"
      } flex justify-center items-end sm:w-[36%] sm:h-[34vw] w-[51.562%] h-[26.679vh]`}
    >
      <Image fill src={img} alt="owner" className="object-cover" />
      <div className="absolute sm:static z-[2] f500 top-[46.7441860465vw] lg:top-[unset] capitalize flex flex-col text-center lg:gap-y-[0.41666666666vw] items-center ">
        <span className=" lg:text21 mtext15 text-white text-opacity-[0.8] lg:leading-[1.30208333333vw]">
          {position}
        </span>
        <span className=" lg:text24 mtext20 max-w-[171px] lg:max-w-[unset] text-white">
          {name}
        </span>
      </div>
    </div>
  );
};

export default Owner;
