import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import InputForm from "../components/InputForm";
import { register } from "../utils/network-data";
import { useLocale } from "../contexts/LocaleContext";

const Register = () => {
  const [name, handleNameChange] = useInput(false, "");
  const [email, handleEmailChange] = useInput(false, "");
  const [password, handlePasswordChange] = useInput(false, "");
  const [passwordConf, handlePasswordConfChange] = useInput(false, "");
  const [isMatchPassword, setIsMatchPassword] = React.useState(false);

  const { locale } = useLocale();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataPost = {
      name,
      email,
      password
    };

    const { error } = await register(dataPost);
    if (!error) {
      navigate("/");
    } else {
      alert(`${locale === "en" ? "Register Failed" : "Gagal Mendaftar"}`);
    }
  };

  React.useEffect(() => {
    if (passwordConf === password) {
      setIsMatchPassword(true);
    } else {
      setIsMatchPassword(false);
    }
  }, [password, passwordConf]);

  return (
    <React.Fragment>
      <div className="w-full h-screen flex justify-center items-center flex-col space-y-5 px-3">
        <div className="header-register flex flex-col justify-center items-center space-y-1 sm:space-y-2">
          <div className="font-bold text-xl sm:text-2xl text-gray-700 dark:text-slate-400">
            {locale === "en" ? "Welcome Friend!" : "Selamat Datang Teman!"}
          </div>
          <div className="font-bold text-3xl sm:text-4xl text-gray-800 dark:text-slate-300">
            {locale === "en" ? "Register Account" : "Daftarkan Akun"}
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center flex-col gap-4 w-auto sm:w-[55%] lg:w-[30%] h-fit"
        >
          <InputForm
            type="text"
            value={name}
            placeholder={locale === "en" ? "Name" : "Nama"}
            handleChangeValue={handleNameChange}
            isFocus
          />

          <InputForm type="email" value={email} placeholder="Email" handleChangeValue={handleEmailChange} />

          <InputForm
            type="password"
            value={password}
            placeholder="Password"
            handleChangeValue={handlePasswordChange}
            isPassword
          />

          <InputForm
            type="password"
            value={passwordConf}
            placeholder={locale === "en" ? "Password Confirmation" : "Password Konfirmasi"}
            handleChangeValue={handlePasswordConfChange}
            isPassword
          />
          {!isMatchPassword && password !== "" && (
            <div className="text-red-500 text-sm sm:text-base self-start -translate-y-2">
              {locale === "en" ? "Password Doesn't Match" : "Password Tidak Cocok"}
            </div>
          )}
          <button
            type="submit"
            className="w-full px-5 py-3 mt-2 sm:mt-3 font-bold text-slate-200 dark:text-gray-800 bg-gray-800 dark:bg-slate-400 rounded-lg self-end"
          >
            {locale === "en" ? "Register" : "Daftar"}
          </button>
          <div className="text-xs sm:text-sm self-start lg:text-base text-gray-800 dark:text-slate-200">
            {locale === "en" ? "Already have account?" : "Sudah punya akun?"}{" "}
            <Link to="/" className="underline">
              {locale === "en" ? "Login here" : "Masuk disini"}
            </Link>{" "}
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Register;
