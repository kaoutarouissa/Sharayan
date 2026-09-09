import React from 'react';
import bloodVideo from '../assets/vedio/blood.mp4';

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[85vh] overflow-hidden text-white flex items-center"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src={bloodVideo} type="video/mp4" />
      </video>

      {/* Overlay sombre pour rendre le texte lisible */}
      <div className="absolute inset-0 bg-black/60 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      {/* Contenu principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16 w-full flex flex-col justify-between h-full min-h-[70vh]">
        
        {/* Titres & Description */}
        <div className="max-w-2xl space-y-6 mt-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Donner son sang, <br />
            <span className="text-red-500">c'est sauver une vie.</span>
          </h1>

          <p className="text-gray-200 text-sm md:text-base leading-relaxed font-light">
            Un geste simple de 45 minutes qui transforme le destin direct d'un patient en réanimation,
            d'une jeune maman en maternité ou d'une personne en cancérologie. 1 seul don permet 
            de sauver jusqu'à <span className="font-bold text-white">3 vies</span>.
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#B31919] hover:bg-[#8B1212] text-white font-semibold px-6 py-3.5 rounded-xl flex items-center gap-2 transition duration-200 shadow-lg">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              Donner du sang
            </button>

            <button className="bg-[#B31919] hover:bg-[#8B1212] text-white font-semibold px-6 py-3.5 rounded-xl flex items-center gap-2 transition duration-200 shadow-lg">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              Demander du sang
            </button>
          </div>
        </div>

        {/* Badge Citation (En bas à droite) */}
        <div className="self-end mt-12 md:mt-0 max-w-sm">
          <div className="flex items-center gap-2 text-[11px] font-semibold text-gray-300 uppercase tracking-wider mb-2">
            <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4m-4 0H7" />
            </svg>
            CENTRE DE TRANSFUSION AGRÉÉ
          </div>
          <p className="text-sm font-medium italic text-gray-200 leading-snug">
            « Chaque jour, des milliers d'anonymes offrent le plus beau des dons. »
          </p>
        </div>

      </div>
    </section>
  );
}