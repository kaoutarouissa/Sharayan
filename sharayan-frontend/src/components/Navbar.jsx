import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/authService";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

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

  const espacePath =
    user?.role === "patient"
      ? "/patient/dashboard"
      : user?.role === "donneur"
        ? "/donneur/dashboard"
        : "/admin/dashboard";

  return (
    <nav className="w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="min-h-20 flex items-center justify-between gap-4">
          {/* ================= LOGO ================= */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 shrink-0"
          >
            <div className="relative">
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
            </div>

            <div className="flex flex-col leading-none">
              <span className="text-[#A6192E] font-bold text-lg sm:text-xl">
                Sharayan
              </span>

              <span className="text-[7px] sm:text-[8px] text-gray-500 font-bold tracking-[0.18em] mt-1">
                TRANSFUSION
                <br />
                SANGUINE
              </span>
            </div>
          </Link>

          {/* ================= DESKTOP ================= */}
          <div className="hidden md:flex items-center ml-auto">
            {/* Liens principaux */}
            <div className="flex items-center gap-8 lg:gap-10">
              {/* Urgence */}
              <Link
                to="/urgence"
                className="text-[#B31919] hover:text-[#8B1212] text-sm lg:text-base font-semibold leading-tight text-center transition"
              >
                Espace
                <br />
                d'urgence
              </Link>

              {user && (
                <>
                  {/* Mon espace */}
                  <Link
                    to={espacePath}
                    className="text-gray-800 hover:text-[#B31919] text-sm lg:text-base font-semibold whitespace-nowrap transition"
                  >
                    Mon espace
                  </Link>

                  {/* Profil */}
                  <Link to="/profile" className="flex items-center gap-3 group">
                    <div className="bg-[#8B0015] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm group-hover:bg-[#A6192E] transition shrink-0">
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
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-5 7h10a7 7 0 00-5-7z"
                        />
                      </svg>
                    </div>

                    <div className="flex flex-col leading-tight min-w-[85px]">
                      <span className="text-gray-900 font-semibold text-sm truncate max-w-[100px]">
                        {user.name}
                      </span>

                      <span className="text-gray-500 text-xs capitalize">
                        {user.role}
                      </span>
                    </div>
                  </Link>
                  <Link to="/notification">
                    <button className="relative p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors focus:outline-none">
                      {/* Icône Cloche */}
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>

                      <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-rose-500 rounded-full ring-2 ring-white"></span>
                    </button>
                  </Link>
                </>
              )}
            </div>

            {/* Déconnexion */}
            {user && (
              <div className="ml-8 lg:ml-10 pl-8 lg:pl-10  ">
                <button
                  onClick={handelLogout}
                  className="text-gray-800 hover:text-[#B31919] text-sm lg:text-base font-semibold whitespace-nowrap transition"
                >
                  Se déconnecter
                </button>
              </div>
            )}

            {/* Connexion */}
            {!user && (
              <Link
                to="/login"
                className="ml-8 bg-[#8B0015] hover:bg-[#A6192E] text-white px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition"
              >
                Se connecter
              </Link>
            )}
          </div>

          {/* ================= MOBILE ================= */}
          <div className="md:hidden flex items-center gap-2 shrink-0">
            {user && (
              <Link to="/profile">
                <div className="bg-[#8B0015] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-5 7h10a7 7 0 00-5-7z"
                    />
                  </svg>
                </div>
              </Link>
            )}

            {/* Burger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition"
              aria-label="Menu"
            >
              {menuOpen ? (
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
                    d="M6 6l12 12M18 6L6 18"
                  />
                </svg>
              ) : (
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-2">
            {/* Urgence */}
            <Link
              to="/urgence"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-[#B31919] font-semibold hover:bg-red-50 transition"
            >
              Espace d'urgence
            </Link>

            {user ? (
              <>
                {/* Mon espace */}
                <Link
                  to={espacePath}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-gray-800 font-semibold hover:bg-gray-50 transition"
                >
                  Mon espace
                </Link>

                {/* Profil */}
                <Link
                  to="/profile"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-gray-800 font-semibold hover:bg-gray-50 transition"
                >
                  Mon profil
                </Link>

                {/* Infos utilisateur */}
                <div className="px-4 py-3 bg-gray-50 rounded-xl">
                  <p className="text-sm font-semibold text-gray-900">
                    {user.name}
                  </p>

                  <p className="text-xs text-gray-500 capitalize mt-1">
                    {user.role}
                  </p>
                </div>
                <Link
                  to="/notification"
                  className="block px-4 py-3 rounded-xl text-gray-800 font-semibold hover:bg-gray-50 transition"
                >
                  Notifications
                </Link>
                {/* Déconnexion */}
                <button
                  onClick={(e) => {
                    handelLogout(e);
                    setMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 rounded-xl text-[#B31919] font-semibold hover:bg-red-50 transition"
                >
                  Se déconnecter
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-[#8B0015] hover:bg-[#A6192E] text-white px-5 py-3 rounded-xl font-semibold transition"
              >
                Se connecter
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
