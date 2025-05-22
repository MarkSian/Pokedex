export default function PokemonDetailHeader({ name, id, types, image }) {
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
    return (
        <div className="card bg-base-200 border border-base-300 rounded-xl items-center text-center p-4 shadow-2xl">
            <figure className="px-5 pt-10 breathe">
                <img
                    src={image}
                    alt={name}
                    className="rounded-xl h-48 object-contain"
                />
            </figure>
            <h2 className="card-title capitalize text-3xl mt-4 text-cyan-300">{name}</h2>
            <p className="text-2xl text-cyan-400 font-bold">#{id.toString().padStart(3, '0')}</p>
            <div className="flex gap-2 my-2 justify-center">
                {types.map(type => (
                    <span key={type} className={`badge badge-xl capitalize text-xl ${typeColors[type] || "bg-base-300 text-white"}`}>
                        {type}
                    </span>
                ))}
            </div>
        </div>
    );
}