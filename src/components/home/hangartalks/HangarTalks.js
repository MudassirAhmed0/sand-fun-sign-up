"use client";
import React, { useEffect, useState } from "react";
import Content from "./Content";
import HangarTalksCardsDesktop from "./HangarTalksCardsDesktop";
import HangarTalksCardsMobile from "./HangarTalksCardsMobile";

const HangarTalks = ({ arabic, setActivePreRegister }) => {
  const [isMobile, setIsMobile] = useState(0);
  useEffect(() => {
    setIsMobile(window.innerWidth <= 1024);
  }, []);

  return (
    <section id="hangarTalksSection">
      <div className=" py220 bg-[#fff]">
        <Content arabic={arabic} setActivePreRegister={setActivePreRegister} />
        <div className="Container1640">
          <img
            src="/images/home/hanger-talks/hanger.jpg"
            className="w-full mt-[35px] lg:mt-[2vw]  border20"
          />
        </div>
        {/* {isMobile || <HangarTalksCardsDesktop arabic={arabic} />}
        {isMobile && (
          <HangarTalksCardsMobile arabic={arabic} isMobile={isMobile} />
        )} */}
      </div>
    </section>
  );
};

export default HangarTalks;
