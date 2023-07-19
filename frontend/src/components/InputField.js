import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const InputField = (props) => {
  const { label, id, type, placeholder, setValue } = props;
  const [showPassword, setShowPassword] = useState(false);

  // const inputStyle =
  //   "bg-gray-300 appearance-none rounded w-full py-2 xxs:px-2 sm:px-4 xxs:text-xs sm:text-base text-gray-700 focus:outline-none focus:border-green-500 resize-none";
  return (
    <>
      {/* {id === "password" ? (
        <div className="mb-4">
          <label
            className="text-gray-200 text-sm font-semibold mb-2"
            htmlFor={id}
          >
            {label}
          </label>
          <div className="relative flex items-center">
            <input
              className={inputStyle}
              id={id}
              type={showPassword ? "text" : type}
              placeholder={placeholder}
            />
            {showPassword ? (
              <BsEyeSlash
                onClick={() => setShowPassword(false)}
                className="absolute right-2 text-gray-700 z-10"
              />
            ) : (
              <BsEye
                onClick={() => setShowPassword(true)}
                className="absolute right-2 text-gray-700 z-10"
              />
            )}
          </div>
        </div>
      ) : (
        <div className="mb-4">
          <label
            className="text-gray-200 text-sm font-semibold mb-2"
            htmlFor={id}
          >
            {label}
          </label>
          <input
            className={inputStyle}
            id={id}
            type={type}
            placeholder={placeholder}
          />
        </div>
      )} */}
      <div className="mb-4">
        {label && (
          <label className="labelStyle" htmlFor={id}>
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          <input
            className="inputStyle"
            id={id}
            type={id === "password" ? (showPassword ? "text" : type) : type}
            placeholder={placeholder}
            onChange={(e) => setValue(e.target.value)}
          />
          {id === "password" &&
            (showPassword ? (
              <BsEyeSlash
                onClick={() => setShowPassword(false)}
                className="absolute right-2 text-gray-700 z-10"
              />
            ) : (
              <BsEye
                onClick={() => setShowPassword(true)}
                className="absolute right-2 text-gray-700 z-10"
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default InputField;
