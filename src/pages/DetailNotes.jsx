import React, { Component } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/local-data";
import { FaTrash } from "react-icons/fa";
import { IoMdArchive } from "react-icons/io";
import { MdUnarchive } from "react-icons/md";
import BtnNotes from "../components/BtnNotes";
import PropTypes from "prop-types";

const DetailNotesWrapper = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  return <DetailNotes idNotes={id} navigation={navigateToHome} />;
};

class DetailNotes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const detailNote = getNote(this.props.idNotes);

    return (
      <div className="relative p-3 flex justify-center items-center flex-col space-y-14 sm:space-y-20 w-full mt-8">
        <div
          key={detailNote.id}
          className="w-[85%] flex justify-center items-start flex-col"
        >
          <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-6xl mb-2 lg:mb-3">
            {detailNote.title}
          </h1>
          <h3 className="text-xs sm:text-base mb-3 sm:mb-5 lg:mb-7">
            {detailNote.createdAt}
          </h3>
          <p className="text-slate-200 text-sm sm:text-lg lg:text-xl">
            {detailNote.body}
          </p>
        </div>

        <div className="btn-wrapper flex justify-center items-center gap-3 sm:gap-5 fixed bottom-8 right-8">
          {!detailNote.archived ? (
            <BtnNotes
              Icon={IoMdArchive}
              handler={() => {
                archiveNote(detailNote.id);
                this.props.navigation();
              }}
            />
          ) : (
            <BtnNotes
              Icon={MdUnarchive}
              handler={() => {
                unarchiveNote(detailNote.id);
                this.props.navigation();
              }}
            />
          )}
          <BtnNotes
            Icon={FaTrash}
            handler={() => {
              deleteNote(detailNote.id);
              this.props.navigation();
            }}
          />
        </div>
      </div>
    );
  }
}

export default DetailNotesWrapper;

DetailNotes.propTypes = {
  navigation: PropTypes.func.isRequired,
  idNotes: PropTypes.string.isRequired,
};
