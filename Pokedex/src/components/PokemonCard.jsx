import { Link } from "react-router-dom";

const typeColors = {
  normal: "bg-gray-600 text-gray-100",
  fire: "bg-orange-600 text-white",
  water: "bg-blue-700 text-white",
  grass: "bg-green-700 text-white",
  electric: "bg-yellow-400 text-black",
  ice: "bg-cyan-400 text-black",
  fighting: "bg-orange-900 text-white",
  poison: "bg-purple-800 text-white",
  ground: "bg-yellow-800 text-white",
  flying: "bg-indigo-700 text-white",
  psychic: "bg-pink-700 text-white",
  bug: "bg-lime-700 text-white",
  rock: "bg-yellow-900 text-white",
  ghost: "bg-indigo-900 text-white",
  dragon: "bg-indigo-800 text-white",
  dark: "bg-gray-900 text-white",
  steel: "bg-gray-500 text-white",
  fairy: "bg-pink-400 text-black",
};

export default function PokemonCard({ pokemon }) {
  return (
    <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id}>
      <div className="card bg-base-200 border border-base-300 rounded-xl hover:bg-base-300 transition cursor-pointer h-full">
        <figure className="px-4 pt-4">
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className="h-24 breathe"
          />
        </figure>
        <div className="card-body rounded-xl items-center text-center p-4 shadow-2xl">
          <h2 className="card-title capitalize text-cyan-300">{pokemon.name}</h2>
          <p className="text-cyan-400 font-bold">#{pokemon.id.toString().padStart(3, "0")}</p>
          <div className="flex gap-2">
            {pokemon.types.map((type) => (
              <span
                key={type}
                className={`badge capitalize ${typeColors[type] || "bg-base-300 text-white"}`}
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
