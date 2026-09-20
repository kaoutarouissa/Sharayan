import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { espaceUrgence } from "../services/espaceUregenceService";
export default function EspaceUrgence() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [demandes, setDemandes] = useState([]);
  const handelDonnerSong = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    if (user.role === "donneur") {
      navigate("/donneur/dashboard");
      return;
    }
    return navigate("/login");
  };
  useEffect(() => {
    const getDemandeUrgente = async () => {
      try {
        const data = await espaceUrgence();
        setDemandes(data.demande || []);
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    };

    getDemandeUrgente();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <div className="min-h-screen bg-slate-50 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            Espace Urgence
          </h1>

          <p className="text-sm text-slate-500 mb-6">
            Demandes de transfusion urgentes
          </p>

          <div className="grid gap-4">
            {demandes.map((demande) => (
              <div
                key={demande.id}
                className="bg-white border border-red-100 rounded-xl p-5 shadow-sm"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-bold text-slate-900">
                    Demande #{demande.id}
                  </h2>

                  <button
                    onClick={handelDonnerSong}
                    className="bg-red-600 text-white p-3  hover:bg-[#8B1212]  rounded-full text-xs font-bold flex items-center gap-1"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    Donner du sang
                  </button>
                </div>

                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold text-slate-700">
                      Groupe sanguin :
                    </span>{" "}
                    {demande.groupe_sanguin}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-700">
                      Motif :
                    </span>{" "}
                    {demande.motif}
                  </p>

                  <p>
                    <span className="font-semibold text-slate-700">
                      Statut :
                    </span>{" "}
                    {demande.status}
                  </p>

                  <p>
                    <span className="font-semibold text-slate-700">
                      En attente depuis le :
                    </span>{" "}
                    
                    {new Date(demande.created_at).toLocaleDateString("fr-FR")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
