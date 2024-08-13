import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="bg-[#1A1C1F]">
      <div className="mx-[auto] sm:w-[90%] w-[89.769%] lg:w-full lg:mx-[unset] lg:pt-[8.54166666667vw] lg:pb-[12.5vw] py220 flex flex-wrap justify-start items-center lg:gap-[5.20833333333vw] sm:gap-[40px] gap-[30px]">
        <div
          data-aos="fade"
          className="lg:w-[45.8333333333vw] lg:h-[40.5208333333vw] w-full flex justify-between items-end"
        >
          <div className="hidden lg:block relative overflow-hidden lg:h-[34.5833333333vw] lg:w-[10.3645833333vw] w-full sm:h-[350px] h-[300px] rounded-e-[1.04166666667vw]">
            <Image
              fill
              alt="about"
              src="/images/flyin/about.jpeg"
              className="object-cover rounded-e-[1.04166666667vw] "
              style={{ objectPosition: "-2.60416666667vw" }}
            />
          </div>
          <div className="relative lg:h-full lg:w-[33.3854166667vw] w-full sm:h-[450px] h-[300px] border20">
            <Image
              fill
              alt="about"
              src="/images/flyin/about.jpeg"
              className="object-cover border20 lg:object-[-15.8854166667vw]"
            />
          </div>
        </div>
        <div data-aos="fade-down" className="lg:w-[41.6666666667vw]">
          <p className="lg:text32 mtext20 text-[#fff] f500 capitalize">
            The Fly-In Program at Sand & Fun Event is designed to attract
            international visitors, inviting them to fly their airplanes to the
            show. This unique program offers numerous benefits, including
            parking, exclusive VIP zone invitations, and logistics and customs
            assistance. Participants will also enjoy networking opportunities
            with fellow aviation enthusiasts and industry professionals, making
            their experience seamless and memorable. Join us for an
            extraordinary aviation adventure that combines convenience,
            exclusivity, and a warm welcome to the heart of the aviation
            community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
