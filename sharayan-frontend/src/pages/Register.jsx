import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/authService";
export default function Register() {
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [role, setRole] = useState("donneur");
  const [groupe_sanguin, setGroupSanguin] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handeleRegister = async (e) => {
    e.preventDefault();
    try {
      const data = await register(
        name,
        date,
        telephone,
        email,
        password,
        passwordConfirmation,
        role,
        groupe_sanguin,
      );
      alert(data.message);
      navigate("/login");
    } catch (error) {
      console.log("STATUS :", error.response?.status);
      console.log("DATA :", error.response?.data);

      setError(error.response?.data?.message || "Erreur de validation");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
        {/* Titre & Description */}
        <div className="text-center mb-6">
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">
            Inscription Simple – Sharayan
          </h1>
          <p className="text-xs text-slate-500 mt-2 leading-relaxed px-2">
            Renseignez vos coordonnées essentielles pour accéder immédiatement à
            la plateforme sécurisée de transfusion sanguine.
          </p>
        </div>

        {/* Formulaire */}
        <form onSubmit={handeleRegister} className="space-y-4">
          {/* Nom complet */}
          {error && <p className="text-red-500">{error}</p>}
          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-1.5">
              Nom complet
            </label>
            <div className="relative">
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jean Dupont"
                className="w-full bg-[#F2F4FF] text-slate-700 text-xs rounded-xl px-4 py-3 pr-10 border border-transparent focus:border-[#C81E3B] focus:bg-white outline-none transition placeholder-slate-400"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                👤
              </span>
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-1.5">
              Date de naissance
            </label>
            <div className="relative">
              <input
                type="date"
                name="date_naissance"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Jean Dupont"
                className="w-full bg-[#F2F4FF] text-slate-700 text-xs rounded-xl px-4 py-3 pr-10 border border-transparent focus:border-[#C81E3B] focus:bg-white outline-none transition placeholder-slate-400"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                👤
              </span>
            </div>
          </div>

          {/* Numéro de Téléphone */}
          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-1.5">
              Numéro de Téléphone
            </label>
            <div className="flex bg-[#F2F4FF] rounded-xl overflow-hidden focus-within:ring-1 focus-within:ring-[#C81E3B] focus-within:bg-white">
              <input
                type="tel"
                name="telephone"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                placeholder="06 12 34 56 78"
                className="w-full bg-transparent text-slate-700 text-xs px-3 py-3 border-none outline-none placeholder-slate-400"
              />
            </div>
          </div>

          {/* Adresse Email */}
          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-1.5">
              Adresse Email
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jean.dupont@email.com"
                className="w-full bg-[#F2F4FF] text-slate-700 text-xs rounded-xl px-4 py-3 pr-10 border border-transparent focus:border-[#C81E3B] focus:bg-white outline-none transition placeholder-slate-400"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                @
              </span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-1.5">
              Group Sanguin
            </label>
            <div className="relative">
              <select
                name="groupe_sanguin"
                value={groupe_sanguin}
                onChange={(e) => setGroupSanguin(e.target.value)}
                required
                className="w-full bg-[#F2F4FF] text-slate-700 text-xs rounded-xl px-4 py-3 border border-transparent focus:border-[#C81E3B] focus:bg-white outline-none transition"
              >
                <option value="" disabled>
                  Sélectionner votre groupe sanguin
                </option>

                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>
          {/* Mot de passe */}
          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-1.5">
              Mot de passe
            </label>
            <div className="relative">
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#F2F4FF] text-slate-700 text-xs rounded-xl px-4 py-3 pr-10 border border-transparent focus:border-[#C81E3B] focus:bg-white outline-none transition placeholder-slate-400"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
                🔒
              </span>
            </div>
          </div>

          {/* Confirmer le mot de passe */}
          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-1.5">
              Confirmer le mot de passe
            </label>
            <div className="relative">
              <input
                type="password"
                name="password_confirmation"
                placeholder="••••••••"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                className="w-full bg-[#F2F4FF] text-slate-700 text-xs rounded-xl px-4 py-3 pr-10 border border-transparent focus:border-[#C81E3B] focus:bg-white outline-none transition placeholder-slate-400"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
                🔄
              </span>
            </div>
          </div>

          {/* Rôle */}
          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-1.5">
              Rôle
            </label>
            <div className="relative">
              <select
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                className="w-full bg-[#F2F4FF] text-slate-700 text-xs rounded-xl px-4 py-3 pr-10 border border-transparent focus:border-[#C81E3B] focus:bg-white outline-none appearance-none cursor-pointer"
              >
                <option value="donneur">Donneur</option>
                <option value="patient">Patient</option>
                <option value="admin">Admin</option>
              </select>
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-xs pointer-events-none">
                ▼
              </span>
            </div>
          </div>

          {/* Bouton de création */}
          <button
            type="submit"
            className="w-full mt-2 bg-[#C81E3B] hover:bg-[#a5162e] text-white font-medium text-xs py-3.5 rounded-xl transition duration-200 shadow-md flex items-center justify-center gap-2"
          >
            <span>Créer mon compte</span>
            <span>→</span>
          </button>
        </form>

        {/* Lien vers Se connecter */}
        <p className="text-center text-xs text-slate-500 mt-5">
          Vous avez déjà un compte ?{" "}
          <Link
            to="/login"
            className="font-semibold text-[#C81E3B] hover:underline"
          >
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
}
