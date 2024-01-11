import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";

export default function DetailNotesHead({ detailNote }) {
  return (
    <div
      key={detailNote.id}
      className="w-[85%] flex justify-center items-start flex-col"
    >
      <h1 className="dark:text-white text-gray-800 font-bold text-3xl sm:text-4xl lg:text-6xl mb-2 lg:mb-3">
        {detailNote.title}
      </h1>
      <h3 className="text-xs sm:text-base mb-3 sm:mb-5 lg:mb-7 dark:text-slate-400 text-gray-600">
        {showFormattedDate(detailNote.createdAt)}
      </h3>
      <p className="dark:text-slate-200 text-gray-700 text-sm sm:text-lg lg:text-xl">
        {detailNote.body}
      </p>
    </div>
  );
}

DetailNotesHead.propTypes = {
  detailNote: PropTypes.object.isRequired,
};
