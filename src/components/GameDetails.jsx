export const GameDetails = ({ game, onClose }) => {
  if (!game) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={game.background_image || 'https://via.placeholder.com/800x400?text=No+Image'}
            alt={game.name}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
          >
            ✕
          </button>
        </div>
        
        <div className="p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{game.name}</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <span className="text-sm text-gray-500">Avaliação</span>
              <p className="text-lg font-semibold">⭐ {game.rating || 'N/A'}/5</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Lançamento</span>
              <p className="text-lg font-semibold">{game.released || 'N/A'}</p>
            </div>
          </div>

          <div className="mb-4">
            <span className="text-sm text-gray-500">Gêneros</span>
            <div className="flex flex-wrap gap-2 mt-1">
              {game.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <span className="text-sm text-gray-500">Plataformas</span>
            <div className="flex flex-wrap gap-2 mt-1">
              {game.platforms?.map((p) => (
                <span
                  key={p.platform.id}
                  className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                >
                  {p.platform.name}
                </span>
              ))}
            </div>
          </div>

          {game.description_raw && (
            <div>
              <span className="text-sm text-gray-500">Descrição</span>
              <p className="text-gray-700 mt-2 leading-relaxed">
                {game.description_raw}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};