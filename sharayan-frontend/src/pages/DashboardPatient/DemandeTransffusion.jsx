import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  createDemandeTransfusion,
  displayDemandeTransfusion,
  deletdemandeTransfusion,
  updateDemandeTransfusion,
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

  const [demandEdit, setDemandEdit] = useState({
    id: "",
    date_transfusion: "",
    hopital: "",
    niveau_urgence: "",
    motif: "",
  });

  const [editId, setEditId] = useState(null);

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

  // Ajouter une demande
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const data = await createDemandeTransfusion(
        formData.date_transfusion,
        formData.hopital,
        formData.niveau_urgence,
        formData.motif
      );

      await loadDemandes();

      setSuccess("Demande de transfusion ajoutée avec succès !");

      console.log("Demande créée :", data);

      setFormData({
        date_transfusion: "",
        hopital: "",
        niveau_urgence: "",
        motif: "",
      });
    } catch (error) {
      console.error("Erreur :", error);

      setError(
        error.response?.data?.message ||
          "Erreur lors de l'envoi de la demande."
      );
    }
  };

  // Supprimer
  const handelDelete = async (id) => {
    try {
      await deletdemandeTransfusion(id);

      await loadDemandes();

      setSuccess("Demande annulée avec succès !");
      setError("");
    } catch (error) {
      console.error("Erreur :", error);

      setError(
        error.response?.data?.message ||
          "Erreur lors de l'annulation de la demande."
      );

      setSuccess("");
    }
  };

  // Modifier les champs
  const handleChangeedit = (e) => {
    setDemandEdit({
      ...demandEdit,
      [e.target.name]: e.target.value,
    });
  };

  // Ouvrir modification
  const handleEdit = (item) => {
    setDemandEdit({
      id: item.id,
      date_transfusion: item.date_transfusion || "",
      hopital: item.hopital || "",
      niveau_urgence: item.niveau_urgence || "",
      motif: item.motif || "",
    });

    setEditId(item.id);
    setError("");
    setSuccess("");
  };

  // Fermer modification
  const handleCancelEdit = () => {
    setEditId(null);

    setDemandEdit({
      id: "",
      date_transfusion: "",
      hopital: "",
      niveau_urgence: "",
      motif: "",
    });
  };

  // Enregistrer modification
const handelSubmitedit = async (e) => {
  e.preventDefault();
  setError("");
  setSuccess("");

  console.log("DONNÉES MODIFICATION :", demandEdit);

  try {
    await updateDemandeTransfusion(
      demandEdit.id,
      demandEdit.date_transfusion,
      demandEdit.hopital,
      demandEdit.niveau_urgence,
      demandEdit.motif
    );

    setSuccess("Demande modifiée avec succès !");
    setEditId(null);

    await loadDemandes();
  } catch (error) {
    console.log("STATUS :", error.response?.status);
    console.log("DATA LARAVEL :", error.response?.data);
    console.log("ERREURS VALIDATION :", error.response?.data?.errors);

    setError(
      error.response?.data?.message ||
        "Erreur lors de la modification de la demande."
    );
  }
};

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <div className="bg-gray-50 min-h-screen p-6 md:p-12 font-sans text-gray-800">
        <div className="max-w-4xl mx-auto space-y-10">

          {/* Formulaire de création */}
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

              {error && (
                <p className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
                  {error}
                </p>
              )}

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
                    Niveau d'urgence{" "}
                    <span className="text-red-500">*</span>
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
 {success && (
                <p className="text-green-600 text-sm bg-green-50 p-3 rounded-lg">
                  {success}
                </p>
              )}

              {error && (
                <p className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
                  {error}
                </p>
              )}
            <div className="w-full overflow-x-auto">

              <table className="w-full min-w-[700px] text-left border-collapse">

                <thead>
                  <tr className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                    <th className="pb-3 px-2 sm:px-3">
                      ID DEMANDE
                    </th>

                    <th className="pb-3 px-2 sm:px-3">
                      DATE
                    </th>

                    <th className="pb-3 px-2 sm:px-3">
                      GROUPE & HOPITAL
                    </th>

                    <th className="pb-3 px-2 sm:px-3">
                      NIVEAU D'URGENCE
                    </th>

                    <th className="pb-3 px-2 sm:px-3">
                      STATUT
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-50 text-xs sm:text-sm">

                  {demande.map((item) => (

                    <tr key={item.id}>

                      <td className="py-4 px-2 sm:px-3 font-bold text-red-600 whitespace-nowrap">
                        {item.id}
                      </td>

                      <td className="py-4 px-2 sm:px-3 text-gray-500 whitespace-nowrap">
                        {item.date_transfusion}
                      </td>

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

                      <td className="py-4 px-2 sm:px-3">

                        <div className="flex items-center gap-2 whitespace-nowrap">

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
                                onClick={() => handelDelete(item.id)}
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

 {/* Formulaire de modification */}
          {editId !== null && (
            <div className="bg-white rounded-xl p-8 shadow-sm border border-blue-100">

              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-800">
                    Modifier ma demande
                  </h2>

                  <p className="text-sm text-gray-400 mt-1">
                    Modifiez les informations de votre demande de transfusion.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="text-gray-400 hover:text-gray-600 text-xl"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handelSubmitedit} className="space-y-5">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  {/* Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date de transfusion
                    </label>

                    <input
                      type="date"
                      name="date_transfusion"
                      value={demandEdit.date_transfusion}
                      onChange={handleChangeedit}
                      required
                      className="w-full bg-slate-50 px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                    />
                  </div>

                  {/* Hôpital */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hôpital
                    </label>

                    <input
                      type="text"
                      name="hopital"
                      value={demandEdit.hopital}
                      onChange={handleChangeedit}
                      required
                      className="w-full bg-slate-50 px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                    />
                  </div>

                  {/* Niveau urgence */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Niveau d'urgence
                    </label>

                    <select
                      name="niveau_urgence"
                      value={demandEdit.niveau_urgence}
                      onChange={handleChangeedit}
                      required
                      className="w-full bg-slate-50 px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                    >
                      <option value="" disabled>
                        Sélectionner le niveau d'urgence
                      </option>

                      <option value="urgente">Urgente</option>
                      <option value="prioritaire">Prioritaire</option>
                      <option value="normale">Normale</option>
                    </select>
                  </div>

                  {/* Motif */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Motif
                    </label>

                    <textarea
                      name="motif"
                      value={demandEdit.motif}
                      onChange={handleChangeedit}
                      required
                      rows="3"
                      className="w-full bg-slate-50 px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 resize-none"
                    />
                  </div>
                </div>

                {/* Boutons */}
                <div className="flex flex-col sm:flex-row justify-end gap-3 pt-3">

                  <button
                    type="button"
                    onClick={handleCancelEdit}
                    className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition"
                  >
                    Annuler
                  </button>

                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#8B0015] text-white rounded-lg font-semibold hover:bg-[#700011] transition"
                  >
                    Enregistrer les modifications
                  </button>

                </div>
              </form>
            </div>
          )}

        </div>
      </div>

      <Footer />
    </div>
  );
}
