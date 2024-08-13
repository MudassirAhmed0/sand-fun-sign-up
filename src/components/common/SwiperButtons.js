"use client";
import React, { useEffect, useRef } from "react";
import { useSwiper } from "swiper/react";

const SwiperButtons = ({ setCardActive }) => {
  const swiper = useSwiper();
  const myButton = useRef(null);
  const handleDisable = (element) => {
    element
      .querySelectorAll([".swiper-button-prev", ".swiper-button-next"])
      .forEach(
        (btn) =>
          btn.classList.contains("chomu") &&
          btn.classList.remove("swiper-button-disabled")
      );
    element.querySelectorAll(".swiper-button-disabled").forEach((button) => {
      if (!button.classList.contains("chomu")) {
        if (button.classList.contains("swiper-button-next")) {
          element.querySelectorAll(".swiper-button-next").forEach((btn) => {
            btn.classList.add("swiper-button-disabled");
          });
        } else if (button.classList.contains("swiper-button-prev")) {
          element.querySelectorAll(".swiper-button-prev").forEach((btn) => {
            btn.classList.add("swiper-button-disabled");
          });
        }
      }
    });
  };

  useEffect(() => {
    handleDisable(myButton.current.parentElement);
  }, []);

  const handleSlideChange = () => {
    handleDisable(myButton.current.parentElement);
    if (setCardActive) {
      setCardActive(0);
    }
  };
  useEffect(() => {
    swiper.on("slideChange", handleSlideChange);
    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper, handleSlideChange]);
  const handleNext = (event) => {
    swiper.slideNext();
    handleDisable(event.target.parentElement.parentElement);
  };
  const handlePrev = (event) => {
    swiper.slidePrev();
    handleDisable(event.target.parentElement.parentElement);
  };
  return (
    <>
      <div
        ref={myButton}
        onClick={handleNext}
        className="swiper-button-next chomu   pointer-events-none"
      >
        <svg
          className="w-full h-full flipped"
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          viewBox="0 0 32 32"
          fill="none"
        >
          <g clipPath="url(#clip0_1113_15201)">
            <path
              d="M32 16C32 12.8355 31.0616 9.74207 29.3035 7.11088C27.5454 4.4797 25.0466 2.42894 22.1229 1.21793C19.1993 0.0069325 15.9823 -0.309921 12.8786 0.307443C9.77486 0.924806 6.92394 2.44866 4.6863 4.6863C2.44866 6.92394 0.924805 9.77486 0.307442 12.8786C-0.309921 15.9823 0.0069313 19.1993 1.21793 22.1229C2.42894 25.0466 4.4797 27.5454 7.11088 29.3035C9.74207 31.0616 12.8355 32 16 32C20.2435 32 24.3131 30.3143 27.3137 27.3137C30.3143 24.3131 32 20.2435 32 16ZM2.00001 16C2.00001 13.2311 2.82109 10.5243 4.35943 8.22202C5.89777 5.91973 8.08427 4.12532 10.6424 3.06569C13.2006 2.00607 16.0155 1.72882 18.7313 2.26901C21.447 2.80921 23.9416 4.14258 25.8995 6.10051C27.8574 8.05844 29.1908 10.553 29.731 13.2687C30.2712 15.9845 29.9939 18.7994 28.9343 21.3576C27.8747 23.9157 26.0803 26.1022 23.778 27.6406C21.4757 29.1789 18.7689 30 16 30C12.287 30 8.72602 28.525 6.10051 25.8995C3.475 23.274 2.00001 19.713 2.00001 16Z"
              fill="black"
            />
            <path
              d="M24.6582 16.071L17.8938 9.30656C17.8141 9.2135 17.716 9.13793 17.6057 9.08458C17.4955 9.03122 17.3753 9.00124 17.2529 8.99651C17.1305 8.99178 17.0084 9.01241 16.8944 9.0571C16.7803 9.10179 16.6767 9.16957 16.5901 9.2562C16.5034 9.34283 16.4357 9.44642 16.391 9.56049C16.3463 9.67456 16.3257 9.79663 16.3304 9.91905C16.3351 10.0415 16.3651 10.1616 16.4184 10.2719C16.4718 10.3821 16.5474 10.4802 16.6404 10.5599L21.1738 15.111H7.84043C7.60468 15.111 7.37859 15.2046 7.21189 15.3713C7.04519 15.538 6.95154 15.7641 6.95154 15.9999C6.95154 16.2356 7.04519 16.4617 7.21189 16.6284C7.37859 16.7951 7.60468 16.8888 7.84043 16.8888H21.3338L16.6404 21.5821C16.5474 21.6618 16.4718 21.7599 16.4184 21.8701C16.3651 21.9804 16.3351 22.1005 16.3304 22.223C16.3257 22.3454 16.3463 22.4674 16.391 22.5815C16.4357 22.6956 16.5034 22.7992 16.5901 22.8858C16.6767 22.9724 16.7803 23.0402 16.8944 23.0849C17.0084 23.1296 17.1305 23.1502 17.2529 23.1455C17.3753 23.1408 17.4955 23.1108 17.6057 23.0574C17.716 23.0041 17.8141 22.9285 17.8938 22.8354L24.6582 16.071Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_1113_15201">
              <rect
                width={32}
                height={32}
                fill="white"
                transform="matrix(0 1 -1 0 32 0)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div onClick={handlePrev} className="swiper-button-prev chomu">
        <svg
          className="w-full h-full flipped"
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          viewBox="0 0 32 32"
          fill="none"
        >
          <g clipPath="url(#clip0_1113_15209)">
            <path
              d="M0 16C0 19.1645 0.938383 22.2579 2.69649 24.8891C4.45459 27.5203 6.95345 29.5711 9.87706 30.7821C12.8007 31.9931 16.0177 32.3099 19.1214 31.6926C22.2251 31.0752 25.0761 29.5513 27.3137 27.3137C29.5513 25.0761 31.0752 22.2251 31.6926 19.1214C32.3099 16.0177 31.9931 12.8007 30.7821 9.87706C29.5711 6.95345 27.5203 4.45459 24.8891 2.69649C22.2579 0.938383 19.1645 0 16 0C11.7565 0 7.68687 1.68571 4.68629 4.68629C1.68571 7.68687 0 11.7565 0 16ZM30 16C30 18.7689 29.1789 21.4757 27.6406 23.778C26.1022 26.0803 23.9157 27.8747 21.3576 28.9343C18.7994 29.9939 15.9845 30.2712 13.2687 29.731C10.553 29.1908 8.05844 27.8574 6.1005 25.8995C4.14257 23.9416 2.8092 21.447 2.26901 18.7313C1.72881 16.0155 2.00606 13.2006 3.06569 10.6424C4.12531 8.08426 5.91973 5.89776 8.22201 4.35942C10.5243 2.82108 13.2311 2 16 2C19.713 2 23.274 3.475 25.8995 6.1005C28.525 8.72601 30 12.287 30 16Z"
              fill="black"
            />
            <path
              d="M7.3418 15.929L14.1062 22.6934C14.1859 22.7865 14.284 22.8621 14.3943 22.9154C14.5045 22.9688 14.6247 22.9988 14.7471 23.0035C14.8695 23.0082 14.9916 22.9876 15.1056 22.9429C15.2197 22.8982 15.3233 22.8304 15.4099 22.7438C15.4966 22.6572 15.5643 22.5536 15.609 22.4395C15.6537 22.3254 15.6743 22.2034 15.6696 22.081C15.6649 21.9585 15.6349 21.8384 15.5816 21.7281C15.5282 21.6179 15.4526 21.5198 15.3596 21.4401L10.8262 16.889H24.1596C24.3953 16.889 24.6214 16.7954 24.7881 16.6287C24.9548 16.462 25.0485 16.2359 25.0485 16.0001C25.0485 15.7644 24.9548 15.5383 24.7881 15.3716C24.6214 15.2049 24.3953 15.1112 24.1596 15.1112H10.6662L15.3596 10.4179C15.4526 10.3382 15.5282 10.2401 15.5816 10.1299C15.6349 10.0196 15.6649 9.89947 15.6696 9.77705C15.6743 9.65463 15.6537 9.53256 15.609 9.41849C15.5643 9.30443 15.4966 9.20083 15.4099 9.1142C15.3233 9.02757 15.2197 8.95979 15.1056 8.9151C14.9916 8.87041 14.8695 8.84978 14.7471 8.85451C14.6247 8.85924 14.5045 8.88923 14.3943 8.94258C14.284 8.99593 14.1859 9.07151 14.1062 9.16456L7.3418 15.929Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_1113_15209">
              <rect
                width={32}
                height={32}
                fill="white"
                transform="matrix(0 -1 1 0 0 32)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default SwiperButtons;
