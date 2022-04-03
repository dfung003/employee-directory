import React from "react";

export default function PokemonImg({ img, name, color }) {
    return (
        <div className="picture" style={{ backgroundColor: color }}>
            <img src={img} className="image" alt={name} />
        </div>
    );
}