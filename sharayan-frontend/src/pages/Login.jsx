import React from "react";
import {Link} from 'react-router-dom'

export default function Login() {
  return (
    <div className="min-h-[85vh] bg-slate-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* <!-- Logo + Nom --> */}
        <div className="flex justify-center items-center gap-3 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="w-12 h-12"
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
          <span className="text-2xl font-bold text-[#A6192E] tracking-wide">
            Sharayan
          </span>
        </div>

        <h2 className="text-center text-2xl md:text-3xl font-extrabold text-slate-900">
          Connexion à votre espace
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          Vous n'avez pas encore de compte ?
          <Link to="/register" className="font-semibold text-[#A6192E] hover:underline">
            S'inscrire
          </Link>
        </p>
      </div>

      {/* <!-- Formulaire --> */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-sm border border-slate-200 rounded-2xl sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            {/* <!-- Champ Email --> */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Adresse email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="exemple@domaine.com"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#A6192E] focus:border-[#A6192E] outline-none text-sm transition"
              />
            </div>

            {/* <!-- Champ Mot de passe --> */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Mot de passe
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#A6192E] focus:border-[#A6192E] outline-none text-sm transition"
              />
            </div>

            {/* <!-- Se souvenir de moi & Mot de passe oublié --> */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="rememberMe"
                  className="w-4 h-4 text-[#A6192E] rounded border-slate-300 focus:ring-[#A6192E]"
                />
                <span className="text-slate-600 text-xs sm:text-sm">
                  Se souvenir de moi
                </span>
              </label>

              <a
                href="#"
                className="text-xs sm:text-sm font-semibold text-[#A6192E] hover:underline"
              >
                Mot de passe oublié ?
              </a>
            </div>

            {/* <!-- Bouton de validation --> */}
            <button
              type="submit"
              className="w-full bg-[#B31919] hover:bg-[#8B1212] text-white font-semibold py-3.5 rounded-xl transition duration-200 shadow-md"
            >
              Se connecter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
