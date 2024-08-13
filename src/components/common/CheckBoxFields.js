import React from "react";
import CheckBoxField from "./CheckBoxField";

const CheckBoxFields = ({
  label,
  checkboxes,
  id,
  errors,
  handleCheckChange
}) => {
  return (
    <div className="w-full text-white">
      <span className="lg:text28 mtext18">{label}</span>
      <div className="flex mt-[14px] lg:mt-[1vw] gap-x-[14px] lg:gap-x-[1vw]">
        {checkboxes?.map((checkbox, index) => (
          <CheckBoxField
            handleCheckChange={handleCheckChange}
            value={checkbox?.value}
            id={"checkbox" + (index + 1)}
            key={index}
          />
        ))}
      </div>
      {errors[id] && (
        <span className="text-red-600  lg:text20 mtext18  error">
          {errors[id]}
        </span>
      )}
    </div>
  );
};

export default CheckBoxFields;
