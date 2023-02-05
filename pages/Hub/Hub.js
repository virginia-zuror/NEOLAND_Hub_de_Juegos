import "./Hub.css"
import { initContent } from "../../main";
import { printTemplate as navButtonsTemplate } from "../../components/navbuttons/navButtons";



//en .games-container va la grilla de botones de juego (grid)
const Template = () => `
<div class="hub-container">
    <h1>¡¡Hola ${localStorage.getItem (["user"])}!!</h1>
    <div class="games-container">
        <figure class="game">
            <button id="poke">PokeApi<img class='pokeball'src='https://cdn.pixabay.com/photo/2016/09/01/09/31/pokemon-1635610_960_720.png' alt='pokeball image'/></button>
        </figure>
        <figure class="game">
            <button id="catchKitty">Catch the Kitty!</button>
        </figure>
        <figure class="game">
            <button id="3">juego3</button>
        </figure>
        <figure class="game">
            <button id="4">juego4</button>
        </figure>
    </div>
</div>
`;

 
const addListeners =()=>{
    document.querySelector("#poke")
    .addEventListener("click", ()=>initContent("PokeAPI"));
    document.querySelector("#catchKitty").addEventListener("click", ()=> initContent("Kitty"));
}



export const printTemplate =()=>{
    document.querySelector("#dashboard").innerHTML = "";
    document.querySelector("#dashboard").innerHTML = Template();
    navButtonsTemplate();
    addListeners();
    
}

