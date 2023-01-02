import React from "react";

const Navbartop = () => {
  return (
    <div>
      <nav className="bg-[#019545] text-white text-3xl border-gray-200 px-2 py-2.5 rounded">
        <div className="container flex flexhandleApply-wrap  items-center justify-center mx-auto">
          <div className="w-full " id="navbar-default">
            <ul className="flex flex-col font-bold p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <li className="hover:text-blue-900">
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/applicantcopy">Download Application Copy</a>
              </li>
              <li>
                <a href="/">Admit Card</a>
              </li>
              <li>
                <a href="/">Help</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbartop;
