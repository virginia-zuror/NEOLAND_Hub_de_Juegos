import "./PokeAPI.css";

import axios from "axios";
import { initContent } from "../../main";


const Template = () =>`
<div id="poke-container">
<button id="start-btn">Volver a Hub</button>
<section id="cards"></section>
</div>`



const getPokemons =()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0").then(data => printPokemons(data.data.results));
}
const printPokemons =(pokemons)=>{

    for (const pokemon of pokemons) {
        const figure = document.createElement("figure");
        const name = document.createTextNode(` Nombre: ${pokemon.name}`)//de momento funciona falta extraer los datos de la url de cada pokemon, imagen y algo mas y diseñar las cartas.
        figure.appendChild(name);
        document.querySelector("#cards").appendChild(figure);

    }
}

const addListeners =()=>{
    document.querySelector("#start-btn")
    .addEventListener("click", ()=>{
        initContent("Hub");
    });
}

export const printTemplate = ()=>{
    document.querySelector("#dashboard").innerHTML = Template();
    getPokemons();
    addListeners();
}