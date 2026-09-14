import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { createDemandDon } from "../../services/demandeService";
import { getUser } from "../../services/authService";
import { useState, React, useEffect } from "react";
export default function Donneur() {
  const [demande, setDemande] = useState({
    hopital: "",
    date_prelevement: "",
  });
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const handelsubmit = async (e) => {
    setMessage("");
    setSuccess("");
    setError("");
    e.preventDefault();
    try {
      console.log(demande);

      const data = await createDemandDon(demande);
      setSuccess("Demande de don ajoutée avec succès !");
      setDemande({
        date_prelevement: "",
        hopital: "",
      });
    } catch (error) {
      console.error("Error : ", error);
      setError(
        error.response?.data?.message ||
          "Erreur lors de l'envoi de la demande.",
      );
    }
  };
  const handleChange = async (e) => {
    setDemande({
      ...demande,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getUser();
        setUser(data);
      } catch (error) {
        console.error(error);
        console.log("ERREUR COMPLETE :", error.response?.data);
        console.log("STATUS :", error.response?.status);
        console.log("MESSAGE :", error.response?.data?.error);
      }
    };

    getUserData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col justify-between">
      {/* Header */}

      <Navbar />
      {/* Main Content */}
      <main className="max-w-4xl mx-auto w-full p-4 my-6">
        {/* Formulaire Card */}
        <section className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100 mb-8">
          <h2 className="text-red-600 font-bold text-lg tracking-wide uppercase mb-1">
            Formulaire du don de Sang
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Votre geste sauve jusqu'à trois vies. Remplissez ce formulaire pour
            planifier votre rendez-vous de don.
          </p>

          <form onSubmit={handelsubmit} className="space-y-6">
            {success && (
              <p className="text-green-600 text-sm bg-green-50 p-3 rounded-lg">
                {success}
              </p>
            )}

            {message && (
              <p className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
                {message}
              </p>
            )}
            {/* Section 01 : Informations Personnelles (Automatiques) */}
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 border-b pb-1 border-gray-200">
                01. INFORMATIONS DU DONNEUR (PRÉ-REMPLIES)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    placeholder={user ? user.name : "Nom du donneur"}
                    readOnly
                    className="w-full border border-gray-200 bg-gray-100 text-gray-500 rounded px-3 py-2 text-sm cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">
                    Téléphone
                  </label>
                  <input
                    type="text"
                    value=""
                    placeholder={user ? user.telephone : ""}
                    readOnly
                    className="w-full border border-gray-200 bg-gray-100 text-gray-500 rounded px-3 py-2 text-sm cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            {/* Section 02 : Détails du Don & Rendez-vous */}
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 border-b pb-1 border-gray-200">
                02. DÉTAILS DU RENDEZ-VOUS & GROUPE SANGUIN
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Choix du Centre / Hôpital */}
                <div>
                  <label className="block text-xs font-semibold mb-1">
                    Centre / Hôpital *
                  </label>
                  <input
                    type="text"
                    name="hopital"
                    value={demande.hopital}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
                  />
                </div>

                {/* Date de Prélèvement */}
                <div>
                  <label className="block text-xs font-semibold mb-1">
                    Date prélèvemen *
                  </label>
                  <input
                    type="date"
                    name="date_prelevement"
                    value={demande.date_prelevement}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
            </div>

            {/* Bouton d'envoi */}
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded text-sm transition"
            >
              Confirmer mon rendez-vous de don
            </button>
          </form>
        </section>

        {/* Historique Card */}
        <section className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-bold text-gray-800 text-base">
                Historique de mes Dons de Sang
              </h3>
              <p className="text-gray-500 text-xs">
                Retrouvez le suivi en temps réel de vos démarches et rendez-vous
                médicaux.
              </p>
            </div>
            <span className="bg-gray-100 border border-gray-200 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
              3 dons
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-500 font-semibold text-xs border-b border-gray-200">
                  <th className="p-3">RÉF. DON</th>
                  <th className="p-3">DATE & HEURE</th>
                  <th className="p-3">CENTRE / LIEU</th>
                  <th className="p-3">GROUPE</th>
                  <th className="p-3">STATUT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-bold">#DS-2026-084</td>
                  <td className="p-3 text-gray-600">12 Avril 2026 • 10h30</td>
                  <td className="p-3">
                    <div className="font-medium text-gray-800">
                      Maison du Don Paris Nation
                    </div>
                  </td>
                  <td className="p-3 font-bold">O+</td>
                  <td className="p-3">
                    <span className="text-xs font-bold px-2.5 py-1 rounded bg-blue-100 text-blue-800">
                      Confirmé
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-bold">#DS-2026-021</td>
                  <td className="p-3 text-gray-600">24 Janv. 2026 • 14h15</td>
                  <td className="p-3">
                    <div className="font-medium text-gray-800">
                      Collecte Mobile Place de la République
                    </div>
                    <div className="text-xs text-gray-400">
                      Bus Transfusion 02
                    </div>
                  </td>
                  <td className="p-3 font-bold">O+</td>
                  <td className="p-3">
                    <span className="text-xs font-bold px-2.5 py-1 rounded bg-green-100 text-green-800">
                      Effectué
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-bold">#DS-2025-412</td>
                  <td className="p-3 text-gray-600">15 Sept. 2025 • 09h00</td>
                  <td className="p-3">
                    <div className="font-medium text-gray-800">
                      Centre Régional de Transfusion Nord
                    </div>
                    <div className="text-xs text-gray-400">
                      Service Prélèvements
                    </div>
                  </td>
                  <td className="p-3 font-bold">O+</td>
                  <td className="p-3">
                    <span className="text-xs font-bold px-2.5 py-1 rounded bg-green-100 text-green-800">
                      Effectué
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <section className="max-w-4xl mx-auto w-full px-4 pb-8">
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-red-100 border-l-4 border-l-red-600">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-7">
            <div>
              <p className="text-[11px] font-bold tracking-[0.18em] text-red-600 uppercase mb-2">
                Demande #DS-2026-084
              </p>
              <h2 className="text-gray-900 font-bold text-xl mb-1">
                Modifier ma demande de don
              </h2>
              <p className="text-gray-500 text-sm">
                Modifiez le centre ou la date de votre rendez-vous.
              </p>
            </div>
            <span className="self-start bg-red-50 border border-red-200 text-red-700 text-xs font-bold px-3 py-1.5 rounded-full">
              En attente
            </span>
          </div>

          <form className="space-y-7">
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 border-b pb-2 border-gray-200">
                01. Informations du donneur
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Nom & Prénom
                  </label>
                  <input
                    type="text"
                    value="Thomas Dupont"
                    readOnly
                    className="w-full border border-gray-200 bg-gray-50 text-gray-500 rounded-lg px-3 py-2.5 text-sm cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Téléphone
                  </label>
                  <input
                    type="text"
                    value="+212 600-000000"
                    readOnly
                    className="w-full border border-gray-200 bg-gray-50 text-gray-500 rounded-lg px-3 py-2.5 text-sm cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Groupe sanguin
                  </label>
                  <input
                    type="text"
                    value="Inconnu (À tester sur place)"
                    readOnly
                    className="w-full border border-gray-200 bg-gray-50 text-gray-500 rounded-lg px-3 py-2.5 text-sm cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 border-b pb-2 border-gray-200">
                02. Nouvelles disponibilités
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Changer de centre / hôpital{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    defaultValue="maison_don"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 bg-white"
                  >
                    <option value="chu">CHU Hassan II</option>
                    <option value="maison_don">Maison du Don</option>
                    <option value="centre_regional">
                      Centre Régional de Transfusion
                    </option>
                    <option value="unité_mobile">Collecte Mobile</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Nouvelle date souhaitée{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    defaultValue="2026-04-12"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-1">
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-sm transition shadow-sm"
              >
                Enregistrer les modifications
              </button>

              <button
                type="button"
                className="px-6 border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold py-3 rounded-lg text-sm transition"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
