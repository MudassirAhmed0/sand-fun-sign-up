import LinkBtn from "@/components/common/LinkBtn";
import HoverBorderGradient from "@/components/ui/hover-border-gradient";
import React from "react";
const Content = ({ arabic, setActivePreRegister }) => {
  return (
    <div className="Container1640">
      <div className="text-center mx-[auto] lg:w-[53.8541666667vw] w-full flex flex-col ">
        <h2 data-aos="fade-up" className="text64">
          {arabic ? "لوريم ايبسوم دولار سيت " : "Hangar Talks"}
        </h2>
        <p
          data-aos="fade-down"
          className={`${
            arabic ? "f500 lg:text21" : "f400 lg:text20"
          } lg:mt-[0.72916666666vw] sm:mt-[14px] mt-[14px]   text-[#1A1C1F] text-opacity-[0.7] mtext18]`}
        >
          {arabic
            ? "تيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكأليايت,سيت دور "
            : "Welcome to Sand and Fun’s SkyVenture in Riyadh, where tradition meets modernity. Witness top talents from around the world in live aerial demonstrations, showcasing skill, precision, and artistry. Experience breathtaking maneuvers, the pinnacle of human ingenuity, and the spirit of adventure. Get ready for thrills, excitement, and a vivid testament to our daring to soar. The sky is not the limit, but our playground. Welcome to the Airshow!"}
        </p>
        <div
          onClick={() => {
            setActivePreRegister(true);
          }}
          className="flex justify-center mt-[20px] lg:mt-[1.25vw] "
        >
          <LinkBtn
            thirdVarient
            text={arabic ? "لوريم ايبسوم دولار " : "Pre register now"}
            arabic={arabic}
            tag={"button"}
          />
        </div>
        {/* <div className="m-40 flex justify-center text-center">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <span>Aceternity UI</span>
          </HoverBorderGradient>
        </div> */}
      </div>
    </div>
  );
};

export default Content;
