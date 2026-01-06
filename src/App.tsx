import { useGetPokemonListQuery } from './services/pokemonApi';
import { PokemonCard } from './components/pokemonCard';
import  SearchBar  from './components/searchBar';
import PokemonGrid from './components/pokemonGrid';

function App() {
  

  return (
    <>
      <SearchBar />
      <PokemonGrid />
    </>
  );
}

export default App;