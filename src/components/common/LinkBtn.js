import Link from "next/link";
import React from "react";

const LinkBtn = ({
  secondVarient,
  text,
  link,
  arabic,
  tag: Tag = Link,
  thirdVarient,
  smallBtn
}) => {
  return (
    <Tag
      {...(Link ? { href: link } : { href: "#" })}
      className={`${
        thirdVarient
          ? "bg-[#1a1c1f] border-transparent"
          : secondVarient
          ? "border-[#FFFFFF]"
          : "bg-[#00000080] border-transparent"
      }  ${
        smallBtn
          ? " px-[3vw] sm:px-[28.269px] lg:px-[2.3171875vw] lg:text21 mtext14 "
          : " lg:text21 mtext16 px-[5.41139534884vw] sm:px-[28.269px] lg:px-[2.3171875vw] "
      } flex justify-center items-center myBton text-white sm:py-[12.5px]  py-[2.20930232558vw] lg:py-[0.953125vw]  border100  f600 lg:border-[0.02604166666vw] border-[0.5px] relative before:z-[-1] hover:before:opacity-[1] before:opacity-0 before:content-[''] before:border100 before:absolute before:top-0 before:lrf1 before:size-full before:ring-2 before:ring-[#F62D17] before:blur-[6px] hover:border-[#F62D17]  before:transition-all before:duration-500 transition-all duration-500`}
    >
      {text}
    </Tag>
  );
};

export default LinkBtn;
