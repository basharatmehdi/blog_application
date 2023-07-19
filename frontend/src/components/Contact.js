import React from "react";
import ContactSvg from "../assets/images/contact.svg";
import TextArea from "./TextArea";
import InputField from "./InputField";
import Button from "./Button";

const Contact = () => {
  const inputStyle =
    "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 xxs:px-2 sm:px-4 xxs:text-xs sm:text-base text-gray-700 focus:outline-none focus:border-green-500 resize-none";
  return (
    <div className="bg-gray-500/20 py-14 px-8 md:px-20 rounded-md grid grid-cols-1 md:grid-cols-5 gap-8 justify-center">
      <div className="md:col-span-5">
        <h3 className="text-2xl md:text-3xl font-semibold text-white text-center mb-2">
          Contact Us
        </h3>
        <p className="text-gray-200 text-xs md:text-sm text-center mb-6">
          Feel free to contact us. We are here to help you.
        </p>
      </div>
      <div className="max-w-3xl md:col-span-3">
        <InputField
          label={"Email"}
          id={"email"}
          type={"email"}
          placeholder={"example@domain.com"}
        />
        <InputField
          label={"Subject"}
          id={"subject"}
          type={"text"}
          placeholder={"Your subject goes here!"}
        />
        <TextArea
          label={"Your Message"}
          id={"message"}
          rows={"6"}
          placeholder={"Your message goes here!"}
        />

        <div className="flex items-center justify-end">
          <Button>Send Message</Button>
        </div>
      </div>
      <div className="md:col-span-2 flex items-center justify-items-end mt-10 md:mt-0">
        <img src={ContactSvg} alt="contact" />
      </div>
    </div>
  );
};

export default Contact;
