import React from "react";
import Image from "next/image";

export const SponsorsCard = ({
  arabic,
  small,
  medium,
  big,
  heading,
  images,
}) => {
  return (
    <div
      className={`${
        small
          ? "lg:w-[13.75vw] w-[47.929%]"
          : medium
          ? "lg:w-[16.6666666667vw] w-full"
          : big
          ? "lg:w-[52.0833333333vw] w-full"
          : "w-full"
      }  relative flex justify-center items-center lg:py-[2.734375vw] lg:min-h-[11.8229166667vw] py-[28.5px] min-h-[139px] border border30 border-[#0000007A]`}
    >
      <div className=" absolute top-[-8.5%] left-1/2 -translate-x-1/2 w-full flex justify-center">
        <span className="bg-white text-center lg:text21 mtext16 f600 text-[#000000] lg:px-[0.52083333333vw] px-[2px]">
          {heading}
        </span>
      </div>
      <div className="flex justify-center items-center flex-wrap lg:gap-[0.83333333333vw] sm:gap-[10px] gap-[7px]">
        {images?.map((img, index) => (
          <div
            key={index}
            className="relative lg:size-[6.25vw] sm:size-[100px] size-[80px]"
          >
            <Image src={img.img} fill alt="sponsors" className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};
