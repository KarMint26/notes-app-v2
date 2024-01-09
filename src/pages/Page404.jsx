import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import Image404 from "/Img-404.png";

export default function Page404() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-900 px-8">
      <div className="text-center">
        <div className="w-full justify-center items-center">
          <img src={Image404} alt="404-pages" className="scale-75" />
        </div>
        <div className="-translate-y-20">
          <h1 className="mt-6 text-2xl font-bold tracking-tight text-white sm:text-4xl">
            Uh-oh, sorry!
          </h1>
          <p className="mt-4 text-gray-500">We can't find that page.</p>
          <Link
            to={"/"}
            className="px-4 py-3 mt-3 text-white text-lg sm:text-xl bg-slate-600 rounded-lg transition duration-300 hover:bg-slate-700 cursor-pointer flex justify-center items-center gap-2"
          >
            <FaHome />
            <p>Back To Home</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
