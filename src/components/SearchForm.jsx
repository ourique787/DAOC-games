import { useState } from 'react';

export const SearchForm = ({ onSearch, isLoading, searchQuery, onClear }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClear = () => {
    setSearchTerm('');
    onClear();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex gap-2 max-w-3xl mx-auto">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Buscar jogos... (ex: GTA, Minecraft, Zelda)"
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`px-6 py-3 text-white rounded-lg transition-colors font-semibold ${
            isLoading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isLoading ? 'Buscando...' : 'Buscar'}
        </button>
        {searchQuery && (
          <button
            type="button"
            onClick={handleClear}
            disabled={isLoading}
            className={`px-4 py-3 text-white rounded-lg transition-colors font-semibold text-sm ${
              isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
            title="Voltar para todos os jogos"
          >
            Início
          </button>
        )}
      </div>
    </form>
  );
};