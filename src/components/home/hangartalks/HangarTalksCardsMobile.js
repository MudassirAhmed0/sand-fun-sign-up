import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperButtons from "@/components/common/SwiperButtons";
const hangarTalks = [
  {
    slide: [
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
    ],
  },
  {
    slide: [
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
    ],
  },
  {
    slide: [
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
    ],
  },
  {
    slide: [
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
    ],
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
const HangarTalksCardsMobile = ({ arabic, isMobile }) => {
  const [swiperGap, setSwiperGap] = useState(0);
  useEffect(() => {
    setSwiperGap(
      window.innerWidth > 1024 ? (window.innerWidth / 100) * 1.5625 : 16
    );
  }, []);
  return (
    <div
      data-aos="fade"
      className="lg:mt-[4.16666666667vw] sm:mt-[42px] mt-[32px] ml_Auto lg:mx-[auto] lg:w-[85.4166666667vw] w-[94.886%] "
    >
      <Swiper
        spaceBetween={swiperGap}
        className="w-full lg:pb-[4.89583333333vw] sm:pb-[76px] pb-[56px]"
        slidesPerView={"auto"}
        navigation={true}
        modules={[Navigation]}
      >
        {hangarTalks?.map((hangarTalk, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col gap-y-[16px] relative lg:w-[20.1041666667vw] sm:w-[60.796%] w-[79.796%] overflow-hidden border10"
          >
            {hangarTalk.slide?.map((cards, index) => (
              <div
                key={index}
                className={`  relative w-full lg:h-[21.875vw] sm:h-[60.142vw] h-[78.142vw] border20 overflow-hidden flex items-end justify-center lg:pb-[0.9375vw] pb-[22px]`}
              >
                <span className="atlwh_Full hangerTalks_CardOverlay pointer-events-none z-[1]"></span>
                <Image
                  fill
                  alt="card-img"
                  className="object-cover border20"
                  src={cards.img}
                />
                <div className="w-[90%] relative z-[2] flex flex-col lg:items-center lg:justify-center lg:text-center text-white">
                  <h6 className="lg:text22 mtext20 f600">{cards.name}</h6>
                  <span className="lg:text20 mtext18 lg:mt-[-0.26041666666vw]">
                    {cards.position}
                  </span>
                </div>
              </div>
            ))}
          </SwiperSlide>
        ))}

        {isMobile
          ? hangarTalks.length > 1 && <SwiperButtons />
          : hangarTalks.length > 3 && <SwiperButtons />}
      </Swiper>
    </div>
  );
};

export default HangarTalksCardsMobile;
