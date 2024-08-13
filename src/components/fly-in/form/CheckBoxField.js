import React from "react";
import Image from "next/image";

const CheckBoxField = ({ errors, id, value, handleCheckChange }) => {
  return (
    <label
      htmlFor="terms"
      className="flex flex-wrap justify-center sm:items-start items-center lg:gap-[0.625vw] gap-[8px] cursor-pointer opacity_Hover termsCheck_Lable w-full"
    >
      <div className="relative lg:min-w-[1.45833333333vw] sm:min-w-[20px] min-w-[18px] lg:size-[1.45833333333vw] sm:size-[20px] size-[18px] checkBox_Wrapper">
        <input
          type="checkbox"
          id={id}
          name={id}
          value={value}
          onChange={handleCheckChange}
          className="atlwh_Full outline-none bg-transparent appearance-none"
        />
        <div className="atlwh_Full checkBox">
          <Image
            fill
            alt="check"
            src={"/images/icons/sign-up-check.svg"}
            id="check"
          />
          <Image
            fill
            alt="check"
            src={"/images/icons/sign-up-checked.svg"}
            id="checked"
            className="hidden"
          />
        </div>
      </div>
      <div className="flex flex-col lg:min-w-[52.1354166667vw] lg:w-[52.1354166667vw] sm:min-w-[95%] sm:w-[95%] min-w-[85%] w-[85%]">
        <span className="lg:text21 mtext18 text-[#000000] text-opacity-[0.7] underline">
          Terms and Conditions{" "}
        </span>
        <span className="hidden sm:block lg:text-[0.9375vw] lg:leading-[1.25vw] mtext16 text-[#000000] text-opacity-[0.5] lg:mt-[0.20833333333vw] mt-[4px]">
          The above registration does not guarantee enrollment in the program.
          The organizer will confirm your selection decision via email. Only
          selected participants will be enrolled in the program. Before arrival,
          all participants must provide the necessary documentation, including a
          pilot's license, aircraft registration, and proof of insurance.
          Participants must adhere to designated arrival and departure times and
          follow all air traffic control instructions to ensure safety and
          efficiency as per GACA. International visitors are responsible for
          complying with all customs and immigration requirements. Assistance
          will be provided, but proper documentation must be secured in advance.
          Failure to comply with safety regulations may result in removal from
          the Fly-In Program and forfeiture of benefits.
        </span>
      </div>
      <span className="sm:hidden block lg:text-[0.9375vw] lg:leading-[1.25vw] mtext16 text-[#000000] text-opacity-[0.5] lg:mt-[0.20833333333vw] mt-[4px]">
        The above registration does not guarantee enrollment in the program. The
        organizer will confirm your selection decision via email. Only selected
        participants will be enrolled in the program. Before arrival, all
        participants must provide the necessary documentation, including a
        pilot's license, aircraft registration, and proof of insurance.
        Participants must adhere to designated arrival and departure times and
        follow all air traffic control instructions to ensure safety and
        efficiency as per GACA. International visitors are responsible for
        complying with all customs and immigration requirements. Assistance will
        be provided, but proper documentation must be secured in advance.
        Failure to comply with safety regulations may result in removal from the
        Fly-In Program and forfeiture of benefits.
      </span>
      {errors[id] && (
        <span className="text-red-600  lg:text20 mtext18  error mr-auto">
          {errors[id]}
        </span>
      )}
    </label>
  );
};

export default CheckBoxField;
