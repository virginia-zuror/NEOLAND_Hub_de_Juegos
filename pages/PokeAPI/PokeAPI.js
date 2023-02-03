import "./PokeAPI.css";

import { getPokemons } from "../../components/pokecards/pokecard";



const Template = () =>`
<div id="poke-container">
    <div id="selectorType">
        <ul class="TypeList"></ul>
    </div>
    <section id="cards"></section>
</div>`



const addListeners =()=>{
    document.querySelector("#start-btn")
    .addEventListener("click", ()=>{
        initContent("Hub");
    });
    /* document.querySelector("#searchBtn")
    .addEventListener("click", ()=> filterByName(allCharactersPoke)); */
}
 
export const printTemplate = ()=>{
    document.querySelector("#dashboard").innerHTML = Template();
    getPokemons();
    //filterByName();
    addListeners();
    
} 