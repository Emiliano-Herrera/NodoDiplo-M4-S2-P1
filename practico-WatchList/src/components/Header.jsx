// src/components/HeroHeader.jsx
import React from "react";
import { motion } from "motion/react";
import reactLogo from "../assets/Darth-Vader-PNG.png";
import starWarsLogo from "../assets/LogoNavbar.png";
import "./StarsBackground.css"; // Importamos las estrellas

const HeroHeader = ({ watchlistCount, onOpenWatchlist }) => {
  return (
    <header className="bg-black text-white border-b border-gray-800 relative overflow-hidden">
      {/* Fondo de estrellas - SOLO para el HeroHeader */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars-small"></div>
        <div className="stars-medium"></div>
        <div className="stars-large"></div>
        {/* Efecto de nebulosa de fondo */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-purple-900/10"></div>
      </div>

      {/* Barra de navegación superior (con z-index para estar sobre las estrellas) */}
      {/* Barra de navegación superior (con z-index para estar sobre las estrellas) */}
      <div className="relative z-10 container mx-auto max-w-6xl px-4 py-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-light tracking-tight text-white">
            The Movie
          </div>

          {/* Links de navegación - centrados */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#product"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Inicio
            </a>
            <a
              href="#customers"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Series
            </a>
            <a
              href="#pricing"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Peliculas
            </a>
            <a
              href="#docs"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Perfil
            </a>
          </div>

          {/* Botones de la derecha: Sign Up, Watchlist y Logout */}
          <div className="flex items-center gap-3">
            {/* Botón Sign Up */}
            <a
              href="#signup"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Sign Up →
            </a>

            {/* Botón Watchlist con contador */}
            <button
              onClick={onOpenWatchlist}
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-3 py-1.5 rounded-md transition-colors border border-gray-700 text-sm"
            >
              <span>📋</span>
              <span>WatchList</span>
              {watchlistCount > 0 && (
                <span className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {watchlistCount}
                </span>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Hero section con dos columnas (con z-index para estar sobre las estrellas) */}
      <div className="relative z-10 container mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda - Texto */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight leading-tight text-gray-300">
                The Movie
              </h1>
              <img
                src={starWarsLogo}
                alt="Star Wars"
                className="h-16 md:h-20 lg:h-24 xl:h-28 w-auto object-contain"
              />
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <button className="bg-gray-800 hover:bg-gray-700 text-gray-200 px-8 py-3 rounded-md transition-colors text-sm font-medium">
                Play
              </button>

              <a
                href="#questions"
                className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
              >
                Information
              </a>
            </div>
          </div>
          {/* Columna derecha - Logo/Ilustración animada */}
          <div className="flex justify-center items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="relative"
            >
              {/* Círculo animado de fondo (efecto de sable de luz) */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-blue-600/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Darth Vader animado */}
              <motion.div
                className="flex justify-center items-center"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={reactLogo}
                  alt="Darth Vader"
                  className="w-96 h-auto max-h-[500px] md:w-[450px] lg:w-[500px] xl:w-[550px] object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroHeader;
