import React from 'react';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10 text-slate-800 space-y-8 font-sans">
      
      {/* En-tête principal */}
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
          Centre de Contrôle Administrateur
        </h1>
        <p className="text-xs md:text-sm text-slate-500 mt-1">
          Gestion opérationnelle des dons, traitement des demandes de sang et régulation des stocks en temps réel sur l'ensemble du réseau transfusionnel hospitalier.
        </p>
      </div>

      {/* SECTION 1: Demandes de Transfusion Sanguine */}
      <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[#A6192E] text-lg">🩸</span>
              <h2 className="text-lg font-bold text-slate-900">
                Demandes de Transfusion Sanguine
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Suivi en temps réel des requêtes hospitalières et urgences
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher patient, hôpital..."
                className="bg-slate-50 border border-slate-200 text-xs rounded-xl pl-8 pr-4 py-2 outline-none focus:border-[#A6192E] w-60"
              />
              <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
            </div>
            <button className="flex items-center gap-1.5 border border-slate-200 text-slate-600 text-xs font-medium px-3 py-2 rounded-xl hover:bg-slate-50">
              <span>⚡</span> Filtrer
            </button>
          </div>
        </div>

        {/* Tableau 1 */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="text-slate-500 font-semibold border-b border-slate-100 pb-2">
                <th className="pb-3">Patient</th>
                <th className="pb-3">Groupe</th>
                <th className="pb-3">Hôpital</th>
                <th className="pb-3">Date transfusion</th>
                <th className="pb-3">Urgence</th>
                <th className="pb-3">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="py-3.5 font-medium">Ahmed</td>
                <td className="py-3.5 font-semibold text-slate-900">O+</td>
                <td className="py-3.5">CHU</td>
                <td className="py-3.5">12/09/2026 <br/><span className="text-slate-400">10h</span></td>
                <td className="py-3.5"><span className="text-red-600 font-medium bg-red-50 px-2 py-0.5 rounded">🚨 Urgente</span></td>
                <td className="py-3.5 text-slate-500">En attente</td>
              </tr>
              <tr>
                <td className="py-3.5 font-medium">Sara</td>
                <td className="py-3.5 font-semibold text-slate-900">A+</td>
                <td className="py-3.5">Hôpital X</td>
                <td className="py-3.5">13/09/2026 <br/><span className="text-slate-400">14h</span></td>
                <td className="py-3.5 text-slate-600">Normal</td>
                <td className="py-3.5 text-emerald-600 font-medium">Acceptée</td>
              </tr>
              <tr>
                <td className="py-3.5 font-medium">Mohamed</td>
                <td className="py-3.5 font-semibold text-slate-900">B-</td>
                <td className="py-3.5">CHU Ibn Sina</td>
                <td className="py-3.5">14/09/2026 <br/><span className="text-slate-400">09h</span></td>
                <td className="py-3.5"><span className="text-red-600 font-medium bg-red-50 px-2 py-0.5 rounded">🚨 Urgente</span></td>
                <td className="py-3.5 text-amber-600 font-medium">En cours</td>
              </tr>
              <tr>
                <td className="py-3.5 font-medium">Yasmine</td>
                <td className="py-3.5 font-semibold text-slate-900">AB+</td>
                <td className="py-3.5">Clinique Centrale</td>
                <td className="py-3.5">15/09/2026 <br/><span className="text-slate-400">11h</span></td>
                <td className="py-3.5 text-slate-600">Normal</td>
                <td className="py-3.5 text-emerald-600 font-medium">Acceptée</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400">
          <span>Affichage de 4 sur 4 demandes</span>
          <span className="flex items-center gap-1 text-emerald-600"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Système synchronisé</span>
        </div>
      </section>

      {/* SECTION 2: Validation des Demandes de Don */}
      <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-slate-900">
            Validation des Demandes de Don
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Validation médicale des volontaires avant convocation en centre de prélèvement
          </p>
        </div>

        {/* Tableau 2 */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-100">
                <th className="p-3 rounded-l-xl">CANDIDAT DONNEUR</th>
                <th className="p-3">CENTRE & DATE SOUHAITÉE</th>
                <th className="p-3">STATUT</th>
                <th className="p-3 rounded-r-xl text-center">ACTIONS OPÉRATIONNELLES</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-red-100 text-[#A6192E] font-bold flex items-center justify-center text-xs">O-</span>
                    <div>
                      <p className="font-bold text-slate-900">Karim Mansouri</p>
                      <p className="text-[11px] text-slate-400">+212 6 61 89 20 • 34 ans (Poids: 78kg)</p>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  <p className="font-semibold text-slate-800">CHU Central - Pavillon A</p>
                  <p className="text-[11px] text-slate-400">📅 Aujourd'hui à 15:30</p>
                </td>
                <td className="p-3">
                  <span className="bg-amber-50 text-amber-600 px-2.5 py-1 rounded-full font-medium text-[11px]">En attente</span>
                </td>
                <td className="p-3">
                  <div className="flex items-center justify-center gap-2">
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition">✓ Accepter</button>
                    <button className="bg-indigo-50 text-indigo-600 hover:bg-indigo-100 px-3 py-1.5 rounded-lg text-xs font-medium transition">Refuser</button>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs">A+</span>
                    <div>
                      <p className="font-bold text-slate-900">Youssef Tazi</p>
                      <p className="text-[11px] text-slate-400">+212 7 01 88 34 50 • 41 ans (Poids: 82kg)</p>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  <p className="font-semibold text-slate-800">Hôpital Militaire d'Instruction</p>
                  <p className="text-[11px] text-slate-400">📅 Demain à 09:30</p>
                </td>
                <td className="p-3">
                  <span className="bg-amber-50 text-amber-600 px-2.5 py-1 rounded-full font-medium text-[11px]">En attente</span>
                </td>
                <td className="p-3">
                  <div className="flex items-center justify-center gap-2">
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition">✓ Accepter</button>
                    <button className="bg-indigo-50 text-indigo-600 hover:bg-indigo-100 px-3 py-1.5 rounded-lg text-xs font-medium transition">Refuser</button>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-red-100 text-[#A6192E] font-bold flex items-center justify-center text-xs">O+</span>
                    <div>
                      <p className="font-bold text-slate-900">Amina El Fassi</p>
                      <p className="text-[11px] text-slate-400">+212 6 43 92 18 04 • 29 ans (Poids: 61kg)</p>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  <p className="font-semibold text-slate-800">Clinique Internationale Al Shifa</p>
                  <p className="text-[11px] text-slate-400">📅 Demain à 10:45</p>
                </td>
                <td className="p-3">
                  <span className="bg-amber-50 text-amber-600 px-2.5 py-1 rounded-full font-medium text-[11px]">En attente</span>
                </td>
                <td className="p-3">
                  <div className="flex items-center justify-center gap-2">
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition">✓ Accepter</button>
                    <button className="bg-indigo-50 text-indigo-600 hover:bg-indigo-100 px-3 py-1.5 rounded-lg text-xs font-medium transition">Refuser</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 3: Traitement des Demandes de Sang */}
      <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-slate-900">
            Traitement des Demandes de Sang
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Régulation des allocations sanguines et arbitrages transfusionnels prioritaires
          </p>
        </div>

        {/* Tableau 3 */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-100">
                <th className="p-3 rounded-l-xl">PATIENT / PATHOLOGIE</th>
                <th className="p-3">GROUPE</th>
                <th className="p-3">HÔPITAL</th>
                <th className="p-3">DATE TRANSFUSION</th>
                <th className="p-3">URGENCE</th>
                <th className="p-3 rounded-r-xl">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="p-3">
                  <p className="font-bold text-slate-900">Patient #9482 (Polytraumatism)</p>
                  <p className="text-[11px] text-slate-400">📌 PTR-008</p>
                </td>
                <td className="p-3">
                  <span className="w-7 h-7 rounded-full bg-[#A6192E] text-white font-bold flex items-center justify-center text-xs">O-</span>
                </td>
                <td className="p-3">
                  <p className="font-semibold text-slate-800">CHU Central</p>
                  <p className="text-[11px] text-slate-400">Service Réanimation & Déchocage</p>
                </td>
                <td className="p-3 font-medium">🕒 Aujourd'hui • 10:15</td>
                <td className="p-3">
                  <span className="bg-red-100 text-red-700 font-bold px-2 py-0.5 rounded text-[10px]">🚨 URGENT VITAL</span>
                </td>
                <td className="p-3">
                  <button className="bg-[#A6192E] text-white px-3 py-1.5 rounded-lg font-medium hover:bg-red-800 transition">Validate / Dispense</button>
                </td>
              </tr>

              <tr>
                <td className="p-3">
                  <p className="font-bold text-slate-900">Patiente #3301 (Hémorragie délivrance)</p>
                  <p className="text-[11px] text-slate-400">📌 Maternité Sainte-Anne</p>
                </td>
                <td className="p-3">
                  <span className="w-7 h-7 rounded-full bg-[#A6192E] text-white font-bold flex items-center justify-center text-xs">B+</span>
                </td>
                <td className="p-3">
                  <p className="font-semibold text-slate-800">Maternité Sainte-Anne</p>
                  <p className="text-[11px] text-slate-400">Bloc Obstétrique</p>
                </td>
                <td className="p-3 font-medium">🕒 Aujourd'hui • 12:00</td>
                <td className="p-3">
                  <span className="bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded text-[10px]">PRIORITAIRE</span>
                </td>
                <td className="p-3">
                  <button className="bg-emerald-100 text-emerald-800 font-medium px-3 py-1.5 rounded-lg">Attribué</button>
                </td>
              </tr>

              <tr>
                <td className="p-3">
                  <p className="font-bold text-slate-900">Patient #5019 (Aplasie médullaire)</p>
                  <p className="text-[11px] text-slate-400">📌 Centre Régional d'Oncologie</p>
                </td>
                <td className="p-3">
                  <span className="w-7 h-7 rounded-full bg-slate-200 text-slate-800 font-bold flex items-center justify-center text-xs">A-</span>
                </td>
                <td className="p-3">
                  <p className="font-semibold text-slate-800">Centre Régional d'Oncologie</p>
                  <p className="text-[11px] text-slate-400">Hôpital de Jour</p>
                </td>
                <td className="p-3 font-medium">📅 Demain • 08:00</td>
                <td className="p-3">
                  <span className="bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded text-[10px]">PROGRAMMÉ</span>
                </td>
                <td className="p-3">
                  <button className="bg-slate-100 text-slate-700 font-medium px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-200">Valider / Expédier</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}