import "./Hub.css"

//import { printTemplate as LoginTemplate } from "../Login/Login";
import { initContent } from "../../main";




const Template = () => `
<div class="hub-container">
<button id="themecolor-btn">Cambia el color!</button>
<button id="logout-btn">Cerrar sesión</button>
<button id="start-btn">Volver a inicio</button>
<h1>Bienvenido ${localStorage.getItem (["user"])}</h1>
<div class="games-container"></div>
</div>
`;

const addListeners =()=>{
    document.querySelector("#logout-btn")
    .addEventListener("click", ()=>{
        localStorage.removeItem("user");
        initContent("Login");
    });
    document.querySelector("#start-btn")
    .addEventListener("click", ()=>{
        initContent("Login");
    });
}

export const printTemplate =()=>{
    document.querySelector("#dashboard").innerHTML = Template();
    addListeners();
    
}