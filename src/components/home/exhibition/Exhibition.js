import LinkBtn from "@/components/common/LinkBtn";
import Image from "next/image";
import React from "react";

const Exhibition = ({ arabic, setExhibit }) => {
  const exhibitions = [
    {
      img: "/images/home/exhibition/1.jpg",
      heading: arabic ? "لوريم ايبسوم دولار سيت " : "Commercial aviation",
    },
    {
      img: "/images/home/exhibition/2.jpg",
      heading: arabic ? "لوريم ايبسوم دولار سيت " : "General aviation",
    },
    {
      img: "/images/home/exhibition/3.jpg",
      heading: arabic ? "لوريم ايبسوم دولار سيت " : "Luxury and consumer goods",
    },
    {
      img: "/images/home/exhibition/4.jpg",
      heading: arabic ? "لوريم ايبسوم دولار سيت " : "Edutainment",
    },
  ];
  return (
    <section id="exhibitionSection" className="bg-[#1A1C1F]">
      <div className="lg:py-[9.375vw] py-[80px] Container1640 flex flex-col items-center">
        <div className="text-center mx-[auto] lg:w-[53.8541666667vw] w-full flex flex-col ">
          <h2 data-aos="fade-up" className="text64 text-white">
            {arabic ? "لوريم ايبسوم دولار سيت " : "The Exhibition"}
          </h2>
          <p
            data-aos="fade-down"
            className={`${
              arabic ? "f500 lg:text21" : "f400 lg:text20"
            } lg:mt-[0.72916666666vw] sm:mt-[14px] mt-[14px]   text-white text-opacity-[0.7] mtext18`}
          >
            {arabic
              ? "تيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكأليايت,سيت دور "
              : "Sand and Fun’s exhibition and static display provide an unmatched opportunity for aviation companies to showcase cutting-edge products, technology, and services. Designed for local and regional enterprises, it fosters meaningful interactions with industry partners and VVIPs. This event is an invaluable  hub for networking, discovery, and growth."}
          </p>
        </div>
        <div
          data-aos="fade"
          className="lg:mt-[5.625vw] lg:mb-[2.8125vw] my-[64px] flex justify-center lg:justify-start items-center flex-wrap lg:gap-[1.56458333333vw] gap-[40px] w-full"
        >
          {exhibitions.map((exhibition, index) => (
            <>
              <div
                key={index}
                className="lg:w-[18.5833333333vw] sm:w-[80%] w-full"
              >
                <div className="relative w-full lg:h-[13.5vw] sm:h-[40vw] h-[55.816vw] border20 overflow-hidden">
                  <Image
                    src={exhibition.img}
                    fill
                    alt="exhibition-img"
                    className="border20 object-cover"
                  />
                </div>
                <h6
                  className={`${
                    arabic ? "f700" : "f600"
                  } lg:text28 mtext20 text-center text-white lg:mt-[1.07638888889vw] mt-[14px]`}
                >
                  {exhibition.heading}
                </h6>
              </div>
              {exhibitions?.length - 1 !== index && (
                <span className="hidden lg:block exhibition_Divider lg:min-w-[0.10416666666vw] lg:w-[0.10416666666vw] lg:h-[21.1979166667vw]"></span>
              )}
            </>
          ))}
        </div>
        <div data-aos="fade" onClick={() => setExhibit(true)}>
          <LinkBtn
            text={arabic ? "لوريم ايبسوم " : "Exhibit Now"}
            secondVarient
            tag={"button"}
          />
        </div>
      </div>
    </section>
  );
};

export default Exhibition;
