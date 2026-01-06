import { useGetPokemonListByNameQuery } from "../services/pokemonApi";
import '../styles/pokemonDetails.css';

export const PokemonDetail = ({ name, onClose }: { name: string, onClose: () => void }) => {
    const { data, isLoading } = useGetPokemonListByNameQuery(name);

    if (isLoading) return <p className="text-center">Cargando...</p>;

    return (
        <div className="detail-view">
            <button onClick={onClose}>← Regresar</button>
            <div className="pokemon-card" >
                <img src={data.sprites.other['official-artwork'].front_default} alt={name} />
                <h2>{data.name.toUpperCase()}</h2>
                <div className="stats">
                    <p><strong>Height:</strong> {data.height}</p>
                    <p><strong>Weight:</strong> {data.weight}</p>
                    <p><strong>Types:</strong> {data.types.map((t: any) => t.type.name).join(', ')}</p>
                </div>
            </div>
        </div>
    );
};