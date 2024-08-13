import Image from "next/image";
import Link from "next/link";
import LinkBtn from "@/components/common/LinkBtn";
import Owner from "./Owner";
import PreRegisterPopup from "../../common/PreRegisterPopup";

const Hero = ({ arabic, className, setActivePreRegister, setExhibit }) => {
  const princeText = `<span class='lg:inline-block hidden'> hRH prince</span> <span class='lg:hidden'>hRH prince </span> prince`;
  return (
    <section id="homeSection">
      <div className="lg:h-[102.222222222vh] h-[202.790697674vw] sm:h-[98vh] relative flex lg:pb-[34.8148148148vh] sm:pb-[180px] pb-[36.7441860465vw] items-end justify-center ">
        <div className="atlwh_Full overflow-hidden">
          <div className="atlwh_Full">
            <img
              src="/images/home/hero/hero.jpg"
              className="atlwh_Full object-cover"
            />
            <video
              src="/videos/hero.mp4"
              // poster="/images/home/hero/hero.jpg"
              className="atlwh_Full object-cover "
              muted
              autoPlay
              loop
              playsInline
            ></video>
            <span className="atlwh_Full bg-[#000] opacity-[0.4]"></span>
          </div>
          <div className="atlwh_Full">
            {/* <span className="new_heroOverlay1 atlwh_Full lg:h-[71.875vw]"></span> */}
            <span className="new_heroOverlay2 atlwh_Full lg:h-[33.8020833333vw] sm:h-[75%] h-[673px] opacity-[0.7]"></span>
            <span className="new_heroOverlay3 atlwh_Full top-[unset] bottom-0 lg:h-[16.4583333333vw] sm:h-[25%] h-[210px] scale-y-[-1]"></span>
          </div>
        </div>
        <div className="lg:px-[7.29166666667vw] px-[10px] w-full  relative z-[2] text-white flex flex-wrap gap-[8.83720930233vw] lg:gap-x-[4.6875vw] items-center">
          <div
            className={`${
              arabic ? "lg:w-[42.4479166667vw]" : "lg:w-[55.625vw]"
            }  px-[12px] lg:px-[unset]`}
          >
            <h1
              id="heading"
              data-aos="fade-up"
              className={`${
                arabic ? "lg:text85" : "lg:text89"
              }  mtext38 uppercase f700`}
            >
              {arabic ? (
                "لوريم ايبسوم دولار سيت أميت"
              ) : (
                <>
                  Inspiring the <br /> next air venturer
                </>
              )}
            </h1>
            <p
              data-aos="fade-down"
              className={`${
                arabic ? "lg:mt-[0.625vw]" : "lg:mt-[1.35416666667vw]"
              } lg:text28 mtext21 f600  mt-[1.86046511628vw]`}
            >
              {arabic
                ? "لوريم ايبسوم دولار سيت أميت"
                : "19-23 Novembar 2024 , Al Thumamah airport Saudi Arabia"}
            </p>
            <div
              data-aos="fade"
              data-aos-delay="200"
              className={`${
                arabic ? "lg:mt-[4.44444444444vh]" : "lg:mt-[5vh]"
              } flex flex-wrap items-center lg:gap-[1.25vw] sm:gap-[18px] sm:mt-[24px] gap-[4.18604651163vw] mt-[5.58139534884vw]`}
            >
              <div
                onClick={() => {
                  setActivePreRegister(true);
                }}
              >
                <LinkBtn
                  text={arabic ? "لوريم ايبسوم دولار " : "Pre register now"}
                  arabic={arabic}
                  tag={"button"}
                  smallBtn
                />
              </div>
              <div
              // onClick={() => {
              //   setExhibit(true);
              // }}
              >
                <LinkBtn
                  text={arabic ? "لوريم ايبسوم " : "Exhibit & Sponsor"}
                  secondVarient
                  arabic={arabic}
                  // tag={"button"}
                  smallBtn
                  link={"/exhibit-sponsor"}
                />
              </div>
            </div>
          </div>
          <div
            className={`${
              arabic
                ? "lg:left-[5.26041666667vw]"
                : "lg:right-[5.26041666667vw]"
            } lg:absolute z-[2] relative lg:top-[-4.63541666667vw] flex flex-wrap gap-[10px] lg:justify-start sm:justify-center justify-between lg:w-[41.40625vw] w-full`}
          >
            {/* <Owner
              position={arabic ? "لوريم ايبسوم دولار سيت أميت" : "HRH Prince"}
              name={
                arabic
                  ? "لوريم ايبسوم دولار سيت أميت"
                  : "Faisal Bin Bandar Al Saud"
              }
              img="/images/home/hero/faisal.png"
            /> */}
            {/* <Owner
              position={arabic ? "لوريم ايبسوم دولار سيت أميت" : "HRH Prince"}
              name={
                arabic
                  ? "لوريم ايبسوم دولار سيت أميت"
                  : "Sultan Bin Salman Bin Abdulaziz"
              }
              img="/images/home/hero/sultan.png"
              classes={
                "relative mx-auto lg:lrf2 lg:bottom-0 lg:w-[21.09375vw] lg:h-[24.9479166667vw]"
              }
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
