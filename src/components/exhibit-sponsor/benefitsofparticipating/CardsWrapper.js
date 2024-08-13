import React from "react";
import Card from "./Card";

const participatingBenefits = [
  {
    heading: "Unparalleled Expertise",
    desc: "Leverage our extensive experience in the aviation industry to ensure a seamless and successful tenancy.",
  },
  {
    heading: "Uncompromised Security",
    desc: "We provide 24/7 surveillance and access control to protect your assets and personnel.",
  },
  {
    heading: "Flexible and Scalable",
    desc: "Adapt your space as your business grows with our customizable leasing options.",
  },
  {
    heading: "Dedicated and Personalized",
    desc: "Utilize our deep aviation industry expertise for a smooth and prosperous tenancy.",
  },
];
const CardsWrapper = ({ arabic }) => {
  return (
    <div className="flex flex-wrap lg:gap-[1.25vw] gap-[20px] lg:w-[56.7708333333vw]">
      {participatingBenefits.map((participatingBenefit, index) => (
        <Card
          participatingBenefit={participatingBenefit}
          key={index}
          index={index}
          arabic={arabic}
        />
      ))}
    </div>
  );
};

export default CardsWrapper;
