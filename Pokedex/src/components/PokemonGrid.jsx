import PokemonCard from './PokemonCard';

export default function PokemonGrid({ pokemonList }) {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {pokemonList.map(pokemon => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>

    )
};