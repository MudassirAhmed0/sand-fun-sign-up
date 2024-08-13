import React from "react";

const Content = ({ arabic }) => {
  return (
    <div className="text-center  w-full flex flex-col ">
      <h2
        data-aos="fade-up"
        className="text64 text-[#000] mx-[auto] lg:w-[60.0729166667vw]"
      >
        {arabic
          ? "لوريم ايبسوم دولار سيت "
          : "Exhibition participation opportunities"}
      </h2>
      <p
        data-aos="fade-down"
        className={`${
          arabic ? "f500 lg:text21" : "f400 lg:text20"
        } lg:mt-[0.72916666666vw] sm:mt-[14px] mt-[14px]   text-[#1A1C1F] text-opacity-[0.7] mtext18] mx-[auto] lg:w-[53.0729166667vw]`}
      >
        {arabic
          ? "تيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكأليايت,سيت دور "
          : "Sand and Fun’s exhibition and static display provide an unmatched opportunity for aviation companies to showcase cutting-edge products, technology, and services. Designed for local and regional enterprises, it fosters meaningful interactions with industry partners and VVIPs. This event is an invaluable  hub for networking, discovery, and growth."}
      </p>
    </div>
  );
};

export default Content;
