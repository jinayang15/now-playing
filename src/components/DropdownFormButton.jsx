import { useState } from "react";

function DropdownFormButton({ label, options }) {
  return (
    <>
      <button type="button" className="flex items-center gap-4 p-1">
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <ul>
        {options.map((option, index) => {
          <li key={index}>{option}</li>;
        })}
      </ul>
    </>
  );
}
