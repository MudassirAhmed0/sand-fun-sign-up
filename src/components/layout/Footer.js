import Image from "next/image";
import Link from "next/link";
import React from "react";
const socialHandles = [
  // {
  //   img: "/images/icons/social/fb.svg",
  //   link: "https://www.facebook.com/",
  //   alt: "fb"
  // },

  {
    img: "/images/icons/social/twitter.svg",
    link: "https://x.com/aviationclub_sa?lang=en",
    alt: "twitter"
  },
  {
    img: "/images/icons/social/linkedin.svg",
    link: "https://www.linkedin.com/company/saudi-aviation-club",
    alt: "linkedin"
  },
  {
    img: "/images/icons/social/insta.svg",
    link: "https://www.instagram.com/aviationclub_sa/?hl=en",
    alt: "insta"
  },
  {
    img: "/images/icons/social/youtube.svg",
    link: "https://www.youtube.com/channel/UCdCzuR5LRzfFocyAFC72IjQ/videos",
    alt: "youtube"
  }
];
const Footer = ({ arabic }) => {
  return (
    <footer className="bg-[#1A1C1F] z-[2] relative">
      <div className="mx-[auto] lg:w-[85.4166666667vw] sm:w-[90%] w-full">
        <div className="flex flex-col lg:flex-row gap-[32px] justify-between items-center lg:items-end lg:py-[1.5625vw] py-[25px] border-b border-[#FFFFFF33]">
          <div className="flex items-center  ">
            <div className="pr-[20px] mr-[20px] lg:pr-[2.5vw] lg:mr-[2.5vw]  relative">
              <span className="  absolute w-[1.5px] h-[75%] bg-[#fff] right-0 top-[50%] transform translate-y-[-50%]"></span>
              <Link
                href="/#"
                className="relative block lg:w-[6.61458333333vw] lg:h-[5.46875vw] w-[110px] sm:h-[77px] h-[80px]"
              >
                <Image fill src="/images/icons/footer-logo.svg" alt="logo" />
              </Link>
            </div>
            <div className="relative flex flex-col items-center lg:flex-row lg:items-center">
              <span className="text-white text-[12px] lg:text16 absolute top-[-16px] lg:top-[-1vw] font-[600]">
                Executed by:
              </span>
              <Link
                href="https://www.nexus.llc/"
                className=" lg:float-left lg:mr-[2vw]"
                target="_blank"
              >
                <img
                  src="/images/icons/nexus-logo.svg"
                  alt="Nexus Logo"
                  className="  w-[125px] lg:w-[10vw]"
                />
              </Link>
              <img
                src="/images/icons/aa.png"
                alt="Nexus Logo"
                className="w-[170px] lg:w-[14vw] float-right"
              />
            </div>
          </div>
          <div className="flex lg:gap-x-[1.14583333333vw] sm:gap-x-[20px] gap-x-[15px] items-center">
            {socialHandles.map((socialHandle, index) => (
              <a
                key={index}
                href={socialHandle.link}
                target="_blank"
                className="opacity_Hover relative block lg:w-[1.5625vw] lg:h-[1.5625vw] w-[20px] h-[20px]"
              >
                <Image fill src={socialHandle.img} alt={socialHandle.alt} />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-[6px] justify-center lg:gap-x-[0.2vw] lg:py-[0.9375vw] py-[10px] lg:text16 mtext14 text-center text-white">
          <span>
            {arabic
              ? "جميع الحقوق محفوظة. نادي الطيران السعودي @ 2024"
              : "All Rights Reserved. Saudi Aviation Club @ 2024"}
          </span>
          <a
            href="https://brackets-tech.com/"
            target="_blank"
            className={`f300 opacity_Hover ${arabic ? "opacity-[0.7]" : ""}`}
          >
            {arabic
              ? "  |  تم تطويره بواسطة Brackets Technology"
              : " Developed by Brackets Technology"}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
