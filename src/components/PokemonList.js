import PokemonListItems from "./PokemonListItem";
import pokemonArr from "../data";

const pokemon = pokemonArr.map((ele, idx) => {
    return <PokemonListItems {...ele} key={idx} />;
});

export default function pokemonList() {
    return <div>{pokemon}</div>;
}
