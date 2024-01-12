import React, { useState } from "react";
import PropTypes from "prop-types";
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import AddNotesFieldInput from "../components/AddNotesFieldInput";
import BtnNotes from "../components/BtnNotes";
import { MdBrowserUpdated } from "react-icons/md";
import { editNote, getNote } from "../utils/local-data";
import useInput from "../hooks/useInput";

const EditNotes = () => {
 const { id } = useParams();
 const navigate = useNavigate();
 const dataNotesById = getNote(id);

 const { title, body, handleTitleChange, handleBodyChange } = useInput(true, dataNotesById);

 const handleSubmit = () => {
  if (title !== "" && body !== "") {
    const dataPost = {
      id: id,
      title: title,
      body: body,
    };

    editNote(dataPost);
    navigate("/");
  } else {
    alert("Isi Judul dan Deskripsinya tidak boleh kosong");
  }
 };

 return (
  <React.Fragment>
    <div className="pt-20">
      <div className="pb-10">
        <Navigation />
        <div className="relative p-3 flex justify-center items-center flex-col space-y-14 sm:space-y-20 w-full mt-8 pt-8 sm:pt-10 lg:pt-12">
          <AddNotesFieldInput
            title={title}
            body={body}
            onTitleChange={handleTitleChange}
            onBodyChange={handleBodyChange}
            isUpdate={true}
          />
          <div className="fixed bottom-7 right-7 z-[99]">
            <BtnNotes
              Icon={MdBrowserUpdated}
              handler={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
 );
};

export default EditNotes;
