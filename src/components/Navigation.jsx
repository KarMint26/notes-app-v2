import React from "react";
import { Link } from "react-router-dom";
import { FaArchive, FaHome, FaMoon, FaNotesMedical, FaSun } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";
import { useLocale } from "../contexts/LocaleContext";
import { MdGTranslate } from "react-icons/md";
import { RiLogoutCircleRFill } from "react-icons/ri";

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const { locale, toggleLocale } = useLocale();

  return (
    <div className="navbar dark:bg-slate-900 bg-gray-700 py-2 pr-5 fixed top-0 z-[999]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow dark:bg-slate-900 bg-gray-700 rounded-box w-52"
          >
            <li>
              <Link className="flex text-white justify-start items-center" to={'/'}>
                <FaHome />
                <p>{locale === "en" ? "Homepage" : "Halaman Utama"}</p>
              </Link>
            </li>
            <li>
              <Link className="flex text-white justify-start items-center" to={'/notes/new'}>
                <FaNotesMedical />
                <p>{locale === "en" ? "New Note" : "Catatan baru"}</p>
              </Link>
            </li>
            <li>
              <Link className="flex text-white justify-start items-center" to={'/notes/archieves'}>
                <FaArchive />
                <p>{locale === "en" ? "Archieves" : "Arsip"}</p>
              </Link>
            </li>
            <li>
              <Link className="flex text-white justify-start items-center" to={'/'}>
                <RiLogoutCircleRFill />
                <p>{locale === "en" ? "Logout" : "Keluar"}</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to={'/'} className="btn btn-ghost text-xl text-white">
          {locale === "en" ? "Notes App" : "Aplikasi Catatan"}
        </Link>
      </div>
      <div className="navbar-end space-x-4 sm:space-x-7">
        <div
          onClick={toggleTheme}
          className="darkmode-toggle text-white dark:text-slate-300 cursor-pointer transition-none"
        >
          {theme === 'light' ? <FaMoon className="sm:text-xl text-lg" /> : <FaSun className="sm:text-xl text-lg" />}
        </div>
        <div
          onClick={toggleLocale}
          className="language-toggle text-white dark:text-slate-300 cursor-pointer transition-none"
        >
          <MdGTranslate className="sm:text-xl text-lg" />
        </div>
      </div>
    </div>
  );
}
