import React from "react";
import Image from "next/image";

const About = ({ arabic }) => {
  return (
    <section
      id="aboutSection"
      // className="bg-[#1A1C1F] flex lg:justify-start justify-center"
      className="bg-[#1A1C1F]  text-white"
    >
      <div className="Container1640 gap-y-[32px] sm:flex-row flex-col gap-x-[2.34375vw]  flex justify-between py-[60px]  lg:py-[11.4583333333vw]">
        <div className="sm:w-[42.5vw] sm:min-w-[42.5vw]">
          <h4 data-aos="fade-up" className="text64   ">
            Vision 2030
          </h4>
          <div
            data-aos="fade-down"
            className={`${
              arabic ? "f500 lg:text21" : "f400 lg:text20"
            } mt48 flex flex-col lg:gap-y-[1.5625vw] gap-y-[26px] text-white text-opacity-[0.7] mtext18`}
          >
            <p>
              Under the leadership of the Custodian of the Two Holy Mosques,
              King Salman bin Abdulaziz Al Saud, and His Royal Highness Prince
              Mohammed bin Salman bin Abdulaziz, Crown Prince and Prime
              Minister, Saudi Arabia embarked on a journey toward a brighter
              future with the launch of Vision 2030 in 2016. This ambitious
              roadmap leverages the Kingdom's unique strengths—its pivotal role
              in the Arab and Islamic worlds, its strong investment
              capabilities, and its strategic geographical position. Vision 2030
              is a blueprint that is diversifying the economy, empowering
              citizens, creating a vibrant environment for both local and
              international investors, and establishing Saudi Arabia as a global
              leader.
            </p>
            <p>
              Based on these ambitions, Sand and Fun is striving to become the
              premier general aviation show in the region, aiming to attract a
              wide audience and establish itself as a leading event in the
              industry.
            </p>
          </div>
        </div>
        <div className="flex sm:justify-start justify-between sm:gap-x-[1.77083333333vw] items-start">
          <img
            src="/images/home/about/vision1.png"
            className="w-[47%] sm:w-[20.8333333333vw]"
          />
          <img
            style={{ marginTop: "1.25vw" }}
            src="/images/home/about/vision2.png"
            className=" w-[47%] sm:w-[20.8333333333vw]  sm:mt-[1.35vw]"
          />
        </div>
      </div>
      <div className="Container1640 gap-y-[32px] sm:flex-row flex-col-reverse flex justify-center items-center gap-x-[4.16666666667vw] pb220">
        <div className="flex flex-col items-center text-center">
          <img
            src="/images/home/about/vision3.png"
            className="w-[60%] sm:w-[21.5625vw]"
          />
          <span className="text16 lg:text24">
            HRH Prince Sultan Bin Salman Bin Abdulaziz
          </span>
          <span className="mtext14 lg:text21 opacity-[0.8] mt-[12px] sm:mt-[1.2vw]">
            Founder & Chairman of the Saudi Aviation Club
          </span>
        </div>
        <div className="sm:w-[42.6666666667vw]">
          <h4 data-aos="fade-up" className="text64   ">
            Welcome to the sixth annual Sand & Fun
          </h4>
          <div
            data-aos="fade-down"
            className={`${
              arabic ? "f500 lg:text21" : "f400 lg:text20"
            } mt48 flex flex-col lg:gap-y-[1.5625vw] gap-y-[26px] text-white text-opacity-[0.7] mtext18`}
          >
            <p>
              Saudi General Aviation Airshow at Al-Thumama Airport, Riyadh!
              Organized by the Saudi Aviation Club, this premier event is the
              region's top destination for aviation enthusiasts.
            </p>
            <p>
              Experience thrilling activities, specialized exhibitions, and a
              celebration of aviation culture and sciences. Join us in inspiring
              the youth and engaging people of all ages in the wonders of
              flight.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="lg:pt-[14.4791666667vw] lg:pb-[unset] sm:py-[120px] pt-[120px] pb-[86px] relative lg:mb-[-5.67708333333vw] lg:w-[92.9166666667vw] sm:w-[90%] w-[89.769%] flex flex-wrap items-center sm:gap-y-[30px] gap-y-[24px] lg:gap-x-[5.20833333333vw]">
        <div
          data-aos="fade"
          data-aos-delay="300"
          className="flex justify-end relative w-full h-[84.884vw] lg:w-[45.8854166667vw] lg:h-[40.5208333333vw]"
        >
          <div className="relative lg:w-[33.3854166667vw] w-full h-full">
            <Image
              fill
              src="/images/home/about/banner.jpg"
              alt="about"
              className="object-cover border20"
            />
          </div>
          <div className="absolute lrf1 bottom-0 lg:w-[10.3645833333vw] lg:h-[34.5833333333vw]">
            <Image
              fill
              src="/images/home/about/banner.jpg"
              alt="about"
              className={`lg:rounded-e-[1.04166666667vw] rounded-e-[20px] object-cover object-[-6.25vw]`}
            />
          </div>
        </div>
        <div className="lg:w-[41.6666666667vw] text-white">
          <h2 data-aos="fade-up" className="text64 lg:w-[unset] w-[80%]">
            {arabic
              ? "لوريم ايبسوم دولار سيت "
              : "Welcome to the sixth annual Sand & Fun"}
          </h2>
          <div
            data-aos="fade-down"
            className={`${
              arabic ? "f500 lg:text21" : "f400 lg:text20"
            } mt48 flex flex-col lg:gap-y-[1.5625vw] gap-y-[26px] text-white text-opacity-[0.7] mtext18]`}
          >
            <p>
              {arabic
                ? "تيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكأليايت,سيت دور "
                : "General Aviation Airshow at Al-Thumama Airport, Riyadh! Organized by the Saudi Aviation Club, this premier event is the region's top destination for aviation enthusiasts. "}
            </p>
            <p>
              {arabic
                ? "دايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكأليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوري"
                : "Experience thrilling activities, specialized exhibitions, and a celebration of aviation culture and sciences. Join us in inspiring the youth and engaging people of all ages in the wonders of flight."}
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default About;
