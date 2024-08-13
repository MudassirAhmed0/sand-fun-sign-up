import Image from "next/image";
import React from "react";
const hangarTalks = [
  {
    name: "Name of speaker",
    position: "Position",
    img: "/images/home/hanger-talks/1.jpg",
  },
  {
    name: "Name of speaker",
    position: "Position",
    img: "/images/home/hanger-talks/2.jpg",
  },
  {
    name: "Name of speaker",
    position: "Position",
    img: "/images/home/hanger-talks/3.jpg",
  },
  {
    name: "Name of speaker",
    position: "Position",
    img: "/images/home/hanger-talks/4.jpg",
  },
  {
    name: "Name of speaker",
    position: "Position",
    img: "/images/home/hanger-talks/5.jpg",
  },
  {
    name: "Name of speaker",
    position: "Position",
    img: "/images/home/hanger-talks/6.jpg",
  },
  {
    name: "Name of speaker",
    position: "Position",
    img: "/images/home/hanger-talks/7.jpg",
  },
  {
    name: "Name of speaker",
    position: "Position",
    img: "/images/home/hanger-talks/8.jpg",
  },
  {
    name: "Name of speaker",
    position: "Position",
    img: "/images/home/hanger-talks/1.jpg",
  },
  {
    name: "Name of speaker",
    position: "Position",
    img: "/images/home/hanger-talks/2.jpg",
  },
  {
    name: "Name of speaker",
    position: "Position",
    img: "/images/home/hanger-talks/3.jpg",
  },
  {
    name: "Name of speaker",
    position: "Position",
    img: "/images/home/hanger-talks/4.jpg",
  },
  {
    name: "Name of speaker",
    position: "Position",
    img: "/images/home/hanger-talks/5.jpg",
  },
  {
    name: "Name of speaker",
    position: "Position",
    img: "/images/home/hanger-talks/6.jpg",
  },
  {
    name: "Name of speaker",
    position: "Position",
    img: "/images/home/hanger-talks/7.jpg",
  },
  {
    name: "Name of speaker",
    position: "Position",
    img: "/images/home/hanger-talks/8.jpg",
  },
  {
    name: "Name of speaker",
    position: "Position",
    img: "/images/home/hanger-talks/1.jpg",
  },
  {
    name: "Name of speaker",
    position: "Position",
    img: "/images/home/hanger-talks/2.jpg",
  },
  {
    name: "Name of speaker",
    position: "Position",
    img: "/images/home/hanger-talks/3.jpg",
  },
  {
    name: "Name of speaker",
    position: "Position",
    img: "/images/home/hanger-talks/4.jpg",
  },
];
const HangarTalksCardsDesktop = ({ arabic }) => {
  return (
    <div
      data-aos="fade"
      className="lg:mt-[8.85416666667vw] sm:mt-[42px] mt-[32px] ml_Auto lg:mx-[auto] lg:w-[85.4166666667vw] w-[89.769%] flex flex-wrap lg:gap-[1.66666666667vw] gap-[16px]"
    >
      {hangarTalks.map((hangarTalk, index) => (
        <div
          key={index}
          className={`${
            index % 2 !== 0 ? "lg:mt-[-4.6875vw]" : ""
          } cardAniamte2 relative lg:w-[20.1041666667vw] lg:h-[21.875vw] border20 overflow-hidden flex items-end justify-center lg:pb-[0.9375vw] pb-[22px]`}
        >
          <span className="atlwh_Full hangerTalks_CardOverlay pointer-events-none z-[1]"></span>
          <Image
            fill
            alt="card-img"
            className="object-cover "
            src={hangarTalk.img}
          />
          <div className="w-[90%] relative z-[2] flex flex-col lg:items-center lg:justify-center lg:text-center text-white">
            <h6 className="lg:text22 mtext20 f600">{hangarTalk.name}</h6>
            <span className="lg:text20 mtext18 lg:mt-[-0.26041666666vw]">
              {hangarTalk.position}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HangarTalksCardsDesktop;
