"use client";
import React, { useState } from "react";
import Hero from "./hero/Hero";
import WondersAviation from "./WondersAviation";
import Exhibition from "./exhibition/Exhibition";
import BenefitsofParticipating from "./benefitsofparticipating/BenefitsofParticipating";
import SalesandPackages from "./salesandpackages/SalesandPackages";
import SponsorshipPackages from "./sponsorshippackages/SponsorshipPackages";
import Contact from "./Contact";
import ExhibitPopup from "../common/ExhibitPopup";

const ExhibitSponsorPage = ({ arabic }) => {
  const [activeExhibit, setExhibit] = useState(false);

  return (
    <>
      <ExhibitPopup activeExhibit={activeExhibit} setExhibit={setExhibit} />
      <Hero arabic={arabic} />
      <WondersAviation arabic={arabic} />
      <Exhibition arabic={arabic} setExhibit={setExhibit} />
      <BenefitsofParticipating arabic={arabic} />
      <SalesandPackages arabic={arabic} />
      <SponsorshipPackages arabic={arabic} varient2 />
      <Contact arabic={arabic} />
    </>
  );
};

export default ExhibitSponsorPage;
