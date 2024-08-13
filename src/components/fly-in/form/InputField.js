import React from "react";

const InputField = ({
  small,
  placeholder,
  type,
  value,
  id,
  handleChange,
  errors,
  index,
}) => {
  return (
    <div
      className={`${
        small ? "lg:w-[48.264%]" : "w-full"
      } w-full flex flex-col lg:gap-y-[0.3125vw] gap-y-[6px]`}
    >
      <label
        htmlFor="Fullname"
        className="border-[#0000004D] border-b lg:h-[6.66666666667vh] sm:h-[62px] h-[45px] flex items-center justify-between lg:px-[1.25vw] px-[12px]"
      >
        <input
          data-value={index}
          autoComplete="off"
          type={type ? type : "text"}
          placeholder={placeholder}
          value={value}
          id={id}
          onChange={handleChange}
          className="w-full h-full text-[#000] text-opacity-[0.7] lg:text24 mtext18 placeholder:text-[#000] placeholder:text-opacity-[0.7] placeholder:lg:text24 placeholder:mtext18 outline-none bg-transparent"
        />
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



export default InputField;
