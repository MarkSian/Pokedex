import { Link } from "react-router-dom";

const typeColors = {
    normal: "bg-gray-400",
    fire: "bg-red-500",
    water: "bg-blue-500",
    grass: "bg-green-500",
    electric: "bg-yellow-400 text-black",
    ice: "bg-cyan-200 text-black",
    fighting: "bg-orange-700",
    poison: "bg-purple-500",
    ground: "bg-yellow-700",
    flying: "bg-indigo-200 text-black",
    psychic: "bg-pink-500",
    bug: "bg-lime-500",
    rock: "bg-yellow-800",
    ghost: "bg-indigo-800 text-white",
    dragon: "bg-indigo-700 text-white",
    dark: "bg-gray-800 text-white",
    steel: "bg-gray-500",
    fairy: "bg-pink-300 text-black",
};

export default function PokemonGrid({ pokemon }) {
    return (
        <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id}>
            {/* wrap everything in link to make all the cards clickable */}
            <div className="card bg-base-200 hover:bg-base-300 transition cursor-pointer h-full">
                <figure className="px-4 pt-4">
                    <img
                        src={pokemon.image}
                        alt={pokemon.name}
                        className=" rounded-xl h-24 breathe"
                    />
                </figure>
                <div className="card-body items-center text-center p-4 shadow-2xl">
                    <h2 className="card-title capitalize">{pokemon.name}</h2>
                    <p>#{pokemon.id.toString().padStart(3, '0')}</p>
                    <div className="flex gap-2">
                        {pokemon.types.map(type => (
                            <span
                                key={type}
                                className={`badge capitalize ${typeColors[type] || "bg-gray-300"}`}
                            >
                                {type}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>

    )
};