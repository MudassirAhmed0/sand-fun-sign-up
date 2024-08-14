import Image from "next/image";
import React from "react";

const UploadField = ({
  label,
  errors,
  value,
  handleFileChange,
  id,
  handleDragOver,
  handleDrop,
  fileErrors
}) => {
  return (
    <div>
      <span className="block mb-[8px] lg:mb-[0.4vw] ">{label}</span>
      <label
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        htmlFor={id}
        data-id={id}
        className="opacity_Hover cursor-pointer flex flex-col justify-center items-center lg:gap-y-[0.52083333333vw] gap-y-[10px] border10 bg-[#0000000D] w-full lg:py-[1.38020833333vw] lg:px-[1.04166666667vw] sm:p-[30px] p-[20px]"
      >
        <input
          type="file"
          name={id}
          className="hidden"
          // value={value}
          id={id}
          onChange={handleFileChange}
        />

        <div className="relative lg:size-[2.5vw] sm:size-[40px] size-[30px]">
          <Image fill alt="upload" src="/images/icons/upload.svg" />
        </div>
        <span className="lg:text22 mtext14 text-[#000000] text-opacity-[0.5]">
          {value?.name ? "Attached: " + value?.name : "Attach a file here"}
        </span>
      </label>
      {errors[id] && (
        <span className="text-red-600  lg:text20 mtext18  error">
          {errors[id]}
        </span>
      )}
      {fileErrors[id] && (
        <span className="text-red-600  lg:text20 mtext18  error">
          {fileErrors[id]}
        </span>
      )}
    </div>
  );
};

export default UploadField;
