import Header from "./Header";
import PokemonImg from "./PokemonImg";

export default function PokemonPage(props) {
    return (

        <div className="page">
            {console.log(props)}
            <Header title="Pokémon Page" />
            <div className="pokemonImage">
                <PokemonImg img={props.info.img} alt={props.info.name} />
            </div>
            <h2>{props.info.name}</h2>
            <h2>{props.info.number}</h2>
            <h2>{props.info.type}</h2>
        </div>
    )
}

// state hook, useEffect hook, useParams, find method for arrays

// set up useEffect to fire component when mounted, empty array second parameter