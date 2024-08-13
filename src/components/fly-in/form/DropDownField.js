"use client";

import React, { useRef, useState } from "react";

const options = [
  {
    value: "Male"
  },
  {
    value: "Female"
  }
];

const DropDownField = ({
  handleChange,
  errors,
  id,
  genderValue,
  setGenderValue,
  index: indexx
}) => {
  const form_DropDown = useRef();
  const dropDown_Chevron = useRef();
  const handelDropDown = (e) => {
    form_DropDown.current.classList.toggle("active");
    dropDown_Chevron.current.classList.toggle("active");
  };
  // setGenderValue("Gender")
  return (
    <div className="w-full flex flex-col lg:gap-y-[0.3125vw] gap-y-[6px]">
      <label
        htmlFor="Gender"
        onClick={(e) => {
          handelDropDown(e);
        }}
        className="relative  cursor-pointer border-[#0000004D] border-b lg:h-[6.66666666667vh] sm:h-[62px] h-[45px] flex items-center justify-between"
      >
        <div className="w-full h-full flex items-center justify-between lg:px-[1.25vw] px-[12px]">
          <input
            type="text"
            id="Gender"
            placeholder={genderValue}
            disabled
            className="pointer-events-none  w-full h-full text-[#000000] text-opacity-[0.7] lg:text24 mtext18 placeholder:text-[#000000] placeholder:text-opacity-[0.7] placeholder:lg:text24 placeholder:mtext18 outline-none bg-transparent"
          />
          <img
            ref={dropDown_Chevron}
            src="/images/icons/form-black-chevron.png"
            alt="chevron"
            className="lg:w-[0.9375vw] lg:min-w-[0.9375vw] w-[12px] min-w-[12px] dropDown_Chevron transition-all duration-300"
          />
        </div>
        <div
          ref={form_DropDown}
          className="form_DropDown max-h-0 opacity-0 transition-all duration-500 w-full absolute lrf1 lg:top-[4.0625vw] sm:top-[72px] top-[55px] border10 overflow-hidden"
        >
          <ul className="text-[#FFFFFF] lg:text24 mtext18 border10 border border-[#00000033] bg-[#000000] flex flex-col">
            {options?.map((option, index) => (
              <li
                key={index}
                onClick={() => {
                  setGenderValue(option.value);
                  handleChange(option.value, indexx);
                }}
                className="opacity_Hover border-b border-[#00000033] lg:h-[3.75vw] sm:h-[62px] h-[45px] flex items-center lg:px-[1.25vw] px-[12px]"
              >
                {option.value}
              </li>
            ))}
          </ul>
        </div>
      </label>
      {errors[id] ? (
        <span className="text-red-600  lg:text20 mtext18  error">
          {errors[id]}
        </span>
      ) : errors.visitors.find((item)=> item[id])?.[id] ? (
        <span className="text-red-600  lg:text20 mtext18  error">
          {errors.visitors.find((item)=> item[id])?.[id]}
        </span>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DropDownField;
