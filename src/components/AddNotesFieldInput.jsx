import React from "react";
import PropTypes from "prop-types";
import { useLocale } from "../contexts/LocaleContext";

export default function AddNotesFieldInput({ title, body, onTitleChange, onBodyChange, isUpdate }) {
  const { locale } = useLocale();

  return (
    <div className="w-[85%] flex justify-center items-start flex-col">
      <input
        type="text"
        name="title"
        id="title"
        placeholder={`${
          isUpdate ? (locale === "en" ? "Update Note" : "Perbarui Note") : locale === "en" ? "New Note" : "Catatan Baru"
        }`}
        className="dark:text-white dark:placeholder:text-slate-100 text-gray-800 placeholder:text-gray-700 bg-transparent px-5 py-2 sm:py-3 font-bold text-3xl sm:text-4xl lg:text-6xl mb-2 lg:mb-3 w-full rounded-xl"
        style={{ outline: "none" }}
        value={title}
        onChange={onTitleChange}
        required
      />
      <textarea
        name="body"
        id="body"
        placeholder={`${locale === "en" ? "I'am a..." : "Saya merupakan seorang..."}`}
        className="dark:text-slate-200 dark:placeholder:text-slate-400 text-gray-600 placeholder:text-gray-500 bg-transparent px-5 py-2 sm:py-3 text-sm sm:text-lg lg:text-xl w-full h-[500px]"
        style={{ outline: "none" }}
        value={body}
        onChange={onBodyChange}
        required
      />
    </div>
  );
}

AddNotesFieldInput.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onBodyChange: PropTypes.func.isRequired,
  isUpdate: PropTypes.bool.isRequired
};
