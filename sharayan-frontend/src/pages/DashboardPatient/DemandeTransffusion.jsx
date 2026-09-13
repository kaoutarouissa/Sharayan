import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  createDemandeTransfusion,
  displayDemandeTransfusion,
} from "../../services/demandeService";
import { useEffect, useState } from "react";

export default function Patient() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    date_transfusion: "",
    hopital: "",
    niveau_urgence: "",
    motif: "",
  });
  const [demande, setDemande] = useState([]);
  const loadDemandes = async () => {
    try {
      const data = await displayDemandeTransfusion();
      setDemande(data.demandeTransfusion);
    } catch (error) {
      console.error("Erreur lors du chargement :", error);
    }
  };

  useEffect(() => {
    loadDemandes();
  }, []);
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
        formData.niveau_urgence,
        formData.motif,
      );
      await loadDemandes();
      setSuccess("Demande de transfusion ajoutée avec succès !");
      setError("");
      console.log("Demande créée :", data);

      // Réinitialiser le formulaire
      setFormData({
        date_transfusion: "",
        hopital: "",
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
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-100">
            <h2 className="text-lg sm:text-xl font-bold text-slate-800 mb-1">
              Historique de mes Demandes de Transfusion
            </h2>

            <p className="text-xs sm:text-sm text-gray-400 mb-5 sm:mb-6">
              Suivi en temps réel de vos demandes transmises aux centres
              régionaux
            </p>

            {/* Tableau responsive */}
            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-[700px] text-left border-collapse">
                <thead>
                  <tr className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                    <th className="pb-3 px-2 sm:px-3">ID DEMANDE</th>

                    <th className="pb-3 px-2 sm:px-3">DATE</th>

                    <th className="pb-3 px-2 sm:px-3">GROUPE & HOPITAL</th>

                    <th className="pb-3 px-2 sm:px-3">NIVEAU D'URGENCE</th>

                    <th className="pb-3 px-2 sm:px-3">STATUT</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-50 text-xs sm:text-sm">
                  {demande.map((item) => (
                    <tr key={item.id}>
                      {/* ID */}
                      <td className="py-4 px-2 sm:px-3 font-bold text-red-600 whitespace-nowrap">
                        {item.id}
                      </td>

                      {/* DATE */}
                      <td className="py-4 px-2 sm:px-3 text-gray-500 whitespace-nowrap">
                        {item.date_transfusion}
                      </td>

                      {/* GROUPE + HOPITAL */}
                      <td className="py-4 px-2 sm:px-3">
                        <div className="flex items-center gap-2 min-w-[180px]">
                          <span className="bg-red-100 text-red-600 font-bold rounded-full w-7 h-7 flex items-center justify-center text-[10px] shrink-0">
                            {item.groupe_sanguin}
                          </span>

                          <div className="min-w-0">
                            <p className="font-medium text-slate-700 truncate max-w-[180px] sm:max-w-[220px]">
                              {item.hopital}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* URGENCE */}
                      <td
                        className={`py-4 px-2 sm:px-3 font-medium whitespace-nowrap ${
                          item.niveau_urgence === "urgente"
                            ? "text-red-500"
                            : item.niveau_urgence === "normale"
                              ? "text-green-500"
                              : item.niveau_urgence === "prioritaire"
                                ? "text-orange-500"
                                : "text-gray-500"
                        }`}
                      >
                        {item.niveau_urgence}
                      </td>

                      {/* STATUT + ACTIONS */}
                      <td className="py-4 px-2 sm:px-3">
                        <div className="flex items-center gap-2 whitespace-nowrap">
                          {/* Statut */}
                          <span
                            className={`font-medium ${
                              item.status === "en_attente"
                                ? "text-amber-500"
                                : item.status === "acceptee"
                                  ? "text-green-500"
                                  : item.status === "terminee"
                                    ? "text-blue-950"
                                    : item.status === "refusee"
                                      ? "text-red-500"
                                      : "text-gray-500"
                            }`}
                          >
                            {item.status}
                          </span>

                          {/* Actions */}
                          {item.status === "en_attente" && (
                            <div className="flex items-center gap-2 ml-1">
                              {/* Modifier */}
                              <button
                                onClick={() => handleEdit(item)}
                                className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50 text-blue-500 hover:bg-blue-100 hover:text-blue-700 transition shrink-0"
                                title="Modifier"
                              >
                                ✏️
                              </button>

                              {/* Annuler */}
                              <button
                                onClick={() => handleCancel(item.id)}
                                className="w-8 h-8 flex items-center justify-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-700 transition shrink-0"
                                title="Annuler"
                              >
                                ❌
                              </button>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
