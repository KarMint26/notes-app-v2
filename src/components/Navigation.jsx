import React from "react";
import { Link } from "react-router-dom";
import { FaArchive, FaGithub, FaHome, FaNotesMedical } from "react-icons/fa";

export default function Navigation() {
  return (
    <div className="navbar bg-base-100 py-2 pr-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="flex justify-start items-center" to={"/"}>
                <FaHome />
                <p>Homepage</p>
              </Link>
            </li>
            <li>
              <Link
                className="flex justify-start items-center"
                to={"/notes/new"}
              >
                <FaNotesMedical />
                <p>New Note</p>
              </Link>
            </li>
            <li>
              <Link
                className="flex justify-start items-center"
                to={"/notes/archieves"}
              >
                <FaArchive />
                <p>Archieves</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to={"/"} className="btn btn-ghost text-xl">
          Notes App
        </Link>
      </div>
      <div className="navbar-end">
        <Link
          to={"https://github.com/KarMint26"}
          target="_blank"
          className="github flex justify-center items-center gap-2 sm:gap-3 sm:px-5 px-3 py-[.5rem] sm:py-2 bg-slate-500 text-white rounded-lg sm:rounded-xl transition duration-300 hover:bg-slate-600 cursor-pointer text-xs sm:text-base"
        >
          <FaGithub className="sm:text-base text-xs" />
          <p>Github</p>
        </Link>
      </div>
    </div>
  );
}
