import React from "react";

const Content = ({ arabic }) => {
  return (
    <div className="lg:w-[22.34375vw] w-full flex flex-col lg:pt-[1.40625vw]">
      <h2 data-aos="fade-up" className="text64 text-[#000]">
        {arabic
          ? "لوريم ايبسوم دولار سيت "
          : "Benefits of Participating in Exhibition"}
      </h2>
      {/* <p
        data-aos="fade-down"
        className={`${
          arabic ? "f500 lg:text21" : "f400 lg:text20"
        } lg:mt-[0.72916666666vw] sm:mt-[14px] mt-[14px]  lg:w-[20.5729166667vw] text-[#1A1C1F] text-opacity-[0.7] mtext18`}
      >
        {arabic
          ? "تيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكأليايت,سيت دور "
          : "Sand and Fun’s exhibition and static display provide an unmatched opportunity for aviation companies to showcase cutting-edge products,"}
      </p> */}
    </div>
  );
};

export default Content;
