import React from "react";
import PropTypes from "prop-types";
import CardNote from "./CardNote";
import { useLocale } from "../contexts/LocaleContext";

export default function CardContainer({ notes, isArchievePage }) {
  const { locale } = useLocale();

  return (
    <React.Fragment>
      {notes.length > 0 ? (
        <div className="wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-5 self-start px-8 sm:px-14 lg:px-28">
          {notes.map((data) => (
            <CardNote id={data.id} key={data.id} title={data.title} body={data.body} createdAt={data.createdAt} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center dark:text-gray-400 text-gray-700">
          {isArchievePage
            ? locale === "en"
              ? "Empty Archieves"
              : "Arsip Kosong"
            : locale === "en"
            ? "Empty Notes"
            : "Tidak Ada Catatan"}
        </div>
      )}
    </React.Fragment>
  );
}

CardContainer.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  isArchievePage: PropTypes.bool.isRequired
};
