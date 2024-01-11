import React from "react";
import { FaSearch } from "react-icons/fa";
import PropTypes from "prop-types";
import { useLocale } from "../contexts/LocaleContext";

export default function ActiveNoteSearch({ value, onChangeValue, isArchieved }) {
  const { locale } = useLocale();

  return (
    <div className="active-notes space-y-3 flex flex-col items-start w-[85%] translate-y-4 sm:translate-y-6">
      <h1 className="text-xl md:text-2xl text-slate-800 dark:text-white">
        {isArchieved
          ? locale === "en"
            ? "Archieved Notes"
            : "Catatan Arsip"
          : locale === "en"
          ? "Active Notes"
          : "Catatan Aktif"}
      </h1>
      <div className="w-full h-fit relative">
        <FaSearch className="absolute text-lg top-[0.9rem] left-4 dark:text-slate-300 text-gray-800" />
        <input
          type="text"
          value={value}
          onChange={onChangeValue}
          placeholder={`${locale === "en" ? "Search By Title ..." : "Cari Berdasarkan Judul ..."}`}
          className="input input-bordered w-full pl-12 dark:bg-slate-600 bg-slate-400/70 text-gray-800 dark:text-white dark:placeholder:text-slate-300 placeholder:text-gray-700"
          autoFocus
        />
      </div>
    </div>
  );
}

ActiveNoteSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  isArchieved: PropTypes.bool.isRequired
};
