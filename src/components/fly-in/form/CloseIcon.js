import React from "react";

export default function CloseIcon({props}) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="1"
        y="1"
        width="26"
        height="26"
        rx="13"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8.5 14H14.0008M14.0008 14H19.5M14.0008 14V8.5M14.0008 14V19.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
