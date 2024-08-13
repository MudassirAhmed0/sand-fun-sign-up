import React from "react";
import Image from "next/image";
import Link from "next/link";

const Content = () => {
  return (
    <div className="Container1640 relative z-[2]">
      <div className="lg:w-[47.96875vw] pb-[5vh] lg:pb-0">
        <div
          data-aos="fade"
          data-aos-delay="200"
          data-aos-anchor="#heroMera"
          className="flex items-end lg:gap-x-[0.41666666666vw] gap-x-[5px]"
        >
          <Link
            href="/#"
            className="flex items-center sm:items-end lg:gap-x-[0.41666666666vw] gap-x-[5px] opacity_Hover"
          >
            <div className="relative lg:size-[2.08333333333vw] sm:size-[30px] size-[20px]">
              <Image fill alt="home-icon" src="/images/icons/home.svg" />
            </div>
            <span className="lg:text24 mtext16 f500  text-white text-opacity-[0.8]">
              Home
            </span>
          </Link>
          <img
            alt="chevron-icon"
            src="/images/icons/bread-chevron.svg"
            className="lg:w-[0.57291666666vw] w-[7px] pb-[6px] lg:pb-[0.26041666666vw]"
          />
        </div>
        <div className="text-[#FFFFFF] lg:mt-[1.22916666666vw] mt-[16px]">
          <h1
            data-aos="fade-up"
            data-aos-anchor="#heroMera"
            className="lg:text89 mtext38  !capitalize"
          >
            Exhibit & Sponsor
          </h1>
          {/* <p
            data-aos="fade-down"
            data-aos-anchor="#heroMera"
            className="lg:text21 mtext16 f500 lg:mt-[0.62916666666vw] mt-[10px] "
          >
            Saudi Arabia's aviation industry is rapidly growing, with
            state-of-the-art airports and aircraft connecting the country to key
            global hubs through Saudia and other leading airlines.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Content;
