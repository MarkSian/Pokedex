import axios from "axios";
import { useEffect, useState } from "react";
import { generations } from "../utils/pokemonData";
import { useParams, useNavigate, Link } from "react-router-dom";
import PokemonDetailHeader from "../components/PokemonDetail/PokemonDetailHeader";
import PokemonDetailStats from "../components/PokemonDetail/PokemonDetailStats";
import PokemonDetailMeta from "../components/PokemonDetail/PokemonDetailMeta";
import PokemonDetailNav from "../components/PokemonDetail/PokemonDetailNav";

// - this page will be invoked when the user clicks on a Pokemon Card in the Pokedex page.
// - api to cal Pokemon Detail by id: https://pokeapi.co/api/v2/pokemon/{id}
// - uses id from URL params to fetch full Pokemon details.
// - Dynamically determines the generation using .find on generations.
// - Displays info via the following components:
//     * PokemonDetailImage, PokemonDetailHeader, PokemonDetailMeta, PokemonDetailStats
// - We will implement navigation through the component PokemonDetailNav for moving between previous and next Pokemon. Button!

export default function PokemonDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [generation, setGeneration] = useState(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                // response will hold full Pokemon details
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
                // pokemonId will hold the id of the Pokemon
                const pokemonId = response.data.id;
                // find the generation of the single Pokemon by using find on generations
                const foundGen = generations.find(gen => {
                    console.log('gen:', gen);
                    console.log('pokemonId:', pokemonId);
                    return pokemonId > gen.offset && pokemonId <= gen.offset + gen.limit

                });
                console.log('foundGen:', foundGen);

                // setGeneration will set the generation of the Pokemon
                setGeneration(foundGen);
                // setPokemon will set the Pokemon details we want to display and use in the components
                setPokemon({
                    id: pokemonId,
                    name: response.data.name,
                    image: response.data.sprites.front_default,
                    types: response.data.types.map(type => type.type.name),
                    height: response.data.height / 10,
                    weight: response.data.weight / 10,
                    stats: response.data.stats.map(stat => ({
                        name: stat.stat.name,
                        value: stat.base_stat
                    }))
                });
            } catch (error) {
                console.error('Error fetching Pokémon details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemon();
    }, [id]);

    const handleNavigation = (direction) => {
        const newId = direction === 'next' ? parseInt(id) + 1 : parseInt(id) - 1;
        navigate(`/pokemon/${newId}`);
    };

    if (loading) return <div className="text-center py-8">Loading Pokémon data...</div>;
    if (!pokemon) return <div className="text-center py-8">Pokémon not found</div>;

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between mb-6">
                {/* {if a valid generation exist, then render a button that uses Link to navigate us to the Pokedex Generation that the pokemon belongs too} */}
                {generation && (
                    <Link to={`/pokedex/${generation.id}`} className="btn btn-primary">
                        Back to {generation.name}
                    </Link>
                )}
                <Link to="/" className="btn btn-primary">Home</Link>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/3  ">
                    <PokemonDetailHeader
                        name={pokemon.name}
                        id={pokemon.id}
                        types={pokemon.types}
                        image={pokemon.image}
                    />
                </div>

                <div className="w-full md:w-2/3">
                    <PokemonDetailMeta height={pokemon.height} weight={pokemon.weight} />
                    <PokemonDetailStats stats={pokemon.stats} />
                </div>
            </div>

            <PokemonDetailNav
                currentId={parseInt(id)}
                onNavigate={handleNavigation}
                generation={generation}
            />
        </div>
    );
}