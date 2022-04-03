import PokemonImg from "./PokemonImg";

export default function PokemonListItem({ img, name, number, type, color }) {
    return (
        <div className="list-item">
            <PokemonImg img={img} alt={name} color={color} />
            <div className="content">
                <h4>{name}</h4>
                <p>{number}</p>
                <p>{type}</p>
            </div>
        </div>
    );
}