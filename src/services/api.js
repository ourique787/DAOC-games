const API_KEY = 'api-key'; // Obtenha em https://rawg.io/apidocs
const BASE_URL = 'https://api.rawg.io/api';

export const searchGames = async (query = '', page = 1) => {
  const params = new URLSearchParams({
    key: API_KEY,
    page: page,
    page_size: 20,
    ...(query && { search: query })
  });

  const response = await fetch(`${BASE_URL}/games?${params}`);
  if (!response.ok) throw new Error('Erro ao buscar jogos');
  return response.json();
};

export const getGameDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/games/${id}?key=${API_KEY}`);
  if (!response.ok) throw new Error('Erro ao buscar detalhes do jogo');
  return response.json();
};