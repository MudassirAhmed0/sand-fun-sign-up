"use client";
import React, { useEffect, useRef } from "react";

const Analytic = ({ analytic, index }) => {
  const ref = useRef(null);

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  useEffect(() => {
    const animateCounter = () => {
      const element = ref.current.querySelector(".count");
      const endValue = parseInt(analytic.number.replace(/,/g, ""), 10);
      console.log(endValue);
      function animate() {
        const duration = 3000;
        const startTime = performance.now();

        function update(currentTime) {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          const value = Math.ceil(progress * endValue);
          element.textContent = value.toLocaleString("en");

          if (progress < 1) {
            requestAnimationFrame(update);
          }
        }

        requestAnimationFrame(update);
      }

      ref.current.style.opacity = 1; // Set opacity to 1 before starting animation
      animate();
    };

    const onScroll = () => {
      if (ref.current && isInViewport(ref.current)) {
        animateCounter();
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll);

    // Initial check in case the element is already in viewport
    if (ref.current) {
      if (window.innerWidth > 1024) {
        setTimeout(() => {
          animateCounter();
          window.removeEventListener("scroll", onScroll);
        }, 400);
      } else if (isInViewport(ref.current)) {
        animateCounter();
        window.removeEventListener("scroll", onScroll);
      }
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      data-aos="fade"
      data-aos-anchor="#heading"
      data-aos-delay={(index + 1) * 200}
      className="lg:w-[19.7916666667vw] sm:w-[40%] w-full flex justify-center bg-[#FFFFFF1A] border40 text-center lg:py-[3.38541666667vw] sm:py-[34.5px] py-[5.6976744186vw]"
      style={{ opacity: 0, transition: "opacity 0.5s ease-in-out" }}
    >
      <div className="lg:w-[22.9166666667vw] w-[87%] flex flex-col lg:gap-y-[0.20833333333vw] gap-y-[4px]">
        <span className="lg:text72 mtext56 f900 ">
          <span className="count">{analytic.number}</span>
          <span>+</span>
        </span>
        <span className=" lg:text22 mtext18 f600">{analytic.text}</span>
      </div>
    </div>
  );
};

export default Analytic;
