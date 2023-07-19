import React from "react";
import {
  BsFacebook,
  BsWhatsapp,
  BsInstagram,
  BsTwitter,
  BsTelegram,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="py-6">
      <div className="flex items-center justify-around xxs:text-xl sm:text-2xl">
        <h3 className="font-bold">Blog</h3>
        <div className="flex items-center xxs:space-x-2 sm:space-x-3">
          <BsFacebook />
          <BsInstagram />
          <BsTwitter />
          <BsWhatsapp />
          <BsTelegram />
        </div>
      </div>
      {/* <hr className="my-4" /> */}
      <p className="text-sm text-gray-400 text-center my-3">
        Copyright &copy; {new Date().getFullYear()} All rights reserved
      </p>
      <div className="text-center">
        <p>
          Made with ❤️ by{" "}
          <a
            href="https://www.github.com/basharatmehdi"
            className="text-green-400"
          >
            Basharat Mehdi
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
