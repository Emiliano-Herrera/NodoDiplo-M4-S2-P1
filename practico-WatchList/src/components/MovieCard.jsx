// src/components/MovieCard.jsx
import React from "react";
import peakyBlindersImg from "../assets/Peaky.jpg";
import walkingDeadImg from "../assets/TWD.jpg";
import breakingBadImg from "../assets/BrBa.jpg";
import racineImg from "../assets/hippo.jpg";
import listIcon from "../assets/list.png";

// Array de películas
const peliculas = [
  {
    id: 1,
    titulo: "PEAKY BLINDERS",
    imagen: peakyBlindersImg,
  },
  {
    id: 2,
    titulo: "WALKING DEAD",
    imagen: walkingDeadImg,
  },
  {
    id: 3,
    titulo: "Breaking Bad",
    imagen: breakingBadImg,
  },
  {
    id: 4,
    titulo: "RACINE",
    imagen: racineImg,
  },
];

const MovieCard = ({ onAddToWatchlist }) => {
  return (
    <>
      {peliculas.map((pelicula) => (
        <div
          key={pelicula.id}
          className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900 cursor-pointer transition-all duration-300 hover:border-gray-600"
        >
          {/* Contenedor de imagen */}
          <div className="aspect-[16/9] w-full overflow-hidden">
            <img
              src={pelicula.imagen}
              alt={pelicula.titulo}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Overlay oscuro al hacer hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300"></div>

          {/* Título y botón */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-medium text-sm md:text-base">
                {pelicula.titulo}
              </h3>

              {/* Botón para agregar a watchlist */}
              <button
                className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200 border border-gray-600"
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToWatchlist(pelicula); // Llama a la función que viene de App
                }}
              >
                <img
                  src={listIcon}
                  alt="Agregar a lista"
                  className="w-4 h-4 object-contain"
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieCard;
