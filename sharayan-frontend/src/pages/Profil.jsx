import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Profil } from "../services/authService";
export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [showEdit, setShowEdit] = useState(false);

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    telephone: user?.telephone || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await Profil(formData);

      localStorage.setItem("user", JSON.stringify(result.user));

      setShowEdit(false);

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Titre */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Mon profil
          </h1>

          <p className="text-gray-500 mt-2">
            Consultez et gérez vos informations personnelles.
          </p>
        </div>

        {/* Profil */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Header profil */}
          <div className="bg-[#8B0015] px-6 sm:px-8 py-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-white text-[#8B0015] flex items-center justify-center text-2xl font-bold shadow">
                {user?.name?.charAt(0).toUpperCase() || "U"}
              </div>

              <div className="text-center sm:text-left text-white">
                <h2 className="text-xl sm:text-2xl font-bold">
                  {user?.name || "Utilisateur"}
                </h2>

                <p className="text-white/80 mt-1">{user?.email}</p>

                <span className="inline-block mt-3 px-3 py-1 bg-white/20 rounded-full text-sm capitalize">
                  {user?.role || "Utilisateur"}
                </span>
              </div>
            </div>
          </div>

          {/* Informations */}
          {!showEdit ? (
            <div className="p-6 sm:p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                Informations personnelles
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nom */}
                <div>
                  <label className="text-sm text-gray-500">Nom complet</label>

                  <div className="mt-2 p-3 bg-gray-50 rounded-lg text-gray-900">
                    {user?.name || "-"}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm text-gray-500">Adresse email</label>

                  <div className="mt-2 p-3 bg-gray-50 rounded-lg text-gray-900 break-all">
                    {user?.email || "-"}
                  </div>
                </div>

                {/* Role */}
                <div>
                  <label className="text-sm text-gray-500">telephone</label>

                  <div className="mt-2 p-3 bg-gray-50 rounded-lg text-gray-900 capitalize">
                    {user?.telephone || "-"}
                  </div>
                </div>
              </div>

              {/* Bouton modification */}
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setShowEdit(true)}
                  className="px-5 py-3 bg-[#8B0015] text-white rounded-lg font-semibold hover:bg-[#700011] transition"
                >
                  Modifier le profil
                </button>
              </div>
            </div>
          ) : (
            /* Formulaire modification */
            <form onSubmit={handleSubmit} className="p-6 sm:p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                Modifier mon profil
              </h3>

              <div className="space-y-5">
                {/* Nom */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#8B0015]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adresse email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#8B0015]"
                  />
                </div>

                {/* Role non modifiable */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>

                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#8B0015]"
                  />
                </div>

                {/* Role non modifiable */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rôle
                  </label>

                  <input
                    type="text"
                    value={user?.role || ""}
                    disabled
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-100 text-gray-500"
                  />
                </div>
              </div>

              {/* Boutons */}
              <div className="mt-8 flex flex-col sm:flex-row justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowEdit(false)}
                  className="px-5 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50"
                >
                  Annuler
                </button>

                <button
                  type="submit"
                  className="px-5 py-3 bg-[#8B0015] text-white rounded-lg font-semibold hover:bg-[#700011]"
                >
                  Enregistrer les modifications
                </button>
              </div>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}
