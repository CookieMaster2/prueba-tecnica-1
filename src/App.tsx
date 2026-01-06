import { useState } from "react";
import { useGetPokemonListByNameQuery } from './services/pokemonApi';
import PokemonGrid from './components/pokemonGrid';
import { PokemonCard } from './components/pokemonCard';
import { PokemonDetail } from './components/pokemonDetail';
import './styles/App.css';

export default function App() {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);

  const { data: searchResult, isFetching: isSearching } = useGetPokemonListByNameQuery(searchTerm, {
    skip: searchTerm.length < 3,
  });

  const handleCardClick = (name: string) => {
    setSelectedPokemon(name);
  };

  return (
    <div className="app-container">
      <div className="author-tag">Daniel García</div>

      {selectedPokemon ? (
        <PokemonDetail
          name={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      ) : (
        <>
          <div className="search-container">
            <h1 style={{ color: 'var(--poke-blue)' }}>¡Atrápalos a todos!</h1>
            <input
              className="search-input"
              placeholder="¿Qué Pokémon buscas? (Ej: Pikachu)"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {searchTerm.length >= 3 && (
            <div className="search-results">
              {isSearching ? (
                <p>Buscando...</p>
              ) : searchResult ? (
                <PokemonCard name={searchResult.name} onCardClick={handleCardClick} />
              ) : (
                <p>Pokémon no encontrado (revisa tu ortografía)</p>
              )}
            </div>
          )}
          {searchTerm.length < 3 && (
            <PokemonGrid onCardClick={handleCardClick} />
          )}
        </>
      )}
    </div>
  );
}