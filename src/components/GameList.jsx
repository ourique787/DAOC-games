import { GameCard } from './GameCard';

export const GameList = ({ games, onGameSelect }) => {
  if (!games || games.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Nenhum jogo encontrado</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {games.map((game) => (
        <GameCard key={game.id} game={game} onClick={onGameSelect} />
      ))}
    </div>
  );
};