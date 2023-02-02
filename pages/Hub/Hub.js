import "./Hub.css"

//import { printTemplate as LoginTemplate } from "../Login/Login";
import { initContent } from "../../main";


const Template = () => `
<div class="hub-container">
<button id="poke">PokeApi</button>
<h1>Welcome ${localStorage.getItem (["user"])}!!</h1>
<div class="games-container"></div>
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
