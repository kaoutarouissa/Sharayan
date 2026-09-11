import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { createDemandeTransfusion } from "../../services/demandeService";
import { useState } from "react";

export default function Patient() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    date_transfusion: "",
    hopital: "",
    groupe_sanguin: "",
    niveau_urgence: "",
    motif: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await createDemandeTransfusion(
        formData.date_transfusion,
        formData.hopital,
        formData.groupe_sanguin,
        formData.niveau_urgence,
        formData.motif,
      );
      setSuccess("Demande de transfusion ajoutée avec succès !");
      setError("");
      console.log("Demande créée :", data);

      // Réinitialiser le formulaire
      setFormData({
        date_transfusion: "",
        hopital: "",
        groupe_sanguin: "",
        niveau_urgence: "",
        motif: "",
      });
    } catch (error) {
      console.error("Erreur :", error);
      setError("Erreur lors de l'envoi de la demande.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <div className="bg-gray-50 min-h-screen p-6 md:p-12 font-sans text-gray-800">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Formulaire */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h1 className="text-2xl font-bold text-slate-800 mb-1">
              Formulaire de Demande de transfusion
            </h1>

            <p className="text-sm text-gray-400 mb-6">
              Transmission instantanée aux dépôts d'urgence des Établissements
              de Transfusion Sanguine et aux réseaux mobiles de donneurs
              compatibles.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {success && (
                <p className="text-green-600 text-sm bg-green-50 p-3 rounded-lg">
                  {success}
                </p>
              )}
              {error && <p className="text-red-500 text-sm">{error}</p>}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Date */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Date prévue de transfusion{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="date"
                    name="date_transfusion"
                    value={formData.date_transfusion}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                  />
                </div>

                {/* Hôpital */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Hôpital <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    name="hopital"
                    value={formData.hopital}
                    onChange={handleChange}
                    placeholder="Nom de l'hôpital"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                  />
                </div>

                {/* Motif */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Motif de la transfusion{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <textarea
                    name="motif"
                    value={formData.motif}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Indiquez le motif de la demande de transfusion"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 resize-none"
                  />
                </div>

                {/* Groupe sanguin */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Groupe Sanguin recherché{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <select
                    name="groupe_sanguin"
                    value={formData.groupe_sanguin}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                  >
                    <option value="" disabled>
                      Sélectionner un groupe
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

                {/* Niveau urgence */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Niveau d'urgence <span className="text-red-500">*</span>
                  </label>

                  <select
                    name="niveau_urgence"
                    value={formData.niveau_urgence}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                  >
                    <option value="" disabled>
                      Sélectionner le niveau d'urgence
                    </option>

                    <option value="urgente">Urgente</option>
                    <option value="prioritaire">Prioritaire</option>
                    <option value="normale">Normale</option>
                  </select>
                </div>
              </div>

              {/* Bouton */}
              <button
                type="submit"
                className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 rounded-lg transition duration-200 flex items-center justify-center gap-2 text-sm"
              >
                Envoyer la demande
              </button>
            </form>
          </div>

          {/* Historique */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 overflow-x-auto">
            <h2 className="text-xl font-bold text-slate-800 mb-1">
              Historique de mes Demandes de Sang
            </h2>

            <p className="text-sm text-gray-400 mb-6">
              Suivi en temps réel de vos demandes transmises aux centres
              régionaux
            </p>

            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="text-[11px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                  <th className="pb-3">ID DEMANDE</th>
                  <th className="pb-3">DATE</th>
                  <th className="pb-3">PATIENT & GROUPE</th>
                  <th className="pb-3">NIVEAU D'URGENCE</th>
                  <th className="pb-3">STATUT</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-50 text-xs">
                <tr>
                  <td className="py-4 font-bold text-red-600">2</td>

                  <td className="py-4 text-gray-500">
                    08 Mai 2024
                    <br />
                    <span className="text-[10px] text-gray-400">14:20</span>
                  </td>

                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <span className="bg-red-100 text-red-600 font-bold rounded-full w-7 h-7 flex items-center justify-center text-[10px]">
                        A+
                      </span>

                      <div>
                        <p className="font-medium text-slate-700">
                          Mme Fatima Zahra
                        </p>

                        <p className="text-[10px] text-gray-400">
                          Né(e) le 12/07/1990
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="py-4 font-medium text-red-500">Urgente</td>

                  <td className="py-4 font-medium text-amber-500">
                    En attente
                  </td>
                </tr>

                <tr>
                  <td className="py-4 font-bold text-red-600">3</td>

                  <td className="py-4 text-gray-500">
                    29 Avr 2024
                    <br />
                    <span className="text-[10px] text-gray-400">09:15</span>
                  </td>

                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-100 text-blue-600 font-bold rounded-full w-7 h-7 flex items-center justify-center text-[10px]">
                        B+
                      </span>

                      <div>
                        <p className="font-medium text-slate-700">
                          M. Youssef Berrada
                        </p>

                        <p className="text-[10px] text-gray-400">
                          Né(e) le 01/11/1978
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="py-4 font-medium text-emerald-500">
                    Prioritaire
                  </td>

                  <td className="py-4 font-medium text-emerald-600">
                    Acceptée
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
