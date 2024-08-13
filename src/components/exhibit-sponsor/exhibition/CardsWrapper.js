import React from "react";
import Card from "./Card";

const CardsWrapper = ({ arabic }) => {
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
    <div
      data-aos="fade"
      className="lg:mt-[4.32291666667vw] lg:mb-[4.0625vw] my-[64px] flex justify-center lg:justify-start items-center flex-wrap lg:gap-[2.55208333333vw] gap-[40px] w-full"
    >
      {exhibitions.map((exhibition, index) => (
        <>
          <Card
            exhibition={exhibition}
            arabic={arabic}
            key={index}
            index={index}
          />
          {exhibitions?.length - 1 !== index && (
            <span className="hidden lg:block exhibition_Divider2 lg:min-w-[0.10416666666vw] lg:w-[0.10416666666vw] lg:h-[21.1979166667vw]"></span>
          )}
        </>
      ))}
    </div>
  );
};

export default CardsWrapper;
