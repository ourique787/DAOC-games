import { useState } from 'react';

export const GameCard = ({ game, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      onClick={() => onClick(game)}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105 hover:shadow-xl"
    >
      <div className="relative h-48 bg-gray-200">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}
        <img
          src={game.background_image || 'https://via.placeholder.com/300x200?text=No+Image'}
          alt={game.name}
          className={`w-full h-48 object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1">
          {game.name}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">⭐</span>
            <span className="text-sm font-semibold text-gray-700">
              {game.rating || 'N/A'}
            </span>
          </div>
          <span className="text-xs text-gray-500">
            {game.released || 'Data não disponível'}
          </span>
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          {game.genres?.slice(0, 2).map((genre) => (
            <span
              key={genre.id}
              className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded"
            >
              {genre.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};