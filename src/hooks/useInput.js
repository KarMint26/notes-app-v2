import React from "react";

const useInput = (isEdit, defaultValue) => {
  const [value, setValue] = React.useState(() => {
    return isEdit ? defaultValue : ""
  });

  const handleValueChange = ({ target }) => {
    setValue(target.value);
  };

  return [ value, handleValueChange ];
};

export default useInput;
