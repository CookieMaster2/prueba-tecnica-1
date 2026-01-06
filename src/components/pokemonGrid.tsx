import { useState } from "react";
import { useGetPokemonListQuery } from '../services/pokemonApi';
import { PokemonCard } from './pokemonCard';

export default function PokemonGrid() {
  const [offset, setOffset] = useState(0);
  
  const { data, isFetching } = useGetPokemonListQuery(offset);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', opacity: isFetching ? 0.5 : 1 }}>
      {data?.results.map(p => <PokemonCard key={p.name} name={p.name} />)}
      
      <div className="controls">
        <button onClick={() => setOffset(prev => Math.max(0, prev - 6))}>Back</button>
        <button onClick={() => setOffset(prev => prev + 6)}>Next</button>
      </div>
    </div>
  );
}