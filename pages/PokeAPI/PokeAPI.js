import "./PokeAPI.css";
import { initContent } from "../../main"; 
import { getPokemons } from "../../components/pokecards/pokecard";
import { filter } from "../../components/pokecards/pokecard"; 
import { printTemplate as colorTemplate } from "../../components/buttons/buttons";
import { printTemplate as navButtonsTemplate } from "../../components/navbuttons/navButtons";



const Template = () =>`
<div id="poke-container">
    <div id="filter_poke">
        <input type="text" id ="iputFilter" placeholder="Busca por nombre">
        <button id="btnFilter"><img class='pokeball'src='https://cdn.pixabay.com/photo/2016/09/01/09/31/pokemon-1635610_960_720.png' alt='pokeball image'/></button>
    </div>
    <div id="selectorType">
        <ul class="TypeList"></ul>
    </div>
    <section id="cards"></section>
</div>`


const addListeners =()=>{
    const input = document.querySelector("#iputFilter")//necesario buscar aqui el input para pasarle el valor al llamar a la funcion
    
    document.querySelector("#btnFilter").addEventListener("click", () =>{
        document.querySelector("#cards").innerHTML = "";
        filter(input.value)} );
    
}
    
export const printTemplate = ()=>{
    document.querySelector("#dashboard").innerHTML ="";
    document.querySelector("#dashboard").innerHTML += Template()
    navButtonsTemplate();
    colorTemplate();
    getPokemons();
    addListeners();   
} 