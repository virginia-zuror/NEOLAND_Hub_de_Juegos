import "./Hub.css"
import { initContent } from "../../main";


//en .games-container va la grilla de botones de juego (grid)
const Template = () => `
<div class="hub-container">
    <h1>Welcome ${localStorage.getItem (["user"])}!!</h1>
    <div class="games-container">
        <figure class="game">
            <button id="poke">PokeApi</button>
        </figure>
        <figure class="game">
            <button id="2">juego2</button>
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
}
export const printTemplate =()=>{
    document.querySelector("#dashboard").innerHTML = Template();
    addListeners();
    
}

