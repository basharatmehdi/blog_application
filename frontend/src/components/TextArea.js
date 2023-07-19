import React from "react";

const TextArea = (props) => {
  const { label, id, rows, placeholder } = props;

  const inputStyle =
    "bg-gray-300 appearance-none border-2 border-gray-200 rounded w-full py-2 xxs:px-2 sm:px-4 xxs:text-xs sm:text-base text-gray-700 focus:outline-none focus:border-green-500 resize-none";
  return (
    <div className="mb-4">
      <label className="text-gray-200 text-sm font-semibold mb-2" htmlFor={id}>
        {label}
      </label>
      <textarea
        className={inputStyle}
        id={id}
        rows={rows}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default TextArea;
