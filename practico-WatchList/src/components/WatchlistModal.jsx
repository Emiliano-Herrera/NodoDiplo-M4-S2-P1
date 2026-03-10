// src/components/WatchlistModal.jsx
import React from "react";

const WatchlistModal = ({ watchlist, onClose, onRemove }) => {
  return (
    <>
      {/* Fondo oscuro */}
      <div
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal */}
        <div
          className="bg-gray-900 border border-gray-800 rounded-xl w-full max-w-3xl max-h-[80vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <h2 className="text-2xl font-light text-white">Mi Watchlist</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl"
            >
              ✕
            </button>
          </div>

          {/* Lista de películas */}
          <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)]">
            {watchlist.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400">No hay películas en tu lista</p>
                <p className="text-gray-500 text-sm mt-2">
                  Agregá algunas desde el catálogo
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {watchlist.map((pelicula) => (
                  <div
                    key={pelicula.id}
                    className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700"
                  >
                    {/* Imagen pequeña */}
                    <div className="w-16 h-12 rounded overflow-hidden">
                      <img
                        src={pelicula.imagen}
                        alt={pelicula.titulo}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Título */}
                    <div className="flex-grow">
                      <h3 className="text-white">{pelicula.titulo}</h3>
                    </div>

                    {/* Botón eliminar */}
                    <button
                      onClick={() => onRemove(pelicula.id)}
                      className="px-4 py-2 bg-red-600/20 hover:bg-red-600/40 text-red-400 rounded-lg transition-colors"
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-800">
            <p className="text-gray-400">
              Total: <span className="text-white">{watchlist.length}</span>{" "}
              películas
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchlistModal;
