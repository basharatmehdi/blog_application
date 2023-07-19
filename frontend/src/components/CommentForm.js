import React from "react";
import { Link } from "react-router-dom";
import InputField from "./InputField";
import TextArea from "./TextArea";
import Button from "./Button";

const CommentForm = () => {
  return (
    <>
      <hr className="h-px bg-gray-700 border-0 my-6" />
      <h3 className="text-gray-200 text-lg font-semibold mb-2">Comment</h3>
      <div className="max-w-xl">
        <InputField
          label={"Email"}
          id={"commentEmail"}
          type={"email"}
          placeholder={"example@domain.com"}
        />
        <InputField
          label={"Name"}
          id={"commentName"}
          type={"text"}
          placeholder={"John Doe"}
        />
        <TextArea
          label={"Comment"}
          id={"commentMessage"}
          rows={"4"}
          placeholder={"Your comment goes here!"}
        />
        <Button>
          <Link to={``}>Comment</Link>
        </Button>
      </div>
      <hr className="h-px max-w-xl bg-gray-700 border-0 my-6" />
    </>
  );
};

export default CommentForm;
