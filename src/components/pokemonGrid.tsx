import { useState } from "react";
import { useGetPokemonListQuery } from '../services/pokemonApi';
import { PokemonCard } from './pokemonCard';
import '../styles/pokemonGrid.css';

export default function PokemonGrid({ onCardClick }: Readonly<{ onCardClick: (name: string) => void }>) {
  const [offset, setOffset] = useState(0);

  const { data } = useGetPokemonListQuery(offset);

  return (
    <>
      <div className="pokemon-grid">
        {data?.results.map(p => <PokemonCard key={p.name} name={p.name} onCardClick={function (name: string): void {
          onCardClick(name);
        } } />)}
      </div><div className="controls">
        <button onClick={() => setOffset(prev => Math.max(0, prev - 6))}>Anterior</button>
        <button onClick={() => setOffset(prev => prev + 6)}>Siguiente</button>
      </div>
    </>
  );
}