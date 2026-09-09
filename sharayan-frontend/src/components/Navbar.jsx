import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-100 py-3 px-6 md:px-10 flex items-center justify-between">

      {/* Logo + Nom */}
      <div className="flex items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-11 h-11"
        >
          <path
            fill="#A6192E"
            d="M50 5 C50 5 15 50 15 70 A35 35 0 0 0 85 70 C85 50 50 5 50 5 Z"
          />

          <path
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20 65 L35 65 L40 55 L45 75 L52 48 L58 78 L63 60 L68 65 L80 65"
          />
        </svg>

        <div className="flex flex-col justify-center">
          <span className="text-[#A6192E] font-bold text-xl leading-tight">
            Sharayan
          </span>

          <span className="text-[9px] text-gray-500 font-bold tracking-widest uppercase leading-tight mt-0.5">
            TRANSFUSION
            <br />
            SANGUINE
          </span>
        </div>
      </div>

      {/* Menu */}
      <div className="flex items-center gap-6 md:gap-10">


        {/* Espace d'urgence */}
        <a
          href="#"
          className="text-[#B31919] hover:text-[#8B1212] text-base font-semibold text-center leading-tight transition duration-200"
        >
          Espace
          <br />
          d'urgence
        </a>

        {/* Se connecter */}
        <a
          href="#"
          className="text-gray-900 hover:text-[#B31919] text-base font-semibold transition duration-200"
        >
          Se connecter
        </a>

        {/* Profil */}
        <a
          href="#"
          className="bg-[#8B0015] hover:bg-[#6B0010] text-white w-11 h-11 rounded-full flex items-center justify-center transition duration-200 shadow-sm"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </a>

      </div>
    </nav>
  );
}