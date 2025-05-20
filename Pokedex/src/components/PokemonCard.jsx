import { Link } from "react-router-dom";

export default function PokemonGrid({ pokemonList }) {
    return (
        <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id}></Link>

    )
};