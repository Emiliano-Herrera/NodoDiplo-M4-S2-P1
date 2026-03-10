🎬 Watchlist App - Sprint 2
Aplicación desarrollada con React + Vite que permite a los usuarios gestionar una lista personal de películas favoritas (watchlist) con persistencia en Local Storage.

📋 Tabla de Contenidos
Características

Tecnologías Utilizadas

Estructura del Proyecto

Instalación

Uso

Componentes

Hooks Personalizados

Persistencia de Datos

Estilos

Evaluación

✨ Características
✅ Visualización de listado de películas en tarjetas

✅ Agregar películas a watchlist personal

✅ Ver watchlist en modal interactivo

✅ Eliminar películas de watchlist

✅ Persistencia de datos con Local Storage

✅ Diseño responsive con Tailwind CSS

✅ Interfaz intuitiva y fácil de usar

🛠 Tecnologías Utilizadas
React 18 - Biblioteca principal

Vite - Herramienta de build y desarrollo

Tailwind CSS - Framework de estilos

Local Storage - Persistencia de datos

📁 Estructura del Proyecto
text
watchlist-app/
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Header.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieList.jsx
│   │   ├── WatchlistModal.jsx
│   │   └── pages/
│   │       └── Home.jsx
│   ├── hooks/
│   │   └── useWatchlist.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
🚀 Instalación
Clonar el repositorio

bash
git clone https://github.com/tu-usuario/watchlist-app.git
cd watchlist-app
Instalar dependencias

bash
npm install
Configurar Tailwind CSS (si es necesario)

bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Iniciar el servidor de desarrollo

bash
npm run dev
Abrir la aplicación

text
http://localhost:5173
💻 Uso
Agregar películas a watchlist
Navega por el listado de películas disponibles

Haz clic en "Agregar a mi lista" en cualquier tarjeta de película

La película se guardará automáticamente en tu watchlist

Ver watchlist
Haz clic en el botón "Ver mi lista" en el header

Se abrirá un modal mostrando todas tus películas guardadas

Cada película tendrá un botón para removerla de la lista

Eliminar películas
Desde el modal de watchlist, haz clic en "Remover" junto a la película que deseas eliminar

🧩 Componentes
Button.jsx
Componente reutilizable de botón con variantes de estilo.

Header.jsx
Header de la aplicación con título y botón para abrir watchlist.

MovieCard.jsx
Tarjeta individual de película que muestra:

Imagen de la película

Título

Botón para agregar a watchlist

MovieList.jsx
Componente que renderiza el grid de películas.

WatchlistModal.jsx
Modal interactivo que muestra:

Lista de películas guardadas

Botón para remover cada película

Botón para cerrar el modal

pages/Home.jsx
Página principal que integra todos los componentes y maneja el estado principal.

🎣 Hooks Personalizados
useWatchlist.js
Hook personalizado que encapsula toda la lógica de la watchlist:

javascript
const useWatchlist = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Cargar watchlist desde Local Storage
  useEffect(() => {
    const savedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(savedWatchlist);
  }, []);

  // Agregar película a watchlist
  const addToWatchlist = (movie) => {
    if (!watchlist.some(item => item.id === movie.id)) {
      const updatedList = [...watchlist, movie];
      setWatchlist(updatedList);
      localStorage.setItem("watchlist", JSON.stringify(updatedList));
    }
  };

  // Eliminar película de watchlist
  const removeFromWatchlist = (id) => {
    const updatedList = watchlist.filter(movie => movie.id !== id);
    setWatchlist(updatedList);
    localStorage.setItem("watchlist", JSON.stringify(updatedList));
  };

  return {
    watchlist,
    isModalOpen,
    setIsModalOpen,
    addToWatchlist,
    removeFromWatchlist
  };
};
💾 Persistencia de Datos
La aplicación utiliza Local Storage para mantener la watchlist entre sesiones:

Guardar datos:
javascript
localStorage.setItem("watchlist", JSON.stringify(updatedList));
Recuperar datos al iniciar:
javascript
useEffect(() => {
  const savedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
  setWatchlist(savedWatchlist);
}, []);
🎨 Estilos
La aplicación utiliza Tailwind CSS para los estilos, asegurando un diseño:

📱 Responsive - Adaptable a todos los dispositivos

🎯 Intuitivo - Interfaz clara y fácil de usar

✨ Moderno - Diseño contemporáneo con sombras y efectos sutiles

Ejemplo de estilos con Tailwind:
jsx
<div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
  <img className="w-full h-48 object-cover" src={movie.image} alt={movie.title} />
  <div className="p-4">
    <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      Agregar a mi lista
    </button>
  </div>
</div>
📝 Evaluación
El proyecto será evaluado considerando:

Criterio	Descripción
✅ Componentes	Correcta implementación y uso de props
✅ Estado	Manejo adecuado con useState y useEffect
✅ Persistencia	Correcto uso de Local Storage
✅ Estilos	Diseño coherente con Tailwind CSS
✅ Lógica	Implementación correcta de agregar/eliminar
