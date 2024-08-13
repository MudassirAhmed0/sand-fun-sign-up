import React from "react";
import Image from "next/image";

const Card = ({ benefit, index }) => {
  return (
    <div
      key={index}
      data-aos="fade"
      data-aos-delay={(index + 1) * 100}
      className=" lg:w-[26.7708333333vw] sm:w-[48%] lg:min-h-[14.5833333333vw] w-full bg-[#313335] border40 lg:py-[2.86458333333vw] sm:py-[40px] py-[20px]"
    >
      <div className="flex flex-col items-center justify-center mx-[auto] text-center lg:w-[21.8229166667vw] w-[90%]">
        <div className="relative lg:size-[2.91666666667vw] sm:size-[50px] size-[40px]">
          <Image fill alt="sales" src={benefit.img} />
        </div>

        <span className="lg:text28 mtext20 f500 text-white block lg:mt-[0.625vw] mt-[6px]">
          {benefit.desc}
        </span>
      </div>
    </div>
  );
};

export default Card;
