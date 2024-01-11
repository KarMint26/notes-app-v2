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
import { MdEdit, MdUnarchive } from "react-icons/md";
import BtnNotes from "../components/BtnNotes";
import PropTypes from "prop-types";
import Navigation from "../components/Navigation";
import DetailNotesHead from "../components/DetailNotesHead";

const DetailNotesWrapper = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const navigateToHome = (path) => {
    navigate(path);
  };

  return (
    <React.Fragment>
      <div className="pt-20">
        <div className="pb-10">
          <Navigation />
          <DetailNotes idNotes={id} navigation={navigateToHome} />
        </div>
      </div>
    </React.Fragment>
  );
};

class DetailNotes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const detailNote = getNote(this.props.idNotes);

    return (
      <div className="relative p-3 flex justify-center items-center flex-col space-y-14 sm:space-y-20 w-full mt-8">
        <DetailNotesHead detailNote={detailNote} />
        <div className="btn-wrapper flex justify-center items-center flex-wrap w-[120px] sm:w-[150px] gap-3 sm:gap-5 fixed bottom-5 right-5 sm:bottom-8 sm:right-8">
          <BtnNotes Icon={MdEdit} handler={() => {
            this.props.navigation(`/notes/edit/${this.props.idNotes}`);
          }} />
          {!detailNote.archived ? (
            <BtnNotes
              Icon={IoMdArchive}
              handler={() => {
                archiveNote(detailNote.id);
                this.props.navigation("/");
              }}
            />
          ) : (
            <BtnNotes
              Icon={MdUnarchive}
              handler={() => {
                unarchiveNote(detailNote.id);
                this.props.navigation("/");
              }}
            />
          )}
          <BtnNotes
            Icon={FaTrash}
            handler={() => {
              deleteNote(detailNote.id);
              this.props.navigation("/");
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
