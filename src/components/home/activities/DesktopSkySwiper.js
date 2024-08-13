"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperButtons from "@/components/common/SwiperButtons";
import Image from "next/image";

const DesktopSkySwiper = ({ isMobile, arabic }) => {
  const activities = [
    {
      slides: [
        {
          img: "/images/home/activities/1.jpg",
          heading: arabic ? "لوريم ايبسوم دولار سيت " : "Scandinavian Airshow",
          desc: arabic
            ? "لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت "
            : "Precision Flight Maneuvers: Aircraft perform programmed maneuvers with precision and harmony, interspersed with individual stunts, showcasing professionalism and accuracal stunts, showcasing professionalism and accuracy."
        },
        {
          img: "/images/home/activities/Airborne Pyrotechnics 6.jpeg",
          heading: arabic ? "لوريم ايبسوم دولار سيت " : "Airborne Pyrotechnics",
          desc: arabic
            ? "لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت "
            : "Lorem ipsum dolor sit amet consectetur. Ut rutrum eget diam vitae praesent arcu scelerisque lacus augue. Dui quisque blandit dis adipiscing nec vel malesuada tellus. Sociis mus sed sit consectetur."
        },
        {
          img: "/images/home/activities/3.jpg",
          heading: arabic ? "لوريم ايبسوم دولار سيت " : "SKYTEXTER",
          desc: arabic
            ? "لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت "
            : "Lorem ipsum dolor sit amet consectetur. Ut rutrum eget diam vitae praesent arcu scelerisque lacus augue. Dui quisque blandit dis adipiscing nec vel malesuada tellus. Sociis mus sed sit consectetur."
        },
        {
          img: "/images/home/activities/Artur Kielak 2.jpeg",
          heading: arabic ? "لوريم ايبسوم دولار سيت " : "Artur Kielak FULL FORCE AEROBATICS",
          desc: arabic
            ? "لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت "
            : "Lorem ipsum dolor sit amet consectetur. Ut rutrum eget diam vitae praesent arcu scelerisque lacus augue. Dui quisque blandit dis adipiscing nec vel malesuada tellus. Sociis mus sed sit consectetur."
        },
        {
          img: "/images/home/activities/5.jpg",
          heading: arabic ? "لوريم ايبسوم دولار سيت " : "Sky Magic",
          desc: arabic
            ? "لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت "
            : "Lorem ipsum dolor sit amet consectetur. Ut rutrum eget diam vitae praesent arcu scelerisque lacus augue. Dui quisque blandit dis adipiscing nec vel malesuada tellus. Sociis mus sed sit consectetur."
        },
        {
          img: "/images/home/activities/6.jpg",
          heading: arabic ? "لوريم ايبسوم دولار سيت " : "Cástor Fantoba",
          desc: arabic
            ? "لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت "
            : "Lorem ipsum dolor sit amet consectetur. Ut rutrum eget diam vitae praesent arcu scelerisque lacus augue. Dui quisque blandit dis adipiscing nec vel malesuada tellus. Sociis mus sed sit consectetur."
        },
        {
          img: "/images/home/activities/Polish Sparks 1.JPG",
          heading: arabic ? "لوريم ايبسوم دولار سيت " : "Polish Sparks ",
          desc: arabic
            ? "لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت "
            : "Lorem ipsum dolor sit amet consectetur. Ut rutrum eget diam vitae praesent arcu scelerisque lacus augue. Dui quisque blandit dis adipiscing nec vel malesuada tellus. Sociis mus sed sit consectetur."
        }
      ]
    },
    {
      slides: [
        {
          img: "/images/home/activities/Bo105.pl 5.jpg",
          heading: arabic ? "لوريم ايبسوم دولار سيت " : "Bo105.pl",
          desc: arabic
            ? "لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت "
            : "Lorem ipsum dolor sit amet consectetur. Ut rutrum eget diam vitae praesent arcu scelerisque lacus augue. Dui quisque blandit dis adipiscing nec vel malesuada tellus. Sociis mus sed sit consectetur."
        },
        {
          img: "/images/home/activities/BushCat Demo Team 2.jpeg",
          heading: arabic ? "لوريم ايبسوم دولار سيت " : "BushCat Demo Team",
          desc: arabic
            ? "لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت "
            : "Precision Flight Maneuvers: Aircraft perform programmed maneuvers with precision and harmony, interspersed with individual stunts, showcasing professionalism and accuracy."
        },

        {
          img: "/images/home/activities/10.jpg",
          heading: arabic ? "لوريم ايبسوم دولار سيت " : "And more to come",
          desc: arabic
            ? "لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت لوريم ايبسوم دولار سيت "
            : "Lorem ipsum dolor sit amet consectetur. Ut rutrum eget diam vitae praesent arcu scelerisque lacus augue. Dui quisque blandit dis adipiscing nec vel malesuada tellus. Sociis mus sed sit consectetur."
        }
      ]
    }
  ];
  const [cardActive, setCardActive] = useState(0);
  const [swiperGap, setSwiperGap] = useState(0);
  const handleOver = (index) => {
    !isMobile && setCardActive(index);
  };
  const handleOut = (index) => {
    !isMobile && setCardActive(index);
  };
  useEffect(() => {
    setSwiperGap(
      window.innerWidth > 1024 ? (window.innerWidth / 100) * 1.5625 : 16
    );
  }, []);
  return (
    <Swiper
      spaceBetween={swiperGap}
      className="w-full lg:pb-[5.41666666667vw] sm:pb-[76px] pb-[56px]"
      slidesPerView={"auto"}
      navigation={true}
      modules={[Navigation]}
    >
      {activities?.map((activitiy, index) => (
        <SwiperSlide
          key={index}
          className="flex lg:gap-[1.66666666667vw] relative lg:w-full sm:w-[60.796%] w-[79.796%] overflow-hidden border10"
        >
          {activitiy.slides.map((slide, index) => (
            <div
              key={index}
              onMouseOver={() => {
                handleOver(index);
              }}
              onMouseEnter={() => {
                handleOut(index);
              }}
              className={`${cardActive === index ? "active" : ""
                } activityCard overflow-hidden lg:w-[6.77083333333vw] cursor-pointer  lg:h-[34.375vw] border60 sm:h-[50vw] h-[116vw] relative flex items-end justify-center  `}
            >
              <div className="atlwh_Full pointer-events-none">
                <span className="card-overlay atlwh_Full"></span>
                {/* <span className="activities-overlay atlwh_Full bottom-0 top-[unset] lg:h-[25.8854166667vw] h-[40%]"></span> */}
                <Image
                  fill
                  src={slide.img}
                  alt="activities"
                  className={`border60 object-cover activityImg transition-all duration-[300ms] z-[-1] ${arabic
                    ? ""
                    : index == activities?.length - 1
                      ? " lg:object-[-9vw]  "
                      : ""
                    }`}
                />
              </div>
              <div className="content relative z-[2] w-[89.630%] text-white ">
                <h4 className="capitalize lg:text28 sm:mtext28 mtext24 f700" >
                  {slide.heading} 
                </h4>
                {/* <p className="lg:text20 sm:mtext18 mtext17 lg:mt-[0.41666666666vw] mt-[8px] lg:min-h-[4.6875vw]">
                  {slide.desc}
                </p> */}
              </div>
            </div>
          ))}
        </SwiperSlide>
      ))}

      {isMobile
        ? activities.length > 1 && <SwiperButtons />
        : activities.length > 1 && (
          <SwiperButtons setCardActive={setCardActive} />
        )}
    </Swiper>
  );
};

export default DesktopSkySwiper;
