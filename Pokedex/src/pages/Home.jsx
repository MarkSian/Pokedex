import { useNavigate } from "react-router-dom";
import { generations } from "../utils/pokemonData";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-cyan-300 text-center mb-8">Pokédex Generations</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {generations.map((gen) => (
                    <div
                        key={gen.id}
                        className="card-xl cursor-pointer hover:bg-base-300 hover:scale-x-105 hover:scale-y-105 bg-base-200 border border-base-300 rounded-lg image-full w-96 shadow-sm flex items-center justify-center"
                        onClick={() => navigate(`/pokedex/${gen.id}`)}
                    >
                        <div className="flex flex-col items-center justify-center p-4 w-full h-full">
                            <img
                                src={gen.image}
                                alt={gen.name}
                                className="w-32 h-32 object-contain rounded-lg mb-4"
                            />
                            <h2 className="text-xl font-semibold text-cyan-300">{gen.name}</h2>
                            <p className='badge badge-outline text-cyan-400 border-cyan-700'>
                                Pokemon: {gen.offset + 1} - {gen.limit + gen.offset}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}