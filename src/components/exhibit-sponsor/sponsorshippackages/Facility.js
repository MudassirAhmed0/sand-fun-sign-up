import React from "react";

const Facility = ({ handlePackages, index, facilitie, varient2 }) => {
  return (
    <div
      className={`${
        varient2 ? "v2" : ""
      }  packages_Main  lg:pb-[2.21354166667vw] pb-[25px] border-b border-[#D9D9D9] relative`}
    >
      <span
        onClick={() => {
          handlePackages(index);
        }}
        className="bg-white benifitTag cursor-pointer transition-all duration-[600ms] lg:px-[2.08333333333vw] px-[20px] absolute lg:bottom-[-0.859375vw] bottom-[-13.5px] left-[50%] translate-x-[-50%] lg:text22 mtext18 f500 text-[#000000]"
      >
        Show Benefits
      </span>
      <div
        onClick={() => {
          handlePackages(index);
        }}
        className="benifitTagv2 cursor-pointer  lg:gap-x-[0.625vw] gap-x-[12px]  absolute lg:top-[3.56458333333vw] top-[45px] sm:top-0 lrf2"
      >
        <span className=" sm:block lg:text22 mtext14 f500 text-[#000000]">
          Show Benefits
        </span>
        <img
          src="/images/icons/packages-chevron.svg"
          alt="chevron"
          className="lg:w-[0.9375vw] w-[14px] transition-all duration-[600ms]"
        />
      </div>
      <div
        onClick={() => {
          handlePackages(index);
        }}
        className="cursor-pointer"
      >
        <div className="flex justify-between items-start">
          <span className="heading block w-[60%] capitalize sm:w-[70%] lg:w-[unset] transition-all duration-[600ms] lg:text32 mtext20 text-[#1A1C1F] f600 capitalize">
            {facilitie?.heading}
          </span>
          {facilitie.details.map((detail, inde) => (
            <>
              {varient2 ? (
                <span
                  key={inde}
                  className="lg:text26 mtext14  text-[#F09021] bg-[#F0902117] px-[12px] h-[32px] lg:px-[1.25vw] flex items-center lg:h-[2.60416666667w] border100"
                >
                  {detail.sar} SAR
                </span>
              ) : (
                ""
              )}
            </>
          ))}
        </div>
        <div className="upperList transition-all duration-500 lg:mt-[0.41666666666vw] mt-[8px] flex flex-wrap lg:gap-x-[5.72916666667vw] gap-[15px] lg:text26 mtext18 text-[#1A1C1F] ">
          {facilitie.details.map((detail, inde) => (
            <>
              <span key={inde}>{detail.partner}</span>
              <span key={inde}>{detail.sqm} Sqm</span>
              {varient2 ? "" : <span key={inde}>{detail.sar} SAR</span>}
            </>
          ))}
        </div>
      </div>
      <div
        style={{ opacity: 0 }}
        className="max-h-0 opacity-0 overflow-hidden transition-all duration-700 delay-[200] dropDown"
      >
        <div>
          <div className="flex lg:gap-x-[5.72916666667vw] lg:text26 mtext18 text-[#1A1C1F] "></div>
          <ul className="lg:mt-[3vw] sm:mt-[24px] mt-[18px] strategicpartner_Lists lg:text22 mtext18 f500 text-[#1A1C1F] text-opacity-[0.7] flex justify-between flex-wrap lg:gap-x-[3.95833333333vw]">
            {facilitie.benefits.map((benefit, ind) => (
              <ul key={ind} className="flex flex-col lg:w-[47.298%] ">
                {benefit.map((listItem, i) => (
                  <li key={i}>{listItem}</li>
                ))}
              </ul>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Facility;
