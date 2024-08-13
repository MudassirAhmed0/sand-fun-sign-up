import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = ({ arabic }) => {
  return (
    <section className="w-full lg:h-[90.7407407407vh] h-[90vh] relative flex items-end">
      <div className="atlwh_Full overflow-hidden ">
        <div className="atlwh_Full">
          <span className="flyin_HeroOverlay1 atlwh_Full lg:h-[11.0416666667vw] h-[20%]"></span>
          <span className="flyin_HeroOverlay2 atlwh_Full top-[unset] bottom-0 lg:h-[16.3541666667vw] h-[30%]"></span>
        </div>
        <div className="atlwh_Full z-[-1]">
          <Image
            fill
            alt="hero"
            src="/images/flyin/hero.jpg"
            className="object-cover rotateHoja"
          />
        </div>
      </div>
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
              Sand & Fun Fly-Ins
            </h1>
            <p
              data-aos="fade-down"
              data-aos-anchor="#heroMera"
              className="lg:text20 mtext16 lg:mt-[0.62916666666vw] mt-[10px] lg:mb-[0.83333333333vw] mb-[14px] "
            >
              Meet us in the skies of Arabia.{" "}
            </p>
            <div className="flex justify-start">
              <Link
                href={"#signup"}
                data-aos="fade"
                className={`  flex justify-center items-center myBton text-[#fff] sm:py-[12.5px] sm:px-[28.269px] py-[2.20930232558vw] lg:py-[0.953125vw] px-[5.41139534884vw] lg:px-[3.29166666667vw] border100 lg:text21 mtext16 f600 border-[#fff] lg:border-[0.02604166666vw] border-[0.5px] relative before:z-[-1] hover:before:opacity-[1] before:opacity-0 before:content-[''] before:border100 before:absolute before:top-0 before:lrf1 before:size-full before:ring-2 before:ring-[#F62D17] before:blur-[6px] hover:border-[#F62D17]  before:transition-all before:duration-500 transition-all duration-500`}
              >
                {arabic ? "لوريم ايبسوم " : "Sign Up"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
