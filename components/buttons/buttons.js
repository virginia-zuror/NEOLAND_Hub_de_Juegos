import "./buttons.css"
import { initContent } from "../../main";
import { colorThemeBtn } from "../colorTheme/colortheme";
const Template = () => `
<div class="nav-container">
<button id="start-btn">Inicio</button>
<button id="logout-btn">Logout</button>
<button id="color-theme-btn">ColorTheme</button>
</div>`;//botoner cerrar sesion, volver a login y cambiar color.

const addListeners =()=>{
    document.querySelector("#logout-btn")
    .addEventListener("click", ()=>{
        localStorage.removeItem("user");
        initContent("Login");
    });
    document.querySelector("#start-btn")
    .addEventListener("click", ()=>{
        initContent("Hub");
    });//solo los init content el color theme lo enviamos a parte en la funcion export
    
}

export const printTemplate =()=>{
    document.querySelector("#nav").innerHTML = Template();
    addListeners();
    colorThemeBtn();
}