import { Link } from "react-router-dom";

export default function PokemonGrid({ pokemon }) {
    return (
        <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id}>
            {/* wrap everything in link to make all the cards clickable */}
            <div className="card bg-base-200 hover:bg-base-300 transition cursor-pointer h-full">
                <figure className="px-4 pt-4">
                    <img
                        src={pokemon.image}
                        alt={pokemon.name}
                        className="rounded-xl h-24"
                    />
                </figure>
                <div className="card-body items-center text-center p-4 shadow-2xl">
                    <h2 className="card-title capitalize">{pokemon.name}</h2>
                    <p>#{pokemon.id.toString().padStart(3, '0')}</p>
                    <div className="flex gap-2">
                        {pokemon.types.map(type => (
                            <span key={type} className="badge badge-primary capitalize">{type}</span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>

    )
};