"use client";
import React, { useEffect, useState } from "react";
import DesktopSkySwiper from "./DesktopSkySwiper";
import MobSkySwiper from "./MobSkySwiper";

const Activities = ({ arabic }) => {
  const [isMobile, setIsMobile] = useState();
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Call the function initially to set the correct state
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className=" relative z-[3]  "></div>
      <section id="skyVenturesSection">
        <div className="lg:pb-[11.25vw]  lg:pt-[11.4583333333vw] py-[120px] bg-[#fff]">
          <div className="Container1640 lg:text-start text-center flex justify-center lg:justify-between items-center flex-wrap gap-[14px]">
            <h2 data-aos="fade-up" className="text64 text-[#000000]">
              {arabic ? "لوريم ايبسوم " : "Sky Ventures"}
            </h2>
            <p
              data-aos="fade-down"
              className={`${
                arabic ? "f500 lg:text21" : "f400 lg:text20"
              } lg:w-[53.8541666667vw] text-[#1A1C1F] text-opacity-[0.7] mtext18]`}
            >
              {arabic
                ? "تيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكأليايت,سيت دور  تيتور أدايبا يسكينج أليايت,سيت "
                : "Welcome to Sand and Fun’s SkyVenture in Riyadh, where tradition meets modernity. Witness top talents from around the world in live aerial demonstrations, showcasing skill, precision, and artistry. Experience breathtaking maneuvers, the pinnacle of human ingenuity, and the spirit of adventure. Get ready for thrills, excitement, and a vivid testament to our daring to soar. The sky is not the limit, but our playground. Welcome to the Airshow!"}
            </p>
          </div>
          <div
            data-aos="fade"
            className="lg:mt-[4.16666666667vw] sm:mt-[42px] mt-[32px] ml_Auto lg:mx-[auto] lg:w-[85.625vw] w-[94.886%] "
          >
            {isMobile ? (
              <MobSkySwiper arabic={arabic} isMobile={isMobile} />
            ) : (
              <DesktopSkySwiper arabic={arabic} isMobile={isMobile} />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Activities;
