import React from "react";
import { useLocale } from "../contexts/LocaleContext";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../utils/network-data";
import { func } from "prop-types";
import InputForm from "../components/InputForm";
import useInput from "../hooks/useInput";

const Login = ({ onLoginSuccess }) => {
  const [email, handleEmailChange] = useInput(false, "");
  const [password, handlePasswordChange] = useInput(false, "");

  const { locale } = useLocale();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataPost = {
      email,
      password
    };

    const { error, data } = await login(dataPost);
    if (!error) {
      onLoginSuccess(data);
      navigate("/");
    } else {
      alert(`${locale === "en" ? "Login Failed" : "Gagal Login"}`);
    }
  };

  return (
    <React.Fragment>
      <div className="w-full h-screen flex justify-center items-center flex-col space-y-5 px-3">
        <div className="header-register flex flex-col justify-center items-center space-y-1 sm:space-y-2">
          <div className="font-bold text-xl sm:text-2xl text-gray-700 dark:text-slate-400">
            {locale === "en" ? "Welcome Friend!" : "Selamat Datang Teman!"}
          </div>
          <div className="font-bold text-3xl sm:text-4xl text-gray-800 dark:text-slate-300">
            {locale === "en" ? "Login Your Account" : "Masuk Akun Anda"}
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center flex-col gap-4 w-auto sm:w-[55%] lg:w-[30%] h-fit"
        >
          <InputForm type="email" value={email} placeholder="Email" handleChangeValue={handleEmailChange} isFocus />

          <InputForm
            type="password"
            value={password}
            placeholder="Password"
            handleChangeValue={handlePasswordChange}
            isPassword
          />
          <button
            type="submit"
            className="w-full px-5 py-3 mt-2 sm:mt-3 font-bold text-slate-200 dark:text-gray-800 bg-gray-800 dark:bg-slate-400 rounded-lg self-end"
          >
            {locale === "en" ? "Login" : "Masuk"}
          </button>
          <div className="text-xs sm:text-sm self-start lg:text-base text-gray-800 dark:text-slate-200">
            {locale === "en" ? "Don't have account?" : "Belum punya akun?"}{" "}
            <Link to="/register" className="underline">
              {locale === "en" ? "Register here" : "Daftar disini"}
            </Link>{" "}
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;

Login.propTypes = {
  onLoginSuccess: func.isRequired
};
