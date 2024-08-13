import React from "react";

const CheckBoxField = ({ id, value, handleCheckChange }) => {
  return (
    <div className="checkboxField lg:text24 mtext16">
      <input
        type="checkbox"
        id={id}
        name={id}
        value={value}
        onChange={handleCheckChange}
      />
      <label htmlFor={id}>
        {value}
        <span>
          <svg
            version="1.1"
            id="fi_446191"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 511.999 511.999"
            fill="white"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <path
                  d="M506.231,75.508c-7.689-7.69-20.158-7.69-27.849,0l-319.21,319.211L33.617,269.163c-7.689-7.691-20.158-7.691-27.849,0
      c-7.69,7.69-7.69,20.158,0,27.849l139.481,139.481c7.687,7.687,20.16,7.689,27.849,0l333.133-333.136
      C513.921,95.666,513.921,83.198,506.231,75.508z"
                />
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </span>
      </label>
    </div>
  );
};

export default CheckBoxField;
