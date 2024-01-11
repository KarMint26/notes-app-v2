import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

export default function CardNote({ id, title, createdAt, body }) {
  const { theme } = useTheme();

  return (
    <Link
      to={`/notes/${id}`}
      className="w-[300px] h-[250px] sm:h-[300px] overflow-hidden rounded-xl bg-gray-700 dark:bg-black p-6 hover:-translate-y-1 transition duration-300 shadow mb-5 sm:mb-2"
      style={{
        boxShadow:
          theme === "dark" ? "0 -.3rem 0 0 rgba(255,255,255,0.8), 0 .3rem 0 0 rgba(255,255,255,0.8)" : "0 -.3rem 0 0 rgb(0,0,0), 0 .3rem 0 0 rgba(0,0,0)",
      }}
    >
      <div className="text-[1.3rem] mb-[0.1rem] text-white font-semibold">
        {title}
      </div>
      <div className="text-[0.8rem] mb-4">{showFormattedDate(createdAt)}</div>
      <div className="text-sm sm:text-base text-slate-200">{`${
        body.length > 100 ? body.slice(0, 180) + "..." : body
      }`}</div>
    </Link>
  );
}

CardNote.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};
