import React from "react";
import { SponsorsCard } from "./SponsorsCard";
const sponsors = [
  {
    heading: "Strategic partner",
    small: true,
    images: [
      {
        img: "/images/home/sponsors/1.jpg"
      }
    ]
  },
  {
    heading: "Platinum sponsor",
    small: true,
    images: [
      {
        img: "/images/home/sponsors/1.jpg"
      }
    ]
  },
  {
    heading: "Diamond sponsor",
    small: true,
    images: [
      {
        img: "/images/home/sponsors/1.jpg"
      }
    ]
  },
  {
    heading: "Media sponsor",
    small: true,
    images: [
      {
        img: "/images/home/sponsors/1.jpg"
      }
    ]
  },
  {
    heading: "Silver sponsor",
    big: true,
    images: [
      {
        img: "/images/home/sponsors/1.jpg"
      },
      {
        img: "/images/home/sponsors/1.jpg"
      },
      {
        img: "/images/home/sponsors/1.jpg"
      },
      {
        img: "/images/home/sponsors/1.jpg"
      },
      {
        img: "/images/home/sponsors/1.jpg"
      },
      {
        img: "/images/home/sponsors/1.jpg"
      },
      {
        img: "/images/home/sponsors/1.jpg"
      }
    ]
  },
  {
    heading: "Silver sponsor",
    medium: true,
    images: [
      {
        img: "/images/home/sponsors/1.jpg"
      },

      {
        img: "/images/home/sponsors/1.jpg"
      }
    ]
  },
  {
    heading: "Success partners",
    images: [
      {
        img: "/images/home/sponsors/1.jpg"
      },

      {
        img: "/images/home/sponsors/1.jpg"
      },
      {
        img: "/images/home/sponsors/1.jpg"
      },
      {
        img: "/images/home/sponsors/1.jpg"
      },
      {
        img: "/images/home/sponsors/1.jpg"
      },
      {
        img: "/images/home/sponsors/1.jpg"
      },
      {
        img: "/images/home/sponsors/1.jpg"
      },
      {
        img: "/images/home/sponsors/1.jpg"
      },
      {
        img: "/images/home/sponsors/1.jpg"
      },
      {
        img: "/images/home/sponsors/1.jpg"
      },
      {
        img: "/images/home/sponsors/1.jpg"
      }
    ]
  }
];
const Sponsors = ({ arabic }) => {
  return (
    <section id="SponsorsSection">
      <div className="Container1640 lg:pb-[5.41666666667vw] sm:pb-[80px] pb-[54px]">
        <div className="flex items-center flex-col  text-center lg:w-[53.0208333333vw] w-full mx-auto">
          <span className="text-[#F62D17] mtext16 text20 font-[600]">
            Sponsors & Partners
          </span>
          <h2 data-aos="fade-up" className="text64 text-[#000000]">
            {arabic
              ? "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت"
              : "In order to be the best we must partner with the best"}
          </h2>
        </div>
        <div
          data-aos="fade"
          className="lg:mt-[3.33333333333vw] sm:mt-[40px] mt-[28px] flex flex-wrap justify-center items-center lg:gap-x-[2.08333333333vw] lg:gap-y-[3.33333333333vw] sm:gap-x-[20px] sm:gap-y-[30px] gap-x-[16px] gap-y-[27px]"
        >
          {sponsors.map((sponsor, index) => (
            <SponsorsCard
              key={index}
              small={sponsor.small}
              medium={sponsor.medium}
              big={sponsor.big}
              heading={sponsor.heading}
              images={sponsor.images}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
