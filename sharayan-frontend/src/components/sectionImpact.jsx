import React from 'react';

export default function ImpactSection() {
  const cards = [
    {
      id: 1,
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      stat: '3 Vies',
      statColor: 'text-[#A6192E]',
      subtitle: 'Sauvées par don',
      description:
        'Séparation immédiate en globules rouges, plasma frais congelé et concentré de plaquettes.',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ),
    },
    {
      id: 2,
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      stat: '10 000',
      statColor: 'text-gray-900',
      subtitle: 'Dons chaque jour',
      description:
        'Le besoin national incompressible pour subvenir aux urgences vitales et opérations programmées.',
      icon: (
        <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <circle cx="15" cy="15" r="2" />
        </svg>
      ),
    },
    {
      id: 3,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      stat: '42 Jours',
      statColor: 'text-blue-600',
      subtitle: 'Conservation max.',
      description:
        'Les globules rouges périment en 42j et les plaquettes en 7j seulement. Le renouvellement doit être perpétuel.',
      icon: (
        <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 22h14M5 2h14M17 22v-4.172a2 2 0 00-.586-1.414L12 12l-4.414 4.414A2 2 0 007 17.828V22M7 2v4.172a2 2 0 00.586 1.414L12 12l4.414-4.414A2 2 0 0017 6.172V2" />
        </svg>
      ),
    },
    {
      id: 4,
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      stat: '1 Million',
      statColor: 'text-gray-900',
      subtitle: 'De patients soignés',
      description:
        'Chaque année en France, grâce au courage bénévole et civique de concitoyens engagés.',
      icon: (
        <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5 5 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#f8faff] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Titre de la section */}
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          L'impact tangible de chaque prélèvement
        </h2>

        {/* Grille des 4 cartes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition duration-200"
            >
              <div>
                {/* Icône du haut */}
                <div
                  className={`w-10 h-10 rounded-xl ${card.iconBg} ${card.iconColor} flex items-center justify-center mb-6`}
                >
                  {card.icon}
                </div>

                {/* Chiffre / Statistique */}
                <h3 className={`text-3xl font-bold mb-1 ${card.statColor}`}>
                  {card.stat}
                </h3>

                {/* Sous-titre */}
                <p className="text-sm font-semibold text-slate-800 mb-3">
                  {card.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-500 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}