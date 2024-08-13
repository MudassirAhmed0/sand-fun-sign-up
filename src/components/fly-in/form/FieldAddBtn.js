import React from "react";
import Image from "next/image";

const FieldAddBtn = ({onClick}) => {
  return (
    <button type="button" onClick={onClick} className="flex items-center lg:gap-[0.41666666666vw] gap-[6px] opacity_Hover">
      <div className="relative lg:size-[1.45833333333vw] size-[18px]">
        <Image fill alt="plus" src="/images/icons/plus-form-signup.svg" />
      </div>
      <span className="lg:text24 mtext18 text-[#F09021] f500">Add visitor</span>
    </button>
  );
};

export default FieldAddBtn;
