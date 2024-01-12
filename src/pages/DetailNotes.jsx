import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { IoMdArchive } from "react-icons/io";
import { MdUnarchive } from "react-icons/md";
import BtnNotes from "../components/BtnNotes";
import DetailNotesHead from "../components/DetailNotesHead";
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../utils/network-data";

const DetailNotes = () => {
  const [detailNote, setDetailNote] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const navigateToHome = (path) => {
    navigate(path);
  };

  React.useEffect(() => {
    getNote(id).then(({ data }) => {
      if(data) {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      }
      setDetailNote(data);
    })
  }, []);

  return (
    <React.Fragment>
      <div className="pt-20">
        <div className="pb-10">
          <div className="relative p-3 flex justify-center items-center flex-col space-y-14 sm:space-y-20 w-full mt-8">
            {!isLoading ? (
              <DetailNotesHead detailNote={detailNote} />
            ) : (
              <DetailNotesHead detailNote={detailNote} isLoading />
            )}
            <div className="btn-wrapper flex justify-center items-center flex-wrap w-[120px] sm:w-[150px] gap-3 sm:gap-5 fixed bottom-5 right-5 sm:bottom-8 sm:right-8">
              {!detailNote.archived ? (
                <BtnNotes
                  Icon={IoMdArchive}
                  handler={() => {
                    archiveNote(detailNote.id);
                    navigateToHome("/");
                  }}
                />
              ) : (
                <BtnNotes
                  Icon={MdUnarchive}
                  handler={() => {
                    unarchiveNote(detailNote.id);
                    navigateToHome("/");
                  }}
                />
              )}
              <BtnNotes
                Icon={FaTrash}
                handler={() => {
                  deleteNote(detailNote.id);
                  navigateToHome("/");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DetailNotes;
