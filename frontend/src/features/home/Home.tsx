const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-extrabold text-pastel-pink-700 mb-4 tracking-tight">
          🏋️ Re-Evolución
        </h1>
        <p className="text-2xl text-pastel-pink-600 font-medium">
          Tu espacio personal para conectar, sanar y potenciar tu movimiento.
        </p>
      </div>
      
      <div className="bg-gradient-to-br from-pastel-yellow-50 via-white to-pastel-pink-50 rounded-3xl shadow-xl p-10 border-2 border-pastel-yellow-200">
        <h2 className="text-3xl font-bold text-pastel-pink-800 mb-6">
          Tu camino de recuperación
        </h2>
        <p className="text-xl text-pastel-pink-700 mb-8 leading-relaxed">
          Sigue tu progreso y registra cada paso de tu evolución:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {/* Columna 1: Terapias y Gym */}
          <div className="space-y-4">
            <li className="flex items-center gap-4 p-3 list-none">
              <span className="text-3xl">💪</span>
              <span className="text-lg font-medium text-pastel-pink-700">Citas médicas</span>
            </li>
            <li className="flex items-center gap-4 p-3 list-none">
              <span className="text-3xl">💆</span>
              <span className="text-lg font-medium text-pastel-pink-700">Fisioterapia</span>
            </li>
            <li className="flex items-center gap-4 p-3 list-none">
              <span className="text-3xl">🧠</span>
              <span className="text-lg font-medium text-pastel-pink-700">Rehabilitación vestibular</span>
            </li>
          </div>

          {/* Columna 2: Actividades y Bienestar */}
          <div className="space-y-4">
            <li className="flex items-center gap-4 p-3 list-none border-l-4 border-pastel-pink-200 bg-white/40 rounded-r-xl">
              <span className="text-3xl">💃</span>
              <span className="text-lg font-medium text-pastel-pink-700">Estiramientos</span>
            </li>
            <li className="flex items-center gap-4 p-3 list-none border-l-4 border-blue-200 bg-blue-50/30 rounded-r-xl">
              <span className="text-3xl">🌊</span>
              <span className="text-lg font-medium text-pastel-pink-700">Actividades dirigidas</span>
            </li>
            <li className="flex items-center gap-4 p-3 list-none">
              <span className="text-3xl">✨</span>
              <span className="text-lg font-medium text-pastel-pink-700">Twerking/Padel </span>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;