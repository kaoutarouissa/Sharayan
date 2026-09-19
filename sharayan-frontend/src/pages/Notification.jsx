import react from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { displayNotifications } from "../services/notificationService";
export default function Notification() {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    const getNotifications = async () => {
      try {
        const data = await displayNotifications();

        console.log("NOTIFICATIONS :", data);

        setNotifications(data.notifications || []);
      } catch (error) {
        console.error(error);
      }
    };

    getNotifications();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 p-4 sm:p-6 md:p-10 text-slate-800 font-sans">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900">Notifications</h2>

          <p className="text-xs text-gray-500 mt-1 mb-6">
            Suivi en temps réel des urgences, de vos dons et des alertes
            médicales.
          </p>

          {/* Liste des notifications */}
          <div className="space-y-0">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="mb-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
              >
                {/* Date */}
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold text-red-800">
                    {new Date(notification.created_at).toLocaleString()}
                  </span>
                </div>

                {/* Contenu */}
                <p className="text-sm text-gray-700 leading-relaxed">
                  {notification.contenu}
                </p>

                {/* Envoyé par */}
                <p className="text-xs text-gray-400 mt-3">
                  Envoyé par :{" "}
                  <span className="font-semibold text-gray-600">Admin</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
