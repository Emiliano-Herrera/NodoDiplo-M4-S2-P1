// src/App.jsx
import React, { useState, useEffect } from "react";
import HeroHeader from "./components/Header"; // Cambiado de Header a HeroHeader
import Main from "./components/Main";
/* import Footer from "./components/Footer"; */
import WatchlistModal from "./components/WatchlistModal";
import "./index.css";

function App() {
  // Estado para la watchlist
  const [watchlist, setWatchlist] = useState([]);
  
  // Estado para el modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Cargar watchlist desde localStorage al iniciar
  useEffect(() => {
    const savedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(savedWatchlist);
  }, []);

  // Función para agregar película a watchlist
  const addToWatchlist = (pelicula) => {
    // Verificar si ya existe
    const exists = watchlist.some(item => item.id === pelicula.id);
    
    if (!exists) {
      const newWatchlist = [...watchlist, pelicula];
      setWatchlist(newWatchlist);
      localStorage.setItem("watchlist", JSON.stringify(newWatchlist));
      alert(`✅ ${pelicula.titulo} agregada a tu lista!`);
    } else {
      alert(`❌ ${pelicula.titulo} ya está en tu lista!`);
    }
  };

  // Función para eliminar película de watchlist
  const removeFromWatchlist = (id) => {
    const updatedList = watchlist.filter(item => item.id !== id);
    setWatchlist(updatedList);
    localStorage.setItem("watchlist", JSON.stringify(updatedList));
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* HeroHeader ahora recibe las props necesarias */}
      <HeroHeader 
        watchlistCount={watchlist.length}
        onOpenWatchlist={() => setIsModalOpen(true)}
      />
      
      {/* Eliminamos el botón flotante porque ya está en el Header */}
      
      {/* Pasamos la función addToWatchlist al Main */}
      <Main onAddToWatchlist={addToWatchlist} />
      
      {/* Modal de watchlist */}
      {isModalOpen && (
        <WatchlistModal 
          watchlist={watchlist}
          onClose={() => setIsModalOpen(false)}
          onRemove={removeFromWatchlist}
        />
      )}
      
      {/* <Footer /> */}
    </div>
  );
}

export default App;