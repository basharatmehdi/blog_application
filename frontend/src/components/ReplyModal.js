import React from "react";
import InputField from "./InputField";
import TextArea from "./TextArea";
import Button from "./Button";
import { FaTimes } from "react-icons/fa";

const ReplyModal = (props) => {
  const { setReplyModalFunc, comment } = props;

  return (
    <div className="bg-black/60 w-screen h-screen z-10 fixed top-0 left-0 right-0 bottom-0">
      <div className="w-[80%] md:w-[50%] lg:w-[35%] mx-auto bg-slate-900 rounded-lg py-6 px-10 z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <FaTimes
          className="float-right text-red-400 text-lg cursor-pointer"
          onClick={() => setReplyModalFunc(false)}
        />
        <h3 className="text-gray-200 text-lg font-semibold mb-2 text-center">
          Reply
        </h3>
        <InputField
          label={"Name"}
          id={"replyName"}
          type={"text"}
          placeholder={"John Doe"}
        />
        <InputField
          label={"Email"}
          id={"replyEmail"}
          type={"email"}
          placeholder={"example@domain.com"}
        />
        <TextArea
          label={"Reply"}
          id={"replyMessage"}
          rows={"4"}
          placeholder={"Your Reply goes here!"}
        />
        <Button>Reply</Button>
      </div>
    </div>
  );
};

export default ReplyModal;
