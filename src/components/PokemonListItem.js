import PokemonImg from "./PokemonImg";
import { Link } from "react-router-dom";

export default function PokemonListItem({ img, name, number, type, color, infoLoader }) {
    const pokemon = { img, name, number, type, color }
    return (
        <Link onClick={() => { infoLoader(pokemon) }} to={`/${name}`}>
            {name}
            <div className="list-item">

                <PokemonImg img={img} alt={name} color={color} />
                <div className="content">
                    <h4>{name}</h4>
                    <p>{number}</p>
                    <p>{type}</p>
                </div>
            </div>
        </Link>
    );
}