import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  displayDemandesDonAdmin,
  dispalyDemandsTransfusion,
} from "../../services/demandeService";
import {
  accepterDemande,
  terminerDemande,
  refuserDemandeDon,
} from "../../services/validationDonService";
import { accepterDemandTransfusion } from "../../services/validationTransfusionService";
import { getinfoStock } from "../../services/stockService";
export default function AdminDashboard() {
  const [demandes, setDemandes] = useState([]);
  const [messageError, setMessageError] = useState("");
  const [accepterDonMessage, setaccepterDonMessage] = useState("");
  const [terminerDonMessage, setterminerDonMessage] = useState("");
  const [refuserDonMessage, setrefuserDonMessage] = useState("");
  const [stock, setStock] = useState([]);
  const [accepterTransfussionMessage, setaccepterTransfusion] = useState("");
  const [demandeTransfusion, setDemandetransfusion] = useState([]);
  useEffect(() => {
    const getDemandesDon = async () => {
      try {
        const data = await displayDemandesDonAdmin();

        console.log("DATA :", data);

        setDemandes(data.demande || []);
      } catch (error) {
        console.error(error);
      }
    };

    getDemandesDon();
  }, []);

  const handelAccepter = async (id) => {
    try {
      const data = await accepterDemande(id);
      console.log(data);
      const dataDemandes = await displayDemandesDonAdmin();
      setDemandes(dataDemandes.demande || []);
      setaccepterDonMessage("Demande est accepte");
    } catch (error) {
      // console.error(error)
      console.log("ERREUR :", error.response?.data);
      setMessageError(error.response?.data?.message);
    }
  };

  const handelTerminer = async (id) => {
    try {
      await terminerDemande(id);
      const dataDemandes = await displayDemandesDonAdmin();
      setDemandes(dataDemandes.demande || []);
      const dataStock = await getinfoStock();
      setStock(dataStock.stock || []);
      setterminerDonMessage(
        "le prélèvement  est fait et sera ajouter au stock sanguin",
      );
    } catch (error) {
      console.error(error.response?.data);
      setMessageError(error.response?.data?.message);
    }
  };
  const handelRefuser = async (id) => {
    try {
      const data = await refuserDemandeDon(id);
      setrefuserDonMessage(data.message);
      const dataDemandes = await displayDemandesDonAdmin();
      setDemandes(dataDemandes.demande || []);
    } catch (error) {
      console.error("error", error);
      setMessageError(error.response?.data?.message);
    }
  };
  useEffect(() => {
    const getstock = async () => {
      try {
        const data = await getinfoStock();
        console.log("data", data);
        setStock(data.stock || []);
      } catch (error) {
        console.error(error);
      }
    };
    getstock();
  }, []);
  const handelAccepterTransfusion = async (id) => {
    try {
      const data = await accepterDemandTransfusion(id);
      setaccepterTransfusion(data.message);
    } catch (error) {
      setMessageError(error.response?.data?.message);
    }
  };
  useEffect(() => {
    const getDemandesTransfusion = async () => {
      try {
        const data = await dispalyDemandsTransfusion();

        setDemandetransfusion(data.demande || []);
        console.log("DATA :", data);
        console.log("data demande", data.demande);
        console.log(demandeTransfusion);
      } catch (error) {
        console.error(error);
      }
    };
    getDemandesTransfusion();
  }, []);

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
            Gestion opérationnelle des dons, traitement des demandes de
            transfusion sanguines et régulation des stocks en temps réel sur
            l'ensemble du réseau transfusionnel hospitalier.
          </p>
        </div>

        {/* =========================================================
    SECTION 1 : DEMANDES DE DON
========================================================= */}
        <section className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-100">
          <div className="mb-5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              🩸 Demandes de Don
            </h2>

            <p className="text-xs text-slate-400 mt-1">
              Gestion et validation des demandes de don de sang
            </p>
            {messageError && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4">
                {messageError}
              </div>
            )}
            {accepterDonMessage && (
              <div className="bg-red-50 text-green-400 p-3 rounded-lg mb-4">
                {accepterDonMessage}
              </div>
            )}
            {terminerDonMessage && (
              <div className="bg-red-50 text-green-400 p-3 rounded-lg mb-4">
                {terminerDonMessage}
              </div>
            )}
            {refuserDonMessage && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4">
                {refuserDonMessage}
              </div>
            )}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-100">
                  <th className="p-3">DONNEUR</th>

                  <th className="p-3">DATE DEMANDE</th>
                  <th className="p-3">GROUP SANGUIN</th>

                  <th className="p-3">HOPITAL</th>

                  <th className="p-3">DATE PRELEVEMENT</th>
                  <th className="p-3">STATUT</th>

                  <th className="p-3 text-center">ACTION</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-slate-700">
                {demandes.map((item) => (
                  <tr key={item.id}>
                    <td className="p-3 font-semibold text-slate-900">
                      {item.user?.name}
                    </td>

                    <td className="p-3">
                      {" "}
                      {new Date(item.created_at).toLocaleDateString()}
                    </td>

                    <td className="p-3">{item.user?.groupe_sanguin}</td>
                    <td className="p-3"> {item.hopital}</td>
                    <td className="p-3">
                      {new Date(item.date_prelevement).toLocaleDateString()}
                    </td>

                    <td className="p-3">
                      {item.status === "en_attente" ? (
                        <span className="bg-amber-50 text-amber-600 px-2.5 py-1 rounded-full font-medium">
                          En attente
                        </span>
                      ) : item.status === "terminee" ? (
                        <span className="bg-amber-50 text-green-600 px-2.5 py-1 rounded-full font-medium">
                          Terminée
                        </span>
                      ) : item.status === "refusee" ? (
                        <span className="bg-amber-50 text-red-600 px-2.5 py-1 rounded-full font-medium">
                          Refusée
                        </span>
                      ) : (
                        <span>{item.status}</span>
                      )}
                    </td>

                    <td className="p-3 text-center">
                      <select
                        onChange={(e) => {
                          console.log("VALEUR :", e.target.value);
                          console.log("ID :", item.id);
                          if (e.target.value === "acceptee") {
                            handelAccepter(item.id);
                          }
                          if (e.target.value === "refusee") {
                            handelRefuser(item.id);
                          }
                          if (e.target.value === "terminee") {
                            handelTerminer(item.id);
                          }
                        }}
                        className="border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-[#A6192E]"
                      >
                        <option>Choisir</option>
                        {item.status === "en_attente" && (
                          <>
                            <option value="acceptee">Accepter</option>
                            <option value="refusee">Refuser</option>
                          </>
                        )}
                        {item.status === "acceptee" && (
                          <option value="terminee">Terminer</option>
                        )}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* =========================================================
    SECTION 2 : DEMANDES DE TRANSFUSION
========================================================= */}
        <section className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-100">
          <div className="mb-5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              🏥 Demandes de Transfusion
            </h2>

            <p className="text-xs text-slate-400 mt-1">
              Traitement et suivi des demandes de transfusion sanguine
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse min-w-[1000px]">
              <thead>
                <tr className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-100">
                  <th className="p-3">PATIENT</th>

                  <th className="p-3">DATE NAISSANCE</th>

                  <th className="p-3">GROUPE</th>

                  <th className="p-3">HÔPITAL</th>

                  <th className="p-3">DATE TRANSFUSION</th>
                  <th className="p-3">MOTIF</th>

                  <th className="p-3">URGENCE</th>

                  <th className="p-3">STATUT</th>

                  <th className="p-3 text-center">ACTION</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-slate-700">
                {demandeTransfusion.map((item) => (
                  <tr>
                    <td className="p-3 font-semibold text-slate-900">
                      {item.user.name}
                    </td>

                    <td className="p-3">{item.user.date_naissance}</td>

                    <td className="p-3 font-bold">
                      {item.groupe_sanguin || item.user.groupe_sanguin}
                    </td>

                    <td className="p-3">{item.hopital}</td>

                    <td className="p-3">{item.date_transfusion}</td>
                    <td className="p-3">{item.motif}</td>
                    <td className="p-3">
                      {item.niveau_urgence === "urgente" && (
                        <span className="bg-red-50 text-red-600 px-2 py-1 rounded font-medium">
                          {item.niveau_urgence}
                        </span>
                      )}
                      {item.niveau_urgence === "normale" && (
                        <span className="bg-red-50 text-green-600-600 px-2 py-1 rounded font-medium">
                          {item.niveau_urgence}
                        </span>
                      )}
                      {item.niveau_urgence === "prioritaire" && (
                        <span className="bg-red-50 text-orange-400 px-2 py-1 rounded font-medium">
                          {item.niveau_urgence}
                        </span>
                      )}
                    </td>

                    <td className="p-3">
                      {item.status === "en_attente" && (
                        <span className="bg-amber-50 text-amber-600 px-2.5 py-1 rounded-full font-medium">
                          {item.status}
                        </span>
                      )}
                      {item.status === "accepte" && (
                        <span className="bg-amber-50 text-green-600 px-2.5 py-1 rounded-full font-medium">
                          {item.status}
                        </span>
                      )}
                      {item.status === "terminee" && (
                        <span className="bg-amber-50 text-blue-600 px-2.5 py-1 rounded-full font-medium">
                          {item.status}
                        </span>
                      )}
                    </td>

                    <td className="p-3 text-center">
                      <select className="border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-[#A6192E]">
                        <option>Choisir</option>
                        <option value="acceptee">Accepter</option>
                        <option value="terminee">Terminer</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* =========================================================
    SECTION 3 : STOCK SANGUIN
========================================================= */}
        <section className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-100">
          <div className="mb-5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              📦 Stock Sanguin
            </h2>

            <p className="text-xs text-slate-400 mt-1">
              Suivi des poches de sang disponibles et de leur date d'expiration
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-100">
                  <th className="p-3">DONNEUR</th>

                  <th className="p-3">GROUPE</th>

                  <th className="p-3">DATE PRÉLÈVEMENT</th>

                  <th className="p-3">DATE EXPIRATION</th>

                  <th className="p-3">QUANTITÉ</th>

                  <th className="p-3">STATUT</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-slate-700">
                {stock.map((item) => (
                  <tr>
                    <td className="p-3 font-semibold text-slate-900">
                      {item.name}
                    </td>

                    <td className="p-3 font-bold text-[#A6192E]">
                      {item.groupe_sanguin}
                    </td>

                    <td className="p-3">{item.date_prelevement}</td>

                    <td className="p-3">{item.date_expiration}</td>

                    <td className="p-3">{item.quantite_stock}</td>

                    <td className="p-3">
                      <span className="bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-full font-medium">
                        {item.status_stock}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
