import Header from "./Header";
import Search from "./SearchBar";
import PokemonList from "./PokemonList";

export default function Home() {
    return (
        <>
            <Header title="Pokédex" />
            <Search />
            <PokemonList />
        </>
    );
}