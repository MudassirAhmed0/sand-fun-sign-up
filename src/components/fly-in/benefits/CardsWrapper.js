import React from "react";
import Card from "./Card";
const benefits = [
  {
    img: "/images/flyin/benefits/1.svg",
    desc: "Free VIP ticket admission to the event for up to four (4) guests per flight ",
  },
  {
    img: "/images/flyin/benefits/2.svg",
    desc: "Free local bus transportation from and to your hotel in Riyadh City and the event venue ",
  },
  {
    img: "/images/flyin/benefits/3.svg",
    desc: "Invitation to Gala Night ",
  },
  {
    img: "/images/flyin/benefits/4.svg",
    desc: "Free Jet or Avgas fuel for the return trip *",
  },
  {
    img: "/images/flyin/benefits/5.svg",
    desc: "On-site passport control",
  },
];
const CardsWrapper = ({ arabic }) => {
  return (
    <div className="lg:pt-[4.29166666667vw] lg:pb-[5.72916666667vw] sm:py-[90px] py-[60px]  flex justify-center flex-wrap items-stretch lg:gap-[2.5vw] gap-[20px]">
      {benefits.map((benefit, index) => (
        <Card benefit={benefit} key={index} index={index} />
      ))}
    </div>
  );
};

export default CardsWrapper;
