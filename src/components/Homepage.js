import Header from "./Header";
import Search from "./SearchBar";
import PokemonList from "./PokemonList";

export default function Home(props) {
    return (
        <>
            <Header title="Pokédex" />
            <Search />
            <PokemonList infoLoader={props.infoLoader} />
        </>
    );
}