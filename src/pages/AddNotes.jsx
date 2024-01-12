import React from "react";
import Navigation from "../components/Navigation";
import BtnNotes from "../components/BtnNotes";
import { FaClipboardCheck } from "react-icons/fa6";
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";
import AddNotesFieldInput from "../components/AddNotesFieldInput";
import { useLocale } from "../contexts/LocaleContext";
import useInput from "../hooks/useInput";

const AddNotes = () => {
  const navigate = useNavigate();
  const { locale } = useLocale();
  const { title, body, handleTitleChange, handleBodyChange } = useInput(false, "");

  const navigateToHome = () => {
    navigate("/");
  };

  const handleSubmit = () => {
    if (title !== "" && body !== "") {
      const dataPost = {
        title: title,
        body: body
      };

      addNote(dataPost);
      navigateToHome();
    } else {
      alert(
        `${
          locale === "en"
            ? "The contents of the title and description cannot be empty"
            : "Isi Judul dan Deskripsinya tidak boleh kosong"
        }`
      );
    }
  };

  return (
    <div className="pt-20">
      <div className="placeholder-shown:b-10">
        <Navigation />
        <div className="relative p-3 flex justify-center items-center flex-col space-y-14 sm:space-y-20 w-full mt-8 pt-8 sm:pt-10 lg:pt-12">
          <AddNotesFieldInput
            title={title}
            body={body}
            onTitleChange={handleTitleChange}
            onBodyChange={handleBodyChange}
            isUpdate={false}
          />
          <div className="fixed bottom-7 right-7 z-[99]">
            <BtnNotes Icon={FaClipboardCheck} handler={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNotes;
