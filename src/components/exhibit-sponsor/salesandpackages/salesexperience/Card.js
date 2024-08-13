import React from "react";
import Image from "next/image";

const Card = ({ sale, index }) => {
  return (
    <div
      key={index}
      data-aos="fade"
      data-aos-delay={index + 1 * 100}
      className=" lg:w-[19.7916666667vw] sm:w-[48%] w-full bg-[#313335] border40 lg:pt-[3.125vw] lg:pb-[1.14583333333vw] sm:pt-[60px] pt-[40px] pb-[20px]"
    >
      <div className="flex flex-col items-center justify-center mx-[auto] text-center lg:w-[16.7916666667vw] w-[90%]">
        <div className="relative lg:size-[2.91666666667vw] sm:size-[50px] size-[40px]">
          <Image
            fill
            alt="sales"
            src={`/images/icons/sales-icons/${index + 1}.svg`}
          />
        </div>
        <h6 className="lg:text28 mtext20  f600  text-white lg:my-[0.3125vw] mt-[10px] mb-[4px]">
          {sale.heading}
        </h6>
        <span className="lg:text20 mtext18  text-opacity-[0.8] text-white">
          {sale.desc}
        </span>
      </div>
    </div>
  );
};

export default Card;
