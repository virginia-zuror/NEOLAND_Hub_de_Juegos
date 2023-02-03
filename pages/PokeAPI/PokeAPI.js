import "./PokeAPI.css";

import { getPokemons } from "../../components/pokecards/pokecard";
import { filterByName } from "../../components/pokecards/pokecard";


const Template = () =>`
<div id="poke-container">
    <div id="filter_poke">
        <input type="text" id ="iputFilter">
        <button id="btnFilter">Buscar</button>
    </div>
    <div id="selectorType">
        <ul class="TypeList"></ul>
    </div>
    <section id="cards"></section>
</div>`


const addListeners =()=>{
    const input = document.querySelector("#iputFilter")//necesario buscar aqui el input para pasarle el valor al llamar a la funcion
    document.querySelector("#start-btn").addEventListener("click", ()=>{initContent("Hub")});
    document.querySelector("#btnFilter").addEventListener("click", () => filterByName(input.value) );
}
    
export const printTemplate = ()=>{
    document.querySelector("#dashboard").innerHTML = Template();
    getPokemons();
    addListeners();
    
} 