import React from 'react';
import { bool, func, string } from 'prop-types';

export default function InputForm({
  type,
  placeholder,
  value,
  handleChangeValue,
  isFocus = false,
  isPassword = false
}) {
  return (
    <input
      value={value}
      onChange={handleChangeValue}
      type={type}
      placeholder={placeholder}
      className="input input-bordered w-full px-5 dark:bg-slate-600 bg-slate-400/70 text-gray-800 dark:text-white dark:placeholder:text-slate-300 placeholder:text-gray-700"
      autoFocus={isFocus}
      required
      minLength={isPassword ? 6 : 4}
    />
  );
}

InputForm.propTypes = {
  type: string.isRequired,
  placeholder: string.isRequired,
  value: string.isRequired,
  handleChangeValue: func.isRequired,
  isFocus: bool,
  isPassword: bool,
};
