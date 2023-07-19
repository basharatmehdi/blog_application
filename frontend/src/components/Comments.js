import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import InputField from "./InputField";
import TextArea from "./TextArea";
import comments from "../data/comments";
import ReplyModal from "./ReplyModal";

const Comments = (props) => {
  const { postId } = props;
  const filterComments = comments.filter((comment) => {
    return comment.postId === parseInt(postId);
  });

  const [modal, setModal] = useState(false);
  const setReplyModalFunc = (getState) => {
    setModal(getState);
  };

  return (
    <>
      <h3 className="text-gray-200 text-lg font-semibold mb-2">Comments</h3>
      <div className="max-w-xl">
        {filterComments.map((comment) => {
          return (
            <div
              key={comment.id}
              className="pt-4 pb-9 bg-slate-900 border border-gray-700 rounded-md px-3 mb-3"
            >
              <div className="flex items-center mb-2">
                <BsPerson className="text-gray-200 text-3xl border rounded-full p-1" />
                <p className="text-gray-300 ml-2 capitalize font-semibold">
                  {comment.name}
                </p>
              </div>
              <p className="text-gray-400 text-sm">{comment.body}</p>
              <Link
                onClick={() => setModal(true)}
                className="px-2 py-1 text-green-600 float-right"
              >
                Reply
              </Link>
              {modal && (
                <ReplyModal
                  setReplyModalFunc={setReplyModalFunc}
                  comment={comment}
                />
              )}
            </div>
          );
        })}
      </div>
      <hr className="h-px max-w-xl bg-gray-700 border-0 my-6" />
    </>
  );
};

export default Comments;
