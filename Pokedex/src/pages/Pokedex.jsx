import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { generations } from "../utils/pokemonData";
import PokemonGrid from "../components/PokemonGrid";
import axios from "axios";

export default function Pokedex() {
  const navigate = useNavigate();
  const { genId } = useParams();
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  const generation = generations.find((g) => g.id === parseInt(genId));

  //useEffect to fetch data
  useEffect(() => {
    // if statement: !generation navigate to home ('/')
    if (!generation) {
      navigate("/");
      return;
    }

    // fetchPokemon async function to fetch data from pokeapi
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?limit=${generation.limit}&offset=${generation.offset}`
        );
        const data = response.data.results;

        const detailedPokemon = await Promise.all(
          data.map(async (pokemon, index) => {
            // console.log('pokemon from data.map:', pokemon);
            const details = await axios.get(pokemon.url);
            console.log('pokemon from data.map:', details.data);
            return {
              id: generation.offset + index + 1, // index starts from 0, so we add 1
              name: pokemon.name,
              image: details.data.sprites.front_default,
              types: details.data.types.map((type) => type.type.name),
            };
          })
        );
        setPokemonList(detailedPokemon);
        // console.log('full URL Response:', response);
        // console.log('Data or response.data.results;:', data);
        // console.log('intended object:', detailedPokemon);

      } catch (error) {
        console.error("Error fetching pokemon data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [genId, generation, navigate]); // genId is the id of the generation we are fetching data for
  // generation is the object we are fetching data for
  // navigate is the function to navigate to home page

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (!generation)
    return <div className="text-center mt-8">Generation not found</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <button onClick={() => navigate("/")} className="btn btn-primary">
          Home
        </button>
        <h1 className="text-3xl font-bold">

          {generation.name} | Pokemons: {generation.offset + 1} -{" "} {/* empty space needed to space hyphen between both numbers */}
          {generation.limit + generation.offset}
        </h1>
        <div></div>
      </div>
      <PokemonGrid pokemonList={pokemonList} />
    </div>
  );
}
