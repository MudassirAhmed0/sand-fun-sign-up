"use client";
import React, { useEffect, useRef } from "react";
import Analytic from "./Analytic";

const Analytics = ({ arabic }) => {
  const containerRef = useRef(null);
  const analytics = [
    {
      number: "20",
      text: arabic ? "لوريم ايبسوم دولار سيت أميت" : "Speakers"
    },
    {
      number: "100",
      text: arabic ? "لوريم ايبسوم دولار سيت أميت" : "Exhibitors"
    },
    {
      number: "100,000",
      text: arabic ? "لوريم ايبسوم دولار سيت أميت" : "Visitors"
    },
    {
      number: "100",
      text: arabic ? "لوريم ايبسوم دولار سيت أميت" : "VVIPs"
    }
  ];

  // const isInViewport = (element) => {
  //   const rect = element.getBoundingClientRect();
  //   return (
  //     rect.top >= 0 &&
  //     rect.left >= 0 &&
  //     rect.bottom <=
  //       (window.innerHeight || document.documentElement.clientHeight) &&
  //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //   );
  // };

  // useEffect(() => {
  //   const animateCounters = () => {
  //     document.querySelectorAll(".count").forEach((element) => {
  //       const counter = { value: 0 };
  //       const endValue = parseInt(element.textContent.replace(/,/g, ""), 10);

  //       function animate() {
  //         const duration = 3000;
  //         const startTime = performance.now();

  //         function update(currentTime) {
  //           const elapsedTime = currentTime - startTime;
  //           const progress = Math.min(elapsedTime / duration, 1);
  //           const value = Math.ceil(progress * endValue);
  //           element.textContent = value.toLocaleString("en");

  //           if (progress < 1) {
  //             requestAnimationFrame(update);
  //           }
  //         }

  //         requestAnimationFrame(update);
  //       }

  //       animate();
  //     });
  //   };

  //   const onScroll = () => {
  //     if (containerRef.current && isInViewport(containerRef.current)) {
  //       animateCounters();
  //       window.removeEventListener("scroll", onScroll);
  //     }
  //   };

  //   window.addEventListener("scroll", onScroll);

  //   // Initial check in case the element is already in viewport
  //   if (containerRef.current && isInViewport(containerRef.current)) {
  //     animateCounters();
  //     window.removeEventListener("scroll", onScroll);
  //   }

  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //   };
  // }, []);

  return (
    <div
      ref={containerRef}
      className="bg-[#1A1C1F] text-white lg:mt-[-9.6875vw] mt-[-14.6511627907vw]"
    >
      <div className=" relative z-[2] Container1640 flex justify-center flex-wrap lg:gap-[2.08333333333vw] sm:gap-[24px] gap-[12px] items-stretch">
        {analytics.map((analytic, index) => (
          <Analytic analytic={analytic} key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Analytics;
