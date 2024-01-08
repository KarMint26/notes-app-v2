import React from "react";
import PropTypes from "prop-types";
import CardNote from "./CardNote";

export default function CardContainer({ notes, isArchievePage }) {
  return (
    <React.Fragment>
      {notes.length > 0 ? (
        <div className="wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-5 self-start px-8 sm:px-14 lg:px-28">
          {notes.map((data) => (
            <CardNote
              id={data.id}
              key={data.id}
              title={data.title}
              body={data.body}
              createdAt={data.createdAt}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          {isArchievePage ? 'Arsip Kosong' : 'Tidak Ada Catatan'}
        </div>
      )}
    </React.Fragment>
  );
}

CardContainer.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  isArchievePage: PropTypes.bool.isRequired,
};
