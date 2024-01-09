import React from "react";
import PropTypes from "prop-types";

export default function AddNotesFieldInput({
  title,
  body,
  onTitleChange,
  onBodyChange,
  isUpdate,
}) {
  return (
    <div className="w-[85%] flex justify-center items-start flex-col">
      <input
        type="text"
        name="title"
        id="title"
        placeholder={`${isUpdate ? "Update Catatan" : "Catatan Baru"}`}
        className="text-white placeholder:text-slate-100 bg-transparent px-5 py-2 sm:py-3 font-bold text-3xl sm:text-4xl lg:text-6xl mb-2 lg:mb-3 w-full rounded-xl"
        style={{ outline: "none" }}
        value={title}
        onChange={onTitleChange}
      />
      <input
        type="text"
        name="body"
        id="body"
        placeholder="Saya merupakan seorang..."
        className="text-slate-200 bg-transparent px-5 py-2 sm:py-3 text-sm sm:text-lg lg:text-xl w-full"
        style={{ outline: "none" }}
        value={body}
        onChange={onBodyChange}
      />
    </div>
  );
}

AddNotesFieldInput.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onBodyChange: PropTypes.func.isRequired,
  isUpdate: PropTypes.bool.isRequired,
};
