import React from "react";
import LinkBtn from "../common/LinkBtn";
import Link from "next/link";
import Image from "next/image";

const Contact = ({ arabic }) => {
  return (
    <div className=" relative w-full contactSection  lg:h-[56.09375vw] h-[121.395348837vw] flex justify-center lg:justify-end items-center lg:items-start lg:pt-[12.4479166667vw] ">
      {/* <img
        src="/images/home/fun.jpg"
        className="w-full h-full top-0 left-0 fixed object-cover "
      /> */}
      {/* <span className="atlwh_Full hero-overlay2"></span> */}
      <div
        id="cta"
        data-aos="fade"
        className="relative z-[2] cardAniamte lg:py-[3.046875vw] sm:py-[40px] py-[32px] border20 overflow-hidden lg:mx-[9.11458333333vw] lg:w-[50.9375vw] w-[91%] w-[ 84.119%]"
      >
        <span className="atlwh_Full contact_Box"></span>
        <div id className="relative z-[2] w-[88.889%] mx-[auto]">
          <span
            className={`${
              arabic ? "lg:text48" : "lg:text64"
            } mtext24 f700 text-white block lg:w-[unset] w-[98%]`}
          >
            {arabic
              ? "لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيتسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولاي اسم دولار سيت لوريم ايبسوم دولار سوم دولار سيت "
              : "Contact Us for More Information"}
          </span>
          <div className="mt48 flex flex-col capitalize lg:gap-y-[0.41666666666vw] gap-y-[4px]">
            <span className="lg:text32 mtext20 text-[#FFFFFF] f700 ">
            Sales & Sponsorship Team
            </span>
            {/* <span className="lg:text24 mtext16 f600  text-white text-opacity-[0.8]">
            </span> */}
          </div>
          <div
            data-aos="fade"
            data-aos-delay="200"
            data-aos-anchor="cta"
            className={`  lg:mt-[1.875vw] sm:mt-[16px] mt-[12px] flex flex-wrap items-center lg:gap-[2.08333333333vw] sm:gap-[12px] gap-[6px] lg:text24 mtext16 f600  text-white`}
          >
            <Link
              href="tel:+966 560 730 174"
              className="flex lg:gap-x-[0.26041666666vw] gap-x-[5px] items-center cairo"
            >
              <div className="relative lg:size-[1.66666666667vw] sm:size-[20px] size-[15px]">
                <Image fill alt="phone" src="/images/icons/phone.svg" />
              </div>
              <span>+966 560 730 174</span>
            </Link>
            <Link
              href="mailto:exhibit@nexus.llc"
              className="flex lg:gap-x-[0.26041666666vw] gap-x-[5px] items-center cairo"
            >
              <div className="relative lg:size-[1.66666666667vw] sm:size-[20px] size-[15px]">
                <Image fill alt="mail" src="/images/icons/mail.svg" />
              </div>
              <span>exhibit@nexus.llc</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
