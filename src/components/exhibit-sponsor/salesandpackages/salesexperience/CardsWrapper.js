import React from "react";
import Card from "./Card";

const sales = [
  {
    heading: "Competitive Rates",
    desc: "Ensuring value for your investment.",
  },
  {
    heading: "Tailored Packages",
    desc: "Create customized leasing packages that fit your requirements.",
  },
  {
    heading: "Easy Agreements",
    desc: "Streamlined leasing processes and transparent contract terms for a hassle free rental experience.",
  },
  {
    heading: "High Connectivity",
    desc: "We are proud to say that our team is always connected and will provide the needed support on site.",
  },
];
const CardsWrapper = ({ arabic }) => {
  return (
    <div className="lg:mt-[7.29166666667vw] lg:mb-[11.4583333333vw] sm:mt-[90px] mt-[60px] sm:mb-[120px] mb-[80px] flex flex-wrap itexs-stretch lg:gap-[2.08333333333vw] gap-[20px]">
      {sales.map((sale, index) => (
        <Card sale={sale} key={index} index={index} />
      ))}
    </div>
  );
};

export default CardsWrapper;
