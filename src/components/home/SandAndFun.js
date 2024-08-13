import React from "react";
import LinkBtn from "../common/LinkBtn";

const SandAndFun = ({ arabic, setActivePreRegister, setExhibit }) => {
  return (
    <div
      id="joinusSection"
      className="relative w-full funSection  lg:h-[56.09375vw] h-[121.395348837vw] flex justify-center lg:justify-end items-center lg:items-start lg:pt-[12.4479166667vw] "
    >
      {/* <img
        src="/images/home/fun.jpg"
        className="w-full h-full top-0 left-0 fixed object-cover "
      /> */}
      {/* <span className="atlwh_Full hero-overlay2"></span> */}
      <div
        id="cta"
        data-aos="fade"
        className="relative z-[2] cardAniamte lg:py-[2.91666666667vw] sm:py-[40px] py-[32px] border20 overflow-hidden lg:mx-[9.11458333333vw] lg:w-[50.9375vw] w-[91%] w-[ 84.119%]"
      >
        <span className="atlwh_Full cta-overlay"></span>
        <div id className="relative z-[2] w-[88.889%] mx-[auto]">
          <span
            className={`${
              arabic ? "lg:text48" : "lg:text64"
            } mtext24 f700 text-white block lg:w-[unset] w-[98%]`}
          >
            {arabic
              ? "لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيتسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولاي اسم دولار سيت لوريم ايبسوم دولار سوم دولار سيت "
              : "Sand & Fun is the only show of its kind in the whole region, making Riyadh the meeting point for aviation enthusiast."}
          </span>
          <div
            data-aos="fade"
            data-aos-delay="200"
            data-aos-anchor="cta"
            className={` lg:mt-[2.5vw] flex flex-wrap items-center lg:gap-[1.25vw] sm:gap-[12px] gap-[6px] mt-[32px]`}
          >
            <div onClick={() => setActivePreRegister(true)}>
              <LinkBtn
                text={arabic ? "لوريم ايبسوم دولار " : "Pre register now"}
                arabic={arabic}
                smallBtn
                tag={"button"}
              />
            </div>
            <div
            // onClick={() => setExhibit(true)}
            >
              <LinkBtn
                text={arabic ? "لوريم ايبسوم " : "Exhibit & Sponsor"}
                secondVarient
                arabic={arabic}
                smallBtn
                link={"/exhibit-sponsor"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SandAndFun;
