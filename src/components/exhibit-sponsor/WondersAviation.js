import React from "react";
import Image from "next/image";
const abouts = [
  {
    heading: "Be where Aviation Business Take Flight",
    desc: `<p>This premier event is the region's top destination for aviation enthusiasts . And will receive extensive media coverage by many well known Media Channels, personalities, and influencers.</p><p> Join us in inspiring the youth and engaging people of all ages in the wonders of flight..</p>`,
    img: "/images/icons/exhibitions/1.svg"
  },
  {
    heading: "Aviation in Saudi Arabia",
    desc: `<p>Saudi Arabia's aviation industry is rapidly growing, with state-of -the -art airports and a fleet of cutting cutting-edge aircraft serving both domestic and international routes.</p><p> The national carrier, Saudia, and other leading airlines offer a wide range of domestic and international flights, connecting Saudi Arabia to key global hubs.</p>`,
    img: "/images/icons/exhibitions/2.svg"
  },
  {
    heading: "SAND & FUN Experience",
    desc: `<p>Get ready for a top aviation event featuring cutting edge products and services, the latest aircraft, and advancements in aviation technology.</p><p> Enjoy a thrilling show by the Saudi Air Forces and meet aviation clubs from around the world, including special benefits are available for international visitors.</p>`,
    img: "/images/icons/exhibitions/3.svg"
  }
];
const WondersAviation = () => {
  return (
    <section className="bg-[#1A1C1F] py220">
      <div className="Container1640 flex flex-col lg:gap-y-[4vw] sm:gap-y-[60px] gap-y-[40px]">
        {abouts.map((about, index) => (
          <div
            key={index}
            className={`${
              index % 2 === 0 ? " lg:flex-row " : " lg:flex-row-reverse "
            } flex flex-col-reverse flex-wrap lg:gap-[2.55208333333vw] sm:gap-[40px] gap-[30px] justify-between`}
          >
            <div className="lg:w-[51.3541666667vw] text-[#FFFFFF] flex flex-col ">
              <div
                data-aos-dealy="200"
                data-aos="fade"
                className="relative lg:size-[3.64583333333vw] sm:size-[50px] size-[30px]"
              >
                <Image
                  fill
                  alt="heading-img"
                  src="/images/icons/heading-img.svg"
                />
              </div>
              <h2
                data-aos="fade-up"
                className="text64 lg:mt-[0.41666666666vw] mt-[8px]"
              >
                {about.heading}
              </h2>
              <div
                data-aos="fade-down"
                dangerouslySetInnerHTML={{ __html: about.desc }}
                className="lg:text20 mtext18  text-white text-opacity-[0.7] flex flex-col lg:gap-y-[1.5625vw] gap-y-[26px] mt48 "
              ></div>
            </div>
            <div
              data-aos="fade"
              data-aos-delay="400"
              className="relative lg:w-[31.0416666667vw] lg:h-[25.9895833333vw] w-full sm:h-[350px]   flex items-center justify-center"
            >
              <div className="lg:w-[12.5vw] lg:h-[12.5vw] w-[200px] h-[200px] relative">
                <Image fill alt="banner-img" src={about.img} />
              </div>
              {/* <span className="w-full h-full bg-[#D9D9D9] block"></span> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WondersAviation;
