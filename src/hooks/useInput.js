import React from "react";

const useInput = (isEdit, dataNotes) => {
  const [title, setTitle] = React.useState(() => {
    return isEdit ? dataNotes.title : ""
  });
  const [body, setBody] = React.useState(() => {
    return isEdit ? dataNotes.body : ""
  });

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  return { title, body, handleTitleChange, handleBodyChange };
};

export default useInput;
