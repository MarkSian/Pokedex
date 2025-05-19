import { useNavigate } from "react-router-dom";
import { generations } from "../utils/pokemonData";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-8">Pokédex Generations</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">WOmp</div>



        </div>



    )
}