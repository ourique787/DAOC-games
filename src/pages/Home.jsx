import { useState } from 'react';
import { SearchForm } from '../components/SearchForm';
import { GameList } from '../components/GameList';
import { GameDetails } from '../components/GameDetails';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { useFetch } from '../hooks/useFetch';
import { searchGames, getGameDetails } from '../services/api';

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGame, setSelectedGame] = useState(null);
  const [detailedGame, setDetailedGame] = useState(null);

  const { data, loading, error } = useFetch(
    () => searchGames(searchQuery),
    [searchQuery]
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const handleGameSelect = async (game) => {
    setSelectedGame(game);
    try {
      const details = await getGameDetails(game.id);
      setDetailedGame(details);
    } catch (err) {
      console.error('Erro ao buscar detalhes:', err);
    }
  };

  const handleCloseDetails = () => {
    setSelectedGame(null);
    setDetailedGame(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-2">
            🎮 DAOC Games
          </h1>
          <p className="text-gray-600 text-lg">
            Explore milhares de jogos incríveis
          </p>
        </header>

        <SearchForm 
          onSearch={handleSearch} 
          isLoading={loading}
          searchQuery={searchQuery}
          onClear={handleClearSearch}
        />

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {loading ? (
          <LoadingSpinner />
        ) : (
          <GameList games={data?.results} onGameSelect={handleGameSelect} />
        )}

        {detailedGame && (
          <GameDetails game={detailedGame} onClose={handleCloseDetails} />
        )}
      </div>
    </div>
  );
};