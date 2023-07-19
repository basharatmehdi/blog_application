import React from "react";
import {
  BsFacebook,
  BsWhatsapp,
  BsInstagram,
  BsTwitter,
  BsTelegram,
} from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="flex justify-around mt-3 xxs:text-2xl sm:text-3xl md:text-xl lg:text-3xl">
      <a
        href="https://www.facebook.com/"
        className="bg-blue-600 sm:p-3 md:p-2 xxs:p-1 lg:p-3 rounded-md hover:translate-y-2 transition-all"
      >
        <BsFacebook />
      </a>
      <a
        href="#"
        className="bg-green-500 sm:p-3 md:p-2 xxs:p-1 lg:p-3 rounded-md hover:translate-y-2 transition-all"
      >
        <BsWhatsapp />
      </a>
      <a
        href="#"
        className="bg-[#1da1f2] rounded-md hover:translate-y-2 transition-all sm:p-3 md:p-2 xxs:p-1 lg:p-3"
      >
        <BsTwitter />
      </a>
      <a
        href="#"
        className="bg-gradient-to-tr from-blue-500 via-purple-500 to-[#e1306c] sm:p-3 md:p-2 xxs:p-1 lg:p-3 rounded-md hover:translate-y-2 transition-all"
      >
        <BsInstagram />
      </a>
      <a
        href="#"
        className="bg-[#28a8e9] rounded-md hover:translate-y-2 transition-all sm:p-3 md:p-2 xxs:p-1 lg:p-3"
      >
        <BsTelegram />
      </a>
    </div>
  );
};

export default SocialMedia;
