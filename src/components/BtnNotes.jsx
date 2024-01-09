import React from "react";
import PropTypes from "prop-types";

export default function BtnNotes({ Icon, handler = () => {} }) {
  return (
    <div
      className="button rounded-full w-12 h-12 sm:w-16 sm:h-16 cursor-pointer bg-slate-600 flex justify-center items-center transition duration-300 hover:bg-slate-700"
      onClick={handler}
    >
      <Icon className="text-xl sm:text-2xl text-white" />
    </div>
  );
}

BtnNotes.propTypes = {
  Icon: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  handler: PropTypes.func,
};
