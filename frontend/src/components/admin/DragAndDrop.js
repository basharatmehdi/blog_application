import React, { useRef } from "react";
import { BsUpload } from "react-icons/bs";

const DragAndDrop = (props) => {
  const { setFiles } = props;

  const inputRef = useRef();

  const setFileHandler = (e) => {
    // for (let i = 0; i < files.length; i++) {
    //   console.log(files[i].name);
    // }
    setFiles(e.target.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setFiles(e.dataTransfer.files);
  };
  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="text-gray-700 bg-gray-300 mb-4 rounded-lg p-2"
    >
      <div className="flex flex-col items-center p-3 rounded-lg border border-dashed border-gray-400 hover:bg-slate-300">
        <div className="text-2xl mb-2 rounded-full border border-gray-700 p-2">
          <BsUpload />
        </div>
        <span className="text-sm">Drag and Drop Files</span>
        <span className="font-semibold">Or</span>
        <input
          type="file"
          multiple
          onChange={setFileHandler}
          hidden
          ref={inputRef}
        />
        <button
          className="font-semibold text-sm hover:text-gray-900"
          onClick={() => inputRef.current.click()}
        >
          Click here to Upload
        </button>
      </div>
    </div>
  );
};

export default DragAndDrop;
