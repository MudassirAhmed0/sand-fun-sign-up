import React, { useRef, useState } from "react";
import InputField from "./form/InputField";
import PhoneDropDownField from "./form/PhoneDropDownField";
import DropDownField from "./form/DropDownField";
const Visitor = ({
  states,
  errors,
  handleGender,
  index,
  handleTextChange,
  handleRemoveVisitor
}) => {
  const [genderValue, setGenderValue] = useState("Gender");
  return (
    <div className="animateVisitor  relative mt-[2vw]">
      <span className="lg:text26 mtext18 text-[#000000] f500 flex justify-between w-full block lg:px-[1.25vw] px-[12px] mb-[10px] lg:mb-[0.6vw] ">
        Visitor {index + 2}
        <img
          onClick={() => handleRemoveVisitor(index)}
          src="/images/icons/close.svg"
          className="w-[28px] lg:w-[2vw]  cursor-pointer"
        />
      </span>
      <div className="flex flex-wrap lg:gap-x-[0vw] justify-between lg:gap-y-[2.08333333333vw] gap-[24px]">
        <InputField
          id="firstName"
          errors={errors}
          value={states?.firstName}
          placeholder={"Full name *"}
          handleChange={handleTextChange}
          small
          index={index}
        />
        <InputField
          id="lastName"
          errors={errors}
          value={states?.lastName}
          placeholder={"Last name *"}
          handleChange={handleTextChange}
          small
          index={index}
        />
        <InputField
          id="nationality"
          errors={errors}
          value={states?.nationality}
          placeholder={"Nationality * "}
          handleChange={handleTextChange}
          index={index}
        />
        <InputField
          id="passport"
          errors={errors}
          value={states?.passport}
          placeholder={"Passport number * "}
          handleChange={handleTextChange}
          index={index}
        />
        <DropDownField
          id="gender"
          value={states?.gender}
          errors={errors}
          handleChange={handleGender}
          genderValue={genderValue}
          setGenderValue={setGenderValue}
          index={index}
        />
      </div>
    </div>
  );
};

export default Visitor;
