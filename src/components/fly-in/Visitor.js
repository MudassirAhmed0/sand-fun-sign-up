import React, { useRef, useState } from "react";
import InputField from "./form/InputField";
import PhoneDropDownField from "./form/PhoneDropDownField";
import DropDownField from "./form/DropDownField";
const Visitor = ({
  states,
  errors,
  visitorTextChange,
  handleGender,
  handlePhoneField,
  index
}) => {
  const [genderValue, setGenderValue] = useState("Gender");
  const phoneRef = useRef(null);
  return (
    <div>
      <span className="lg:text26 mtext18 text-[#000000] f500 w-full block lg:px-[1.25vw] px-[12px] mb-[10px] lg:mb-[0.6vw] ">
        Visitor 1
      </span>
      <div className="flex flex-wrap lg:gap-x-[0vw] justify-between lg:gap-y-[2.08333333333vw] gap-[24px]">
        <InputField
          id="firstName"
          errors={errors}
          value={states?.firstName}
          placeholder={"Full name *"}
          // handleChange={handleTextChange}
          handleChange={visitorTextChange}
          index={index}
          small
        />
        <InputField
          id="lastName"
          errors={errors}
          value={states?.lastName}
          placeholder={"Last name *"}
          // handleChange={handleTextChange}
          handleChange={visitorTextChange}
          index={index}
          small
        />
        <InputField
          id="nationality"
          errors={errors}
          value={states?.nationality}
          placeholder={"Nationality * "}
          // handleChange={handleTextChange}
          handleChange={visitorTextChange}
          index={index}
        />
        <InputField
          id="passport"
          errors={errors}
          value={states?.passport}
          placeholder={"Passport number * "}
          // handleChange={handleTextChange}
          handleChange={visitorTextChange}
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
        <InputField
          id="email"
          errors={errors}
          value={states?.email}
          placeholder={"Email * "}
          // handleChange={handleTextChange}
          handleChange={visitorTextChange}
          index={index}
        />
        <PhoneDropDownField
          id="phone"
          errors={errors}
          value={states?.phone}
          handlePhoneField={handlePhoneField}
          phoneRef={phoneRef}
          index={index}
        />
      </div>
    </div>
  );
};

export default Visitor;
