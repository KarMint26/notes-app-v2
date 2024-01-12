import React from 'react';
import Navigation from '../components/Navigation';

const Register = () => {
  return (
    <React.Fragment>
      <Navigation />
      <div className="w-full h-screen flex justify-center items-center flex-col space-y-5 px-3">
        <div className="header-register flex flex-col justify-center items-center space-y-1 sm:space-y-2">
          <div className="font-bold text-xl sm:text-2xl text-gray-700 dark:text-slate-400">Welcome Friend!</div>
          <div className="font-bold text-3xl sm:text-4xl text-gray-800 dark:text-slate-300">Register Account</div>
        </div>
        <form className="flex justify-center items-center flex-col space-y-4 w-auto sm:w-[55%] lg:w-[30%] h-fit">
          <input
            type="text"
            placeholder={`Username`}
            className="input input-bordered w-full px-5 dark:bg-slate-600 bg-slate-400/70 text-gray-800 dark:text-white dark:placeholder:text-slate-300 placeholder:text-gray-700"
            autoFocus
          />
          <input
            type="text"
            placeholder={`Password`}
            className="input input-bordered w-full px-5 dark:bg-slate-600 bg-slate-400/70 text-gray-800 dark:text-white dark:placeholder:text-slate-300 placeholder:text-gray-700"
          />
          <input
            type="text"
            placeholder={`Password Confirmation`}
            className="input input-bordered w-full px-5 dark:bg-slate-600 bg-slate-400/70 text-gray-800 dark:text-white dark:placeholder:text-slate-300 placeholder:text-gray-700"
          />
          <button type="submit" className='px-5 py-2 font-bold text-slate-200 dark:text-gray-800 bg-gray-800 dark:bg-slate-400 rounded-lg self-end'>Login</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Register;
