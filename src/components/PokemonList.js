import PokemonListItems from "./PokemonListItem";
import pokemonArr from "../data";


export default function pokemonList(props) {
    return (
        <div>
            {pokemonArr.map((ele, idx) => {
                return <PokemonListItems infoLoader={props.infoLoader}{...ele} key={idx} />;
            })
            }
        </div>

    )
}