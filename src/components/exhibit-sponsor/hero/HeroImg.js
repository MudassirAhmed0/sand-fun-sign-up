import React from "react";
import Image from "next/image";

const HeroImg = () => {
  return (
    <div className="atlwh_Full z-[-1]">
      <Image
        fill
        alt="hero"
        src="/images/exhibit-sponsor/hero.jpg"
        className="object-cover rotateHoja"
      />
    </div>
  );
};

export default HeroImg;
