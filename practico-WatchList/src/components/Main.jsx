// src/components/Main.jsx
import React from "react";
import MovieCard from "./MovieCard";

const Main = ({ onAddToWatchlist }) => {
  return (
    <main className="grow container mx-auto max-w-7xl px-4 py-16"> {/* max-w-7xl es más grande */}
      <div className="space-y-8">
        <h2 className="text-3xl font-light tracking-tight text-white mb-2">
          Mi lista
        </h2>

        {/* Grid con menos columnas para que cada tarjeta sea más grande */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <MovieCard onAddToWatchlist={onAddToWatchlist} />
        </div>
      </div>
    </main>
  );
};

export default Main;