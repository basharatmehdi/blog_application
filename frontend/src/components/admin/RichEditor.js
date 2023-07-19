import React, { useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import InputField from "../InputField";
import EditorToolbar from "./EditorToolbar";
import DragAndDrop from "./DragAndDrop";

import { useCreatePostMutation } from "../../services/post";

const editorStyle = {
  height: "250px",
};
const modules = {
  syntax: {
    highlight: (text) => hljs.highlightAuto(text).value,
  },
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    [
      {
        align: ["", "center", "right", "justify"],
      },
    ],
    // [{ font: [] }],
    [{ color: [] }, { background: [] }],
    ["link", "image", "video"],
    ["clean", "code-block"],
  ],
};

const formats = [
  "align",
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "code-block",
  "color",
  "background",
];

const RichEditor = () => {
  const [content, setContent] = useState("");
  const [files, setFiles] = useState(null);
  const [title, setTitle] = useState("");
  // console.log(title);
  // console.log(files);
  const image = files && files[0];
  const formData = {
    title,
    content,
    image,
  };
  const [createPost, { data, error }] = useCreatePostMutation();
  // console.log(error, data);
  // console.log(formData);
  // const createPost = async (formData) => {
  //   const post = await fetch("http://localhost:4000/api/posts/create-post", {
  //     method: "POST",
  //     body: formData,
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //     mode: "no-cors",
  //   });
  //   console.log(post);
  // };

  return (
    <div className="">
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
      <div className="">
        <EditorToolbar createPost={createPost} formData={formData} />
      </div>

      <InputField
        placeholder={"Title goes here!"}
        type={"text"}
        setValue={setTitle}
      />
      {/* Drag and drop */}
      <DragAndDrop setFiles={setFiles} />
      <div className="bg-gray-300 text-gray-800 h-[350px] md:h-[320px] lg:h-[300px] rounded-lg overflow-hidden">
        <ReactQuill
          style={editorStyle}
          modules={modules}
          formats={formats}
          value={content}
          onChange={setContent}
        />
      </div>
    </div>
  );
};

export default RichEditor;
