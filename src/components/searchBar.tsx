import { useState } from "react";
import { useGetPokemonListByNameQuery } from '../services/pokemonApi';

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    
    // We only trigger the API call if the name is at least 3 characters long
    // This prevents the app from crashing while the user types "p... i... k..."
    const { data, isFetching, isError } = useGetPokemonListByNameQuery(searchTerm, {
        skip: searchTerm.length < 3, 
    });

    return (
        <div>
            <input
                type="text"
                placeholder="Type exact name (e.g., lucario)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* While the "Drone" is flying to the API */}
            {isFetching && <p>Searching the Pokedex...</p>}

            {/* If we found a match! */}
            {data && !isFetching && (
                <div className="pokemon-card">
                    <img src={data.sprites.front_default} alt={data.name} />
                    <h2>{data.name.toUpperCase()}</h2>
                    <p>Number: #{data.id}</p>
                </div>
            )}

            {/* If the user finished typing and it's not a real Pokemon */}
            {isError && searchTerm.length >= 3 && (
                <p>Pokemon not found. Check your spelling!</p>
            )}
        </div>
    );
}

