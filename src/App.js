import "./style.css";
import { Route, Routes } from "react-router-dom"
import Home from "./components/Homepage";
import PokemonPage from "./components/PokemonPage";
import { useState } from "react";

export default function App() {
    const [info, setInfo] = useState({})
    const infoLoader = (data) => {
        setInfo(data)
    }
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home infoLoader={infoLoader} />} />
                <Route path="/:name" element={<PokemonPage info={info} />} />
            </Routes>
        </div>
    );
}