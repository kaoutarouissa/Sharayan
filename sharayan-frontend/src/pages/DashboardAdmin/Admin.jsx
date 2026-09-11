import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">

      <Navbar />

      <main className="flex-1 p-4 sm:p-6 md:p-10 text-slate-800 space-y-5 sm:space-y-8 font-sans">

        {/* =========================================================
            HEADER
        ========================================================= */}
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900">
            Centre de Contrôle Administrateur
          </h1>

          <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
            Gestion opérationnelle des dons, traitement des demandes de sang
            et régulation des stocks en temps réel sur l'ensemble du réseau
            transfusionnel hospitalier.
          </p>
        </div>


        {/* =========================================================
            SECTION 1 : DEMANDES DE TRANSFUSION
        ========================================================= */}
        <section className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-100">

          {/* Header section */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">

            <div>
              <div className="flex items-center gap-2">

                <span className="text-[#A6192E] text-lg">
                  🩸
                </span>

                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  Demandes de Transfusion Sanguine
                </h2>

              </div>

              <p className="text-xs text-slate-400 mt-0.5">
                Suivi en temps réel des requêtes hospitalières et urgences
              </p>
            </div>


            {/* Recherche + filtre */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">

              <div className="relative w-full sm:w-60">

                <input
                  type="text"
                  placeholder="Rechercher patient, hôpital..."
                  className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl pl-8 pr-4 py-2.5 outline-none focus:border-[#A6192E]"
                />

                <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
                  🔍
                </span>

              </div>

              <button className="flex items-center justify-center gap-1.5 border border-slate-200 text-slate-600 text-xs font-medium px-3 py-2.5 rounded-xl hover:bg-slate-50">
                <span>⚡</span>
                Filtrer
              </button>

            </div>

          </div>


          {/* =====================================================
              DESKTOP TABLE
          ===================================================== */}
          <div className="hidden md:block overflow-x-auto">

            <table className="w-full text-left text-xs border-collapse">

              <thead>
                <tr className="text-slate-500 font-semibold border-b border-slate-100">

                  <th className="pb-3">
                    Patient
                  </th>

                  <th className="pb-3">
                    Groupe
                  </th>

                  <th className="pb-3">
                    Hôpital
                  </th>

                  <th className="pb-3">
                    Date transfusion
                  </th>

                  <th className="pb-3">
                    Urgence
                  </th>

                  <th className="pb-3">
                    Statut
                  </th>

                </tr>
              </thead>


              <tbody className="divide-y divide-slate-100 text-slate-700">

                {/* Ahmed */}
                <tr>

                  <td className="py-3.5 font-medium">
                    Ahmed
                  </td>

                  <td className="py-3.5 font-semibold text-slate-900">
                    O+
                  </td>

                  <td className="py-3.5">
                    CHU
                  </td>

                  <td className="py-3.5">
                    12/09/2026
                    <br />
                    <span className="text-slate-400">
                      10h
                    </span>
                  </td>

                  <td className="py-3.5">
                    <span className="text-red-600 font-medium bg-red-50 px-2 py-0.5 rounded">
                      🚨 Urgente
                    </span>
                  </td>

                  <td className="py-3.5 text-slate-500">
                    En attente
                  </td>

                </tr>


                {/* Sara */}
                <tr>

                  <td className="py-3.5 font-medium">
                    Sara
                  </td>

                  <td className="py-3.5 font-semibold text-slate-900">
                    A+
                  </td>

                  <td className="py-3.5">
                    Hôpital X
                  </td>

                  <td className="py-3.5">
                    13/09/2026
                    <br />
                    <span className="text-slate-400">
                      14h
                    </span>
                  </td>

                  <td className="py-3.5 text-slate-600">
                    Normal
                  </td>

                  <td className="py-3.5 text-emerald-600 font-medium">
                    Acceptée
                  </td>

                </tr>


                {/* Mohamed */}
                <tr>

                  <td className="py-3.5 font-medium">
                    Mohamed
                  </td>

                  <td className="py-3.5 font-semibold text-slate-900">
                    B-
                  </td>

                  <td className="py-3.5">
                    CHU Ibn Sina
                  </td>

                  <td className="py-3.5">
                    14/09/2026
                    <br />
                    <span className="text-slate-400">
                      09h
                    </span>
                  </td>

                  <td className="py-3.5">
                    <span className="text-red-600 font-medium bg-red-50 px-2 py-0.5 rounded">
                      🚨 Urgente
                    </span>
                  </td>

                  <td className="py-3.5 text-amber-600 font-medium">
                    En cours
                  </td>

                </tr>


                {/* Yasmine */}
                <tr>

                  <td className="py-3.5 font-medium">
                    Yasmine
                  </td>

                  <td className="py-3.5 font-semibold text-slate-900">
                    AB+
                  </td>

                  <td className="py-3.5">
                    Clinique Centrale
                  </td>

                  <td className="py-3.5">
                    15/09/2026
                    <br />
                    <span className="text-slate-400">
                      11h
                    </span>
                  </td>

                  <td className="py-3.5 text-slate-600">
                    Normal
                  </td>

                  <td className="py-3.5 text-emerald-600 font-medium">
                    Acceptée
                  </td>

                </tr>

              </tbody>

            </table>

          </div>


          {/* =====================================================
              MOBILE CARDS
          ===================================================== */}
          <div className="md:hidden space-y-3">

            {/* Ahmed */}
            <div className="border border-slate-100 rounded-xl p-4 space-y-3">

              <div className="flex items-center justify-between gap-3">

                <div>
                  <p className="font-bold text-slate-900">
                    Ahmed
                  </p>

                  <p className="text-xs font-semibold text-slate-500">
                    Groupe O+
                  </p>
                </div>

                <span className="text-red-600 font-medium bg-red-50 px-2 py-1 rounded text-[10px]">
                  🚨 Urgente
                </span>

              </div>


              <div className="grid grid-cols-2 gap-3 text-xs">

                <div>
                  <p className="text-slate-400">
                    Hôpital
                  </p>

                  <p className="font-medium text-slate-700">
                    CHU
                  </p>
                </div>

                <div>
                  <p className="text-slate-400">
                    Transfusion
                  </p>

                  <p className="font-medium text-slate-700">
                    12/09/2026
                  </p>

                  <span className="text-slate-400">
                    10h
                  </span>
                </div>

              </div>


              <div className="pt-2 border-t border-slate-100">

                <p className="text-slate-400 text-[11px]">
                  Statut
                </p>

                <p className="text-slate-500 font-medium">
                  En attente
                </p>

              </div>

            </div>


            {/* Sara */}
            <div className="border border-slate-100 rounded-xl p-4 space-y-3">

              <div className="flex items-center justify-between gap-3">

                <div>
                  <p className="font-bold text-slate-900">
                    Sara
                  </p>

                  <p className="text-xs font-semibold text-slate-500">
                    Groupe A+
                  </p>
                </div>

                <span className="text-slate-600 bg-slate-50 px-2 py-1 rounded text-[10px]">
                  Normal
                </span>

              </div>


              <div className="grid grid-cols-2 gap-3 text-xs">

                <div>
                  <p className="text-slate-400">
                    Hôpital
                  </p>

                  <p className="font-medium text-slate-700">
                    Hôpital X
                  </p>
                </div>

                <div>
                  <p className="text-slate-400">
                    Transfusion
                  </p>

                  <p className="font-medium text-slate-700">
                    13/09/2026
                  </p>

                  <span className="text-slate-400">
                    14h
                  </span>
                </div>

              </div>


              <div className="pt-2 border-t border-slate-100">

                <p className="text-slate-400 text-[11px]">
                  Statut
                </p>

                <p className="text-emerald-600 font-medium">
                  Acceptée
                </p>

              </div>

            </div>


            {/* Mohamed */}
            <div className="border border-slate-100 rounded-xl p-4 space-y-3">

              <div className="flex items-center justify-between gap-3">

                <div>
                  <p className="font-bold text-slate-900">
                    Mohamed
                  </p>

                  <p className="text-xs font-semibold text-slate-500">
                    Groupe B-
                  </p>
                </div>

                <span className="text-red-600 font-medium bg-red-50 px-2 py-1 rounded text-[10px]">
                  🚨 Urgente
                </span>

              </div>


              <div className="grid grid-cols-2 gap-3 text-xs">

                <div>
                  <p className="text-slate-400">
                    Hôpital
                  </p>

                  <p className="font-medium text-slate-700">
                    CHU Ibn Sina
                  </p>
                </div>

                <div>
                  <p className="text-slate-400">
                    Transfusion
                  </p>

                  <p className="font-medium text-slate-700">
                    14/09/2026
                  </p>

                  <span className="text-slate-400">
                    09h
                  </span>
                </div>

              </div>


              <div className="pt-2 border-t border-slate-100">

                <p className="text-slate-400 text-[11px]">
                  Statut
                </p>

                <p className="text-amber-600 font-medium">
                  En cours
                </p>

              </div>

            </div>


            {/* Yasmine */}
            <div className="border border-slate-100 rounded-xl p-4 space-y-3">

              <div className="flex items-center justify-between gap-3">

                <div>
                  <p className="font-bold text-slate-900">
                    Yasmine
                  </p>

                  <p className="text-xs font-semibold text-slate-500">
                    Groupe AB+
                  </p>
                </div>

                <span className="text-slate-600 bg-slate-50 px-2 py-1 rounded text-[10px]">
                  Normal
                </span>

              </div>


              <div className="grid grid-cols-2 gap-3 text-xs">

                <div>
                  <p className="text-slate-400">
                    Hôpital
                  </p>

                  <p className="font-medium text-slate-700">
                    Clinique Centrale
                  </p>
                </div>

                <div>
                  <p className="text-slate-400">
                    Transfusion
                  </p>

                  <p className="font-medium text-slate-700">
                    15/09/2026
                  </p>

                  <span className="text-slate-400">
                    11h
                  </span>
                </div>

              </div>


              <div className="pt-2 border-t border-slate-100">

                <p className="text-slate-400 text-[11px]">
                  Statut
                </p>

                <p className="text-emerald-600 font-medium">
                  Acceptée
                </p>

              </div>

            </div>

          </div>


          {/* Footer section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400">

            <span>
              Affichage de 4 sur 4 demandes
            </span>

            <span className="flex items-center gap-1 text-emerald-600">

              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>

              Système synchronisé

            </span>

          </div>

        </section>



        {/* =========================================================
            SECTION 2 : VALIDATION DES DONS
        ========================================================= */}
        <section className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-100">

          <div className="mb-4">

            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Validation des Demandes de Don
            </h2>

            <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
              Validation médicale des volontaires avant convocation en
              centre de prélèvement
            </p>

          </div>


          {/* Desktop */}
          <div className="hidden md:block overflow-x-auto">

            <table className="w-full text-left text-xs border-collapse">

              <thead>

                <tr className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-100">

                  <th className="p-3 rounded-l-xl">
                    CANDIDAT DONNEUR
                  </th>

                  <th className="p-3">
                    CENTRE & DATE SOUHAITÉE
                  </th>

                  <th className="p-3">
                    STATUT
                  </th>

                  <th className="p-3 rounded-r-xl text-center">
                    ACTIONS OPÉRATIONNELLES
                  </th>

                </tr>

              </thead>


              <tbody className="divide-y divide-slate-100 text-slate-700">

                {/* Karim */}
                <tr>

                  <td className="p-3">

                    <div className="flex items-center gap-3">

                      <span className="w-8 h-8 rounded-full bg-red-100 text-[#A6192E] font-bold flex items-center justify-center text-xs">
                        O-
                      </span>

                      <div>

                        <p className="font-bold text-slate-900">
                          Karim Mansouri
                        </p>

                        <p className="text-[11px] text-slate-400">
                          +212 6 61 89 20 • 34 ans (Poids: 78kg)
                        </p>

                      </div>

                    </div>

                  </td>


                  <td className="p-3">

                    <p className="font-semibold text-slate-800">
                      CHU Central - Pavillon A
                    </p>

                    <p className="text-[11px] text-slate-400">
                      📅 Aujourd'hui à 15:30
                    </p>

                  </td>


                  <td className="p-3">

                    <span className="bg-amber-50 text-amber-600 px-2.5 py-1 rounded-full font-medium text-[11px]">
                      En attente
                    </span>

                  </td>


                  <td className="p-3">

                    <div className="flex items-center justify-center gap-2">

                      <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition">
                        ✓ Accepter
                      </button>

                      <button className="bg-indigo-50 text-indigo-600 hover:bg-indigo-100 px-3 py-1.5 rounded-lg text-xs font-medium transition">
                        Refuser
                      </button>

                    </div>

                  </td>

                </tr>


                {/* Youssef */}
                <tr>

                  <td className="p-3">

                    <div className="flex items-center gap-3">

                      <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs">
                        A+
                      </span>

                      <div>

                        <p className="font-bold text-slate-900">
                          Youssef Tazi
                        </p>

                        <p className="text-[11px] text-slate-400">
                          +212 7 01 88 34 50 • 41 ans (Poids: 82kg)
                        </p>

                      </div>

                    </div>

                  </td>


                  <td className="p-3">

                    <p className="font-semibold text-slate-800">
                      Hôpital Militaire d'Instruction
                    </p>

                    <p className="text-[11px] text-slate-400">
                      📅 Demain à 09:30
                    </p>

                  </td>


                  <td className="p-3">

                    <span className="bg-amber-50 text-amber-600 px-2.5 py-1 rounded-full font-medium text-[11px]">
                      En attente
                    </span>

                  </td>


                  <td className="p-3">

                    <div className="flex items-center justify-center gap-2">

                      <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition">
                        ✓ Accepter
                      </button>

                      <button className="bg-indigo-50 text-indigo-600 hover:bg-indigo-100 px-3 py-1.5 rounded-lg text-xs font-medium transition">
                        Refuser
                      </button>

                    </div>

                  </td>

                </tr>


                {/* Amina */}
                <tr>

                  <td className="p-3">

                    <div className="flex items-center gap-3">

                      <span className="w-8 h-8 rounded-full bg-red-100 text-[#A6192E] font-bold flex items-center justify-center text-xs">
                        O+
                      </span>

                      <div>

                        <p className="font-bold text-slate-900">
                          Amina El Fassi
                        </p>

                        <p className="text-[11px] text-slate-400">
                          +212 6 43 92 18 04 • 29 ans (Poids: 61kg)
                        </p>

                      </div>

                    </div>

                  </td>


                  <td className="p-3">

                    <p className="font-semibold text-slate-800">
                      Clinique Internationale Al Shifa
                    </p>

                    <p className="text-[11px] text-slate-400">
                      📅 Demain à 10:45
                    </p>

                  </td>


                  <td className="p-3">

                    <span className="bg-amber-50 text-amber-600 px-2.5 py-1 rounded-full font-medium text-[11px]">
                      En attente
                    </span>

                  </td>


                  <td className="p-3">

                    <div className="flex items-center justify-center gap-2">

                      <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition">
                        ✓ Accepter
                      </button>

                      <button className="bg-indigo-50 text-indigo-600 hover:bg-indigo-100 px-3 py-1.5 rounded-lg text-xs font-medium transition">
                        Refuser
                      </button>

                    </div>

                  </td>

                </tr>

              </tbody>

            </table>

          </div>


          {/* Mobile */}
          <div className="md:hidden space-y-3">

            {/* Karim */}
            <div className="border border-slate-100 rounded-xl p-4">

              <div className="flex items-start justify-between gap-3">

                <div className="flex items-center gap-3">

                  <span className="w-9 h-9 shrink-0 rounded-full bg-red-100 text-[#A6192E] font-bold flex items-center justify-center text-xs">
                    O-
                  </span>

                  <div>

                    <p className="font-bold text-slate-900">
                      Karim Mansouri
                    </p>

                    <p className="text-[10px] text-slate-400">
                      34 ans • 78kg
                    </p>

                  </div>

                </div>


                <span className="shrink-0 bg-amber-50 text-amber-600 px-2 py-1 rounded-full font-medium text-[10px]">
                  En attente
                </span>

              </div>


              <div className="mt-4 space-y-2 text-xs">

                <div>
                  <span className="text-slate-400">
                    Centre
                  </span>

                  <p className="font-semibold text-slate-800">
                    CHU Central - Pavillon A
                  </p>
                </div>

                <div>
                  <span className="text-slate-400">
                    Date souhaitée
                  </span>

                  <p className="font-medium text-slate-700">
                    📅 Aujourd'hui à 15:30
                  </p>
                </div>

              </div>


              <div className="flex gap-2 mt-4">

                <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg text-xs font-medium">
                  ✓ Accepter
                </button>

                <button className="flex-1 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 py-2 rounded-lg text-xs font-medium">
                  Refuser
                </button>

              </div>

            </div>


            {/* Youssef */}
            <div className="border border-slate-100 rounded-xl p-4">

              <div className="flex items-start justify-between gap-3">

                <div className="flex items-center gap-3">

                  <span className="w-9 h-9 shrink-0 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs">
                    A+
                  </span>

                  <div>

                    <p className="font-bold text-slate-900">
                      Youssef Tazi
                    </p>

                    <p className="text-[10px] text-slate-400">
                      41 ans • 82kg
                    </p>

                  </div>

                </div>


                <span className="shrink-0 bg-amber-50 text-amber-600 px-2 py-1 rounded-full font-medium text-[10px]">
                  En attente
                </span>

              </div>


              <div className="mt-4 space-y-2 text-xs">

                <div>
                  <span className="text-slate-400">
                    Centre
                  </span>

                  <p className="font-semibold text-slate-800">
                    Hôpital Militaire d'Instruction
                  </p>
                </div>

                <div>
                  <span className="text-slate-400">
                    Date souhaitée
                  </span>

                  <p className="font-medium text-slate-700">
                    📅 Demain à 09:30
                  </p>
                </div>

              </div>


              <div className="flex gap-2 mt-4">

                <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg text-xs font-medium">
                  ✓ Accepter
                </button>

                <button className="flex-1 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 py-2 rounded-lg text-xs font-medium">
                  Refuser
                </button>

              </div>

            </div>


            {/* Amina */}
            <div className="border border-slate-100 rounded-xl p-4">

              <div className="flex items-start justify-between gap-3">

                <div className="flex items-center gap-3">

                  <span className="w-9 h-9 shrink-0 rounded-full bg-red-100 text-[#A6192E] font-bold flex items-center justify-center text-xs">
                    O+
                  </span>

                  <div>

                    <p className="font-bold text-slate-900">
                      Amina El Fassi
                    </p>

                    <p className="text-[10px] text-slate-400">
                      29 ans • 61kg
                    </p>

                  </div>

                </div>


                <span className="shrink-0 bg-amber-50 text-amber-600 px-2 py-1 rounded-full font-medium text-[10px]">
                  En attente
                </span>

              </div>


              <div className="mt-4 space-y-2 text-xs">

                <div>
                  <span className="text-slate-400">
                    Centre
                  </span>

                  <p className="font-semibold text-slate-800">
                    Clinique Internationale Al Shifa
                  </p>
                </div>

                <div>
                  <span className="text-slate-400">
                    Date souhaitée
                  </span>

                  <p className="font-medium text-slate-700">
                    📅 Demain à 10:45
                  </p>
                </div>

              </div>


              <div className="flex gap-2 mt-4">

                <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg text-xs font-medium">
                  ✓ Accepter
                </button>

                <button className="flex-1 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 py-2 rounded-lg text-xs font-medium">
                  Refuser
                </button>

              </div>

            </div>

          </div>

        </section>



        {/* =========================================================
            SECTION 3 : TRAITEMENT DES DEMANDES DE SANG
        ========================================================= */}
        <section className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-100">

          <div className="mb-4">

            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Traitement des Demandes de Sang
            </h2>

            <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
              Régulation des allocations sanguines et arbitrages
              transfusionnels prioritaires
            </p>

          </div>


          {/* Desktop */}
          <div className="hidden md:block overflow-x-auto">

            <table className="w-full text-left text-xs border-collapse">

              <thead>

                <tr className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-100">

                  <th className="p-3 rounded-l-xl">
                    PATIENT / PATHOLOGIE
                  </th>

                  <th className="p-3">
                    GROUPE
                  </th>

                  <th className="p-3">
                    HÔPITAL
                  </th>

                  <th className="p-3">
                    DATE TRANSFUSION
                  </th>

                  <th className="p-3">
                    URGENCE
                  </th>

                  <th className="p-3 rounded-r-xl">
                    ACTION
                  </th>

                </tr>

              </thead>


              <tbody className="divide-y divide-slate-100 text-slate-700">

                {/* Patient 9482 */}
                <tr>

                  <td className="p-3">

                    <p className="font-bold text-slate-900">
                      Patient #9482 (Polytraumatisme)
                    </p>

                    <p className="text-[11px] text-slate-400">
                      📌 PTR-008
                    </p>

                  </td>


                  <td className="p-3">

                    <span className="w-7 h-7 rounded-full bg-[#A6192E] text-white font-bold flex items-center justify-center text-xs">
                      O-
                    </span>

                  </td>


                  <td className="p-3">

                    <p className="font-semibold text-slate-800">
                      CHU Central
                    </p>

                    <p className="text-[11px] text-slate-400">
                      Service Réanimation & Déchocage
                    </p>

                  </td>


                  <td className="p-3 font-medium">
                    🕒 Aujourd'hui • 10:15
                  </td>


                  <td className="p-3">

                    <span className="bg-red-100 text-red-700 font-bold px-2 py-0.5 rounded text-[10px]">
                      🚨 URGENT VITAL
                    </span>

                  </td>


                  <td className="p-3">

                    <button className="bg-[#A6192E] text-white px-3 py-1.5 rounded-lg font-medium hover:bg-red-800 transition">
                      Valider / Distribuer
                    </button>

                  </td>

                </tr>


                {/* Patient 3301 */}
                <tr>

                  <td className="p-3">

                    <p className="font-bold text-slate-900">
                      Patiente #3301 (Hémorragie délivrance)
                    </p>

                    <p className="text-[11px] text-slate-400">
                      📌 Maternité Sainte-Anne
                    </p>

                  </td>


                  <td className="p-3">

                    <span className="w-7 h-7 rounded-full bg-[#A6192E] text-white font-bold flex items-center justify-center text-xs">
                      B+
                    </span>

                  </td>


                  <td className="p-3">

                    <p className="font-semibold text-slate-800">
                      Maternité Sainte-Anne
                    </p>

                    <p className="text-[11px] text-slate-400">
                      Bloc Obstétrique
                    </p>

                  </td>


                  <td className="p-3 font-medium">
                    🕒 Aujourd'hui • 12:00
                  </td>


                  <td className="p-3">

                    <span className="bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded text-[10px]">
                      PRIORITAIRE
                    </span>

                  </td>


                  <td className="p-3">

                    <button className="bg-emerald-100 text-emerald-800 font-medium px-3 py-1.5 rounded-lg">
                      Attribué
                    </button>

                  </td>

                </tr>


                {/* Patient 5019 */}
                <tr>

                  <td className="p-3">

                    <p className="font-bold text-slate-900">
                      Patient #5019 (Aplasie médullaire)
                    </p>

                    <p className="text-[11px] text-slate-400">
                      📌 Centre Régional d'Oncologie
                    </p>

                  </td>


                  <td className="p-3">

                    <span className="w-7 h-7 rounded-full bg-slate-200 text-slate-800 font-bold flex items-center justify-center text-xs">
                      A-
                    </span>

                  </td>


                  <td className="p-3">

                    <p className="font-semibold text-slate-800">
                      Centre Régional d'Oncologie
                    </p>

                    <p className="text-[11px] text-slate-400">
                      Hôpital de Jour
                    </p>

                  </td>


                  <td className="p-3 font-medium">
                    📅 Demain • 08:00
                  </td>


                  <td className="p-3">

                    <span className="bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded text-[10px]">
                      PROGRAMMÉ
                    </span>

                  </td>


                  <td className="p-3">

                    <button className="bg-slate-100 text-slate-700 font-medium px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-200">
                      Valider / Expédier
                    </button>

                  </td>

                </tr>

              </tbody>

            </table>

          </div>


          {/* =====================================================
              MOBILE
          ===================================================== */}
          <div className="md:hidden space-y-3">

            {/* Patient 9482 */}
            <div className="border border-slate-100 rounded-xl p-4">

              <div className="flex items-start justify-between gap-3">

                <div>
                  <p className="font-bold text-slate-900 text-sm">
                    Patient #9482
                  </p>

                  <p className="text-[11px] text-slate-400">
                    Polytraumatisme
                  </p>
                </div>

                <span className="bg-red-100 text-red-700 font-bold px-2 py-1 rounded text-[9px]">
                  🚨 URGENT VITAL
                </span>

              </div>


              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">

                <div>

                  <p className="text-slate-400">
                    Groupe
                  </p>

                  <span className="inline-flex mt-1 w-7 h-7 rounded-full bg-[#A6192E] text-white font-bold items-center justify-center text-xs">
                    O-
                  </span>

                </div>


                <div>

                  <p className="text-slate-400">
                    Date
                  </p>

                  <p className="font-medium text-slate-700 mt-1">
                    🕒 Aujourd'hui
                  </p>

                  <span className="text-slate-400">
                    10:15
                  </span>

                </div>

              </div>


              <div className="mt-3">

                <p className="text-slate-400 text-[11px]">
                  Hôpital
                </p>

                <p className="font-semibold text-slate-800 text-xs">
                  CHU Central
                </p>

                <p className="text-[10px] text-slate-400">
                  Service Réanimation & Déchocage
                </p>

              </div>


              <button className="w-full mt-4 bg-[#A6192E] text-white py-2.5 rounded-lg font-medium text-xs hover:bg-red-800 transition">
                Valider / Distribuer
              </button>

            </div>


            {/* Patient 3301 */}
            <div className="border border-slate-100 rounded-xl p-4">

              <div className="flex items-start justify-between gap-3">

                <div>
                  <p className="font-bold text-slate-900 text-sm">
                    Patiente #3301
                  </p>

                  <p className="text-[11px] text-slate-400">
                    Hémorragie délivrance
                  </p>
                </div>

                <span className="bg-amber-100 text-amber-800 font-bold px-2 py-1 rounded text-[9px]">
                  PRIORITAIRE
                </span>

              </div>


              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">

                <div>

                  <p className="text-slate-400">
                    Groupe
                  </p>

                  <span className="inline-flex mt-1 w-7 h-7 rounded-full bg-[#A6192E] text-white font-bold items-center justify-center text-xs">
                    B+
                  </span>

                </div>


                <div>

                  <p className="text-slate-400">
                    Date
                  </p>

                  <p className="font-medium text-slate-700 mt-1">
                    🕒 Aujourd'hui
                  </p>

                  <span className="text-slate-400">
                    12:00
                  </span>

                </div>

              </div>


              <div className="mt-3">

                <p className="text-slate-400 text-[11px]">
                  Hôpital
                </p>

                <p className="font-semibold text-slate-800 text-xs">
                  Maternité Sainte-Anne
                </p>

                <p className="text-[10px] text-slate-400">
                  Bloc Obstétrique
                </p>

              </div>


              <button className="w-full mt-4 bg-emerald-100 text-emerald-800 py-2.5 rounded-lg font-medium text-xs">
                ✓ Attribué
              </button>

            </div>


            {/* Patient 5019 */}
            <div className="border border-slate-100 rounded-xl p-4">

              <div className="flex items-start justify-between gap-3">

                <div>
                  <p className="font-bold text-slate-900 text-sm">
                    Patient #5019
                  </p>

                  <p className="text-[11px] text-slate-400">
                    Aplasie médullaire
                  </p>
                </div>

                <span className="bg-blue-100 text-blue-800 font-bold px-2 py-1 rounded text-[9px]">
                  PROGRAMMÉ
                </span>

              </div>


              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">

                <div>

                  <p className="text-slate-400">
                    Groupe
                  </p>

                  <span className="inline-flex mt-1 w-7 h-7 rounded-full bg-slate-200 text-slate-800 font-bold items-center justify-center text-xs">
                    A-
                  </span>

                </div>


                <div>

                  <p className="text-slate-400">
                    Date
                  </p>

                  <p className="font-medium text-slate-700 mt-1">
                    📅 Demain
                  </p>

                  <span className="text-slate-400">
                    08:00
                  </span>

                </div>

              </div>


              <div className="mt-3">

                <p className="text-slate-400 text-[11px]">
                  Hôpital
                </p>

                <p className="font-semibold text-slate-800 text-xs">
                  Centre Régional d'Oncologie
                </p>

                <p className="text-[10px] text-slate-400">
                  Hôpital de Jour
                </p>

              </div>


              <button className="w-full mt-4 bg-slate-100 text-slate-700 py-2.5 rounded-lg border border-slate-200 font-medium text-xs hover:bg-slate-200">
                Valider / Expédier
              </button>

            </div>

          </div>

        </section>

      </main>


      <Footer />

    </div>
  );
}