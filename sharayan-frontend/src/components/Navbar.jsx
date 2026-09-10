
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="w-full bg-white border-b border-gray-100 py-3 px-4 sm:px-8 md:px-10 flex items-center justify-between">

      {/* Logo + Nom */}
      <div className="flex items-center gap-2 sm:gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-9 h-9 sm:w-11 sm:h-11"
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
          <span className="text-[#A6192E] font-bold text-base sm:text-xl leading-tight">
            Sharayan
          </span>

          <span className="text-[7px] sm:text-[9px] text-gray-500 font-bold tracking-widest uppercase leading-tight mt-0.5">
            TRANSFUSION
            <br />
            SANGUINE
          </span>
        </div>
      </div>

      {/* Menu */}
      <div className="flex items-center gap-4 sm:gap-8 md:gap-10">

        {/* Espace d'urgence */}
        <a
          href="#"
          className="text-[#B31919] hover:text-[#8B1212] text-xs sm:text-base font-semibold text-center leading-tight transition duration-200"
        >
          Espace
          <br />
          d'urgence
        </a>

        {/* Utilisateur connecté */}
        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Cercle profil */}
            <div className="bg-[#8B0015] text-white w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition duration-200 shadow-sm shrink-0">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-5 7h10a7 7 0 00-5-7z"
                />
              </svg>
            </div>

            {/* Nom + rôle */}
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-gray-900 font-semibold text-sm sm:text-base">
                {user.name}
              </span>

              <span className="text-gray-500 text-xs capitalize">
                {user.role}
              </span>
            </div>

          </div>
        ) : (
          /* Se connecter si personne n'est connecté */
          <Link
            to="/login"
            className="hidden sm:block text-gray-900 hover:text-[#B31919] text-sm sm:text-base font-semibold transition duration-200"
          >
            Se connecter
          </Link>
        )}

      </div>
    </nav>
  );
}

