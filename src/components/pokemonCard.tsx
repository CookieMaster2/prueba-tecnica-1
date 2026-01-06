import { useGetPokemonListByNameQuery } from '../services/pokemonApi';
import '../styles/pokemonCard.css';

export const PokemonCard = ({ name, onCardClick }: { name: string; onCardClick: (name: string) => void }) => {
  const { data, isLoading } = useGetPokemonListByNameQuery(name);
  if (isLoading) return <div className="skeleton">Cargando...</div>;

  return (
    <button
      type="button"
      className="pokemon-card"
      aria-label={`Open ${name} details`}
      onClick={() => onCardClick(name)}
    >
      <img src={data?.sprites.front_default} alt={name} />
      <h3>{name}</h3>
      <p>Type: {data?.types[0].type.name}</p>
    </button>
  );
};