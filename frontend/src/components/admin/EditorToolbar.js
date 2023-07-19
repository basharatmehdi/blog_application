import React, { useState } from "react";
import { MdPublish, MdSave } from "react-icons/md";

const categories = ["Travel", "Race", "Cars", "Technology", "News"];

const EditorToolbar = (props) => {
  const [category, setCategory] = useState("");
  const { createPost, formData } = props;
  formData.category = category;
  // formData.append("category", category);
  // console.log(formData);

  const handleAddPost = async () => {
    try {
      await createPost({ ...formData }).unwrap();
    } catch (error) {
      console.log(error);
    }
    console.log(formData);
  };

  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="max-w-lg">
        <select
          onChange={(e) => setCategory(e.target.value)}
          name="category"
          id="category"
          className="border-none shadow-md shadow-slate-600 text-gray-200 placeholder-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-1 px-3 bg-gray-800"
        >
          <option
            className="rounded-md focus:ring-0 focus:border-none drop-shadow-mdgh[][g]rt[hg][h;pyo
              h\okj9]hj[uuuuy=vpo[io[]]]]]]i=89\"
            defaultValue={"Select Category"}
          >
            Category
          </option>
          {categories.map((category) => (
            <option
              className="rounded-md focus:ring-0 focus:border-none bg-slate-900"
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center space-x-3">
        <button
          onClick={handleAddPost}
          className="flex items-center bg-[#00DF9A]/80 px-3 py-1 rounded-md shadow-md shadow-green-400"
        >
          <MdSave size={24} />
          <span>Save</span>
        </button>
        <button className="flex items-center bg-[#00DF9A]/80 px-3 py-1 rounded-md shadow-md shadow-green-400">
          <MdPublish size={24} />
          <span>Publish</span>
        </button>
      </div>
    </div>
  );
};

export default EditorToolbar;
