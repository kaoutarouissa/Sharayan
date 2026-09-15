import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  createDemandDon,
  displayDemandeDon,
  updateDemandeDon,
  deleteDemandeDon,
} from "../../services/demandeService";
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

      await createDemandDon(demande);

      const historiqueData = await displayDemandeDon();
      setHistorique(historiqueData.demande);

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

  const handleChange = (e) => {
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

  useEffect(() => {
    const getHistorique = async () => {
      try {
        const data = await displayDemandeDon();
        setHistorique(data.demande);
      } catch (error) {
        console.error("Erreur historique :", error);
      }
    };

    getHistorique();
  }, []);

  {
    /* pour changement de demande */
  }
  const [historique, setHistorique] = useState([]);
  const [showModification, setShowModification] = useState(false);

  const [modifications, setModification] = useState({
    id: "",
    hopital: "",
    date_prelevement: "",
  });

  // pour modification de la demande
  const handelChangemodification = (e) => {
    setModification({
      ...modifications,
      [e.target.name]: e.target.value,
    });
  };

  const handelModificationSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    try {
      await updateDemandeDon(
        modifications.id,
        modifications.hopital,
        modifications.date_prelevement,
      );

      const historiqueData = await displayDemandeDon();
      setHistorique(historiqueData.demande);

      setSuccess("Demande modifiée avec succès");
      setShowModification(false);
    } catch (erreur) {
      console.error(erreur);
      setError(erreur.response?.data?.message || "Échec de la modification");
    }
  };

  // pour suppression du demande
  const handeldeleteDemande = async (e, id) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const data = await deleteDemandeDon(id);
      const historiqueData = await displayDemandeDon();
      setHistorique(historiqueData.demande);
      setSuccess("demande supprimée avec succès");
    } catch (erreur) {
      console.error(erreur);
      setError(erreur.response?.data?.message || "suppression echouée");
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col justify-between">
      <Navbar />

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

            {error && (
              <p className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
                {error}
              </p>
            )}

            {/* Section 01 : Informations Personnelles */}
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
                    value={user?.name || ""}
                    placeholder="Nom du donneur"
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
                    value={user?.telephone || ""}
                    placeholder="Téléphone du donneur"
                    readOnly
                    className="w-full border border-gray-200 bg-gray-100 text-gray-500 rounded px-3 py-2 text-sm cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            {/* Section 02 : Détails du Don */}
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 border-b pb-1 border-gray-200">
                02. DÉTAILS DU RENDEZ-VOUS & GROUPE SANGUIN
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Hôpital */}
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

                {/* Date */}
                <div>
                  <label className="block text-xs font-semibold mb-1">
                    Date prélèvement *
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

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded text-sm transition"
            >
              Confirmer mon rendez-vous de don
            </button>
          </form>
        </section>

        {/* Historique */}
        {!showModification && (
          <section className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-bold text-gray-800 text-base">
                  Historique de mes Dons de Sang
                </h3>

                <p className="text-gray-500 text-xs">
                  Retrouvez le suivi en temps réel de vos démarches et
                  rendez-vous médicaux.
                </p>
              </div>
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
                    <th className="p-3">ACTIONS</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {historique.length > 0 ? (
                    historique.map((demande) => (
                      <tr key={demande.id} className="hover:bg-gray-50">
                        <td className="p-3 font-bold">#{demande.id}</td>

                        <td className="p-3 text-gray-600">
                          {demande.date_prelevement}
                        </td>

                        <td className="p-3">
                          <div className="font-medium text-gray-800">
                            {demande.hopital}
                          </div>
                        </td>

                        <td className="p-3 font-bold">
                          {demande.groupe_sanguin || "-"}
                        </td>

                        <td className="p-3">
                          <span
                            className={`text-xs font-bold px-2.5 py-1 rounded  bg-blue-100 ${
                              demande.status === "en_attente"
                                ? "text-amber-500"
                                : demande.status === "acceptee"
                                  ? "text-green-500"
                                  : demande.status === "terminee"
                                    ? "text-blue-950"
                                    : "text-gray-500"
                            }`}
                          >
                            {demande.status}
                          </span>
                        </td>
                        {demande.status === "en_attente" && (
                          <td className="p-3">
                            <button
                              className="cursor-pointer px-2.5 py-1"
                              onClick={() => {
                                setModification({
                                  id: demande.id,
                                  hopital: demande.hopital,
                                  date_prelevement: demande.date_prelevement,
                                });

                                setShowModification(true);
                              }}
                            >
                              ✏️
                            </button>

                            <button
                              onClick={(e) =>
                                handeldeleteDemande(e, demande.id)
                              }
                              className="cursor-pointer"
                            >
                              ❌
                            </button>
                          </td>
                        )}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="p-6 text-center text-gray-400">
                        Aucune demande de don pour le moment.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </main>

      {/* Modification demande */}
      {showModification && (
        <section className="max-w-4xl mx-auto w-full px-4 pb-8">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-red-100 border-l-4 border-l-red-600">
            <form className="space-y-7" onSubmit={handelModificationSubmit}>
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
                      value={user?.name || ""}
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
                      value={user?.telephone || ""}
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
                      value={
                        user?.groupe_sanguin || "Inconnu (À tester sur place)"
                      }
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

                    <input
                      name="hopital"
                      value={modifications.hopital}
                      onChange={handelChangemodification}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Nouvelle date souhaitée{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="date"
                      name="date_prelevement"
                      value={modifications.date_prelevement}
                      onChange={handelChangemodification}
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
                  onClick={() => setShowModification(false)}
                  className="px-6 border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold py-3 rounded-lg text-sm transition"
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
