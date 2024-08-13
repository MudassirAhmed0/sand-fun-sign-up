"use client";

import React from "react";
import Content from "./Content";
import CardsWrapper from "./CardsWrapper";

const Exhibition = ({ arabic, setExhibit }) => {
  return (
    <section id="exhibitionSection">
      <div className="py220 Container1640 flex flex-col items-center">
        <Content arabic={arabic} />
        <CardsWrapper arabic={arabic} />

        <div data-aos="fade" onClick={() => setExhibit(true)}>
          <button
            className={`  flex justify-center items-center myBton text-[#000000] sm:py-[12.5px] sm:px-[28.269px] py-[2.20930232558vw] lg:py-[0.953125vw] px-[5.41139534884vw] lg:px-[2.3171875vw] border100 lg:text21 mtext16 f600 border-[#000] lg:border-[0.02604166666vw] border-[0.5px] relative before:z-[-1] hover:before:opacity-[1] before:opacity-0 before:content-[''] before:border100 before:absolute before:top-0 before:lrf1 before:size-full before:ring-2 before:ring-[#F62D17] before:blur-[6px] hover:border-[#F62D17]  before:transition-all before:duration-500 transition-all duration-500`}
          >
            {arabic ? "لوريم ايبسوم " : "Exhibit Now"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Exhibition;
