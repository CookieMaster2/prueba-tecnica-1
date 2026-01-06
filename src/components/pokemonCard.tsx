import { useGetPokemonListByNameQuery } from '../services/pokemonApi';

export const PokemonCard = ({ name }: { name: string }) => {
  // We call the "Detail" hook using the name from the list
  const { data, isLoading } = useGetPokemonListByNameQuery(name);
  if (isLoading) return <div className="skeleton">Loading...</div>;

  return (
    <div className="card">
      <img src={data?.sprites.front_default} alt={name} />
      <h3>{name}</h3>
      <p>Type: {data?.types[0].type.name}</p>
    </div>
  );
};