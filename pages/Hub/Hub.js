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
            <button id="catchKitty">Catch the Kitty!<img src="https://cdn-icons-png.flaticon.com/512/1067/1067809.png" alt='gatito'/></button>
        </figure>
        <figure class="game">
            <button id="RollDice">Roll the Dice <img src="https://cdn-icons-png.flaticon.com/512/3401/3401653.png" alt='dados'/></button>
        </figure>
        <figure class="game">
            <button id="HangMan">Hangman<img src="/icons/hangman.png" alt="icono juego ahorcado"/></button>
        </figure>
    </div>
</div>
`;

 
const addListeners =()=>{
    document.querySelector("#poke").addEventListener("click", ()=>initContent("PokeAPI"));
    document.querySelector("#catchKitty").addEventListener("click", ()=> initContent("Kitty"));
    document.querySelector("#RollDice").addEventListener("click", ()=> initContent("RollDice"));
    document.querySelector("#HangMan").addEventListener("click", ()=> initContent("HangMan"));
}



export const printTemplate =()=>{
    
    document.querySelector("#dashboard").innerHTML = "";
    document.querySelector("#dashboard").innerHTML = Template();
    navButtonsTemplate();
    addListeners();
    
}

