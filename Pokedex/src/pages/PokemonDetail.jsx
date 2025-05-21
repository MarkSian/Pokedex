import axios from "axios";
import { useEffect, useState } from "react";
import { generations } from "../utils/pokemonData";
import { useParams, useNavigate, Link } from "react-router-dom";
import PokemonDetailHeader from "../components/PokemonDetail/PokemonDetailHeader";
import PokemonDetailStats from "../components/PokemonDetail/PokemonDetailStats";
import PokemonDetailImage from "../components/PokemonDetail/PokemonDetailImage";
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
    const [generations, setgenerations] = useState([null]);

    // useEffect
    useEffect(() => {
        // We will fetch Pokemon Data again as an async function
        const fetchPokemon = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon/{id}')


            } catch (error) {
                console.error("Error fetching Pokemon data:", error);
            }   
        }

    }), [];

        
        
        


    
    return ( 
        <>

        
        </>
    )





}