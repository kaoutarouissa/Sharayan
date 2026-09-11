
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/authService";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handelLogout = async (e) => {
    e.preventDefault();

    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
    }
  };

  return (
    <nav className="w-full bg-white border-b border-gray-100 py-3 px-4 sm:px-8 flex items-center">

      {/* Logo */}
      <div className="flex items-center gap-2">
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

        <div className="flex flex-col">
          <span className="text-[#A6192E] font-bold text-base sm:text-xl leading-tight">
            Sharayan
          </span>

          <span className="text-[7px] sm:text-[9px] text-gray-500 font-bold tracking-widest uppercase">
            TRANSFUSION
            <br />
            SANGUINE
          </span>
        </div>
      </div>

      {/* Partie droite */}
      <div className="ml-auto flex items-center gap-3 sm:gap-8">

        {/* Urgence */}
        <a
          href="#"
          className="text-[#B31919] hover:text-[#8B1212] text-xs sm:text-base font-semibold text-center leading-tight"
        >
          <span className="sm:hidden">Urgence</span>

          <span className="hidden sm:inline">
            Espace
            <br />
            d'urgence
          </span>
        </a>

        {user ? (
          <>
            {/* Profil */}
            <div className="flex items-center gap-2 sm:gap-3">

              {/* Icône profil */}
              <div className="bg-[#8B0015] text-white w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shadow-sm">
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

              {/* Nom + rôle : cachés sur téléphone */}
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-gray-900 font-semibold text-sm">
                  {user.name}
                </span>

                <span className="text-gray-500 text-xs capitalize">
                  {user.role}
                </span>
              </div>
            </div>

            {/* Déconnexion */}
            <button
              onClick={handelLogout}
              className="text-gray-900 hover:text-[#B31919] text-sm font-semibold transition"
            >
              <span className="hidden sm:inline">
                Se déconnecter
              </span>

              {/* Icône logout sur téléphone */}
              <svg
                className="sm:hidden w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H3m0 0l4-4m-4 4l4 4"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 5V4a2 2 0 012-2h5a2 2 0 012 2v16a2 2 0 01-2 2h-5a2 2 0 01-2-2v-1"
                />
              </svg>
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="text-gray-900 hover:text-[#B31919] text-sm font-semibold"
          >
            Se connecter
          </Link>
        )}
      </div>
    </nav>
  );
}
