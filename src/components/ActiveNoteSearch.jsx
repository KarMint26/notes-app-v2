import React from "react";
import { FaSearch } from "react-icons/fa";
import PropTypes from "prop-types";

export default function ActiveNoteSearch({ value, onChangeValue }) {
  return (
    <div className="active-notes space-y-3 flex flex-col items-start w-[85%] translate-y-4 sm:translate-y-6">
      <h1 className="text-xl md:text-2xl">Active Notes</h1>
      <div className="w-full h-fit relative">
        <FaSearch className="absolute text-lg top-[0.9rem] left-4" />
        <input
          type="text"
          value={value}
          onChange={onChangeValue}
          placeholder="Search By Title ..."
          className="input input-bordered w-full pl-12 bg-slate-600 text-white"
          autoFocus
        />
      </div>
    </div>
  );
}

ActiveNoteSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired,
};
