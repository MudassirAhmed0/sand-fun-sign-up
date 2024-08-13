"use client";

import React, { useRef, useState } from "react";
import Select from "react-select";
const options = [
  { value: "+1", label: "+1" }, // United States
  { value: "+86", label: "+86" }, // China
  { value: "+91", label: "+91" }, // India
  { value: "+81", label: "+81" }, // Japan
  { value: "+49", label: "+49" }, // Germany
  { value: "+44", label: "+44" }, // United Kingdom
  { value: "+33", label: "+33" }, // France
  { value: "+39", label: "+39" }, // Italy
  { value: "+7", label: "+7" }, // Russia
  { value: "+55", label: "+55" }, // Brazil
  { value: "+61", label: "+61" }, // Australia
  { value: "+34", label: "+34" }, // Spain
  { value: "+82", label: "+82" }, // South Korea
  { value: "+31", label: "+31" }, // Netherlands
  { value: "+46", label: "+46" }, // Sweden
  { value: "+47", label: "+47" }, // Norway
  { value: "+45", label: "+45" }, // Denmark
  { value: "+41", label: "+41" }, // Switzerland
  { value: "+52", label: "+52" }, // Mexico
  { value: "+27", label: "+27" }, // South Africa
  { value: "+966", label: "+966" }, // Saudi Arabia
  { value: "+90", label: "+90" }, // Turkey
  { value: "+62", label: "+62" }, // Indonesia
  { value: "+63", label: "+63" }, // Philippines
  { value: "+92", label: "+92" }, // Pakistan
  { value: "+20", label: "+20" }, // Egypt
  { value: "+54", label: "+54" }, // Argentina
  { value: "+61", label: "+61" }, // Australia
  { value: "+47", label: "+47" }, // Norway
  { value: "+64", label: "+64" }, // New Zealand
  { value: "+31", label: "+31" }, // Netherlands
  { value: "+358", label: "+358" }, // Finland
  { value: "+27", label: "+27" }, // South Africa
  { value: "+20", label: "+20" }, // Egypt
  { value: "+34", label: "+34" }, // Spain
  { value: "+36", label: "+36" }, // Hungary
  { value: "+420", label: "+420" }, // Czech Republic
  { value: "+48", label: "+48" }, // Poland
  { value: "+351", label: "+351" } // Portugal
];
const PhoneDropDownField = ({
  handlePhoneField,
  errors,
  id,
  phoneRef,
  index
}) => {
  const [selectedOption, setSelectedOption] = useState({
    value: "+966",
    label: "+966"
  });
  return (
    <div className="w-full flex flex-col lg:gap-y-[0.3125vw] gap-y-[6px]">
      <div className=" cursor-pointer border-[#0000004D] border-b lg:h-[6.66666666667vh] sm:h-[62px] h-[45px] flex items-center justify-between">
        <div className="lg:w-[7.808333333vw] lg:min-w-[7.808333333vw] relative min-w-[30%] w-[30%] rtl:border-r ltr:border-r border-[#0000004D] h-full flex items-center justify-between lg:px-[0.625vw] px-[0px]">
          {/* <input
            type="text"
            value={phoneValue}
            className="pointer-events-none w-full h-full text-[#FFFFFF] text-opacity-[0.7] lg:text24 mtext18 placeholder:text-[#FFFFFF] placeholder:text-opacity-[0.7] placeholder:lg:text24 placeholder:mtext18 outline-none bg-transparent"
          />
          <img
            ref={dropDown_Chevron}
            src="/images/icons/form-chevron.png"
            alt="chevron"
            className="lg:w-[1.14583333333vw] lg:min-w-[1.14583333333vw] w-[16px] min-w-[16px] dropDown_Chevron transition-all duration-300"
          /> */}
          <Select
            options={options}
            classNamePrefix="react-select"
            defaultValue={selectedOption}
            onChange={setSelectedOption}
          />
        </div>
        <label
          htmlFor="number"
          className="lg:px-[1.25vw] px-[12px] w-full h-full"
        >
          <input
            ref={phoneRef}
            onChange={(e) =>
              handlePhoneField(selectedOption?.value + e.target.value, index)
            }
            type="number"
            id="number"
            placeholder="xxxxxxxxxxxx"
            className="w-full h-full text-[#000000] text-opacity-[0.7] lg:text24 mtext18 placeholder:text-[#000000] placeholder:text-opacity-[0.7] placeholder:lg:text24 placeholder:mtext18 outline-none bg-transparent"
          />
        </label>
        {/* <div className="form_DropDown max-h-0 opacity-0 transition-all duration-500 w-full absolute lrf1 lg:top-[4.0625vw] sm:top-[72px] top-[55px] border10 overflow-hidden">
          <ul className="text-[#FFFFFF] lg:text24 mtext18 border10 border border-[#00000033] bg-[#000000] flex flex-col">
            <li
              onClick={() => {
                setPhoneValue("Male");
              }}
              className="opacity_Hover border-b border-[#00000033] lg:h-[3.75vw] sm:h-[62px] h-[45px] flex items-center lg:px-[1.25vw] px-[12px]"
            >
              Male
            </li>
          </ul>
        </div> */}
      </div>
      {errors[id] && (
        <span className="text-red-600  lg:text20 mtext18  error">
          {errors[id]}
        </span>
      )}
    </div>
  );
};

export default PhoneDropDownField;
