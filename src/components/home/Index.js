"use client";
import React, { useState } from "react";
import Hero2 from "./hero/Hero2";
import About from "@/components/home/About";
import Analytics from "@/components/home/Analytics";
import Activities from "./activities/Activities";
import SandAndFun from "./SandAndFun";
import HangarTalks from "./hangartalks/HangarTalks";
import Exhibition from "./exhibition/Exhibition";
import Sponsors from "./sponsors/Sponsors";
import PreRegisterPopup from "../common/PreRegisterPopup";
import ExhibitPopup from "../common/ExhibitPopup";
const HomePage = ({ arabic, className }) => {
  const [activePreRegister, setActivePreRegister] = useState(false);
  const [activeExhibit, setExhibit] = useState(false);

  return (
    <>
      <PreRegisterPopup
        activePreRegister={activePreRegister}
        setActivePreRegister={setActivePreRegister}
      />
      <ExhibitPopup activeExhibit={activeExhibit} setExhibit={setExhibit} />
      <div className={`${arabic ? "rtl" : "ltr"} relative z-[3] bg-[#1a1c1f]`}>
        <Hero2
          arabic={arabic}
          className={className}
          setActivePreRegister={setActivePreRegister}
          setExhibit={setExhibit}
        />
        <Analytics arabic={arabic} />
        <About arabic={arabic} />
        <HangarTalks
          arabic={arabic}
          setActivePreRegister={setActivePreRegister}
        />
        {/* <Exhibition arabic={arabic} setExhibit={setExhibit} /> */}
        <Activities arabic={arabic} />
        {/* <Sponsors arabic={arabic} /> */}
      </div>
      <SandAndFun
        arabic={arabic}
        setActivePreRegister={setActivePreRegister}
        setExhibit={setExhibit}
      />
    </>
  );
};

export default HomePage;
