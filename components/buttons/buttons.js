import "./buttons.css"
import { initContent } from "../../main";
import { colorThemeBtn } from "../colorTheme/colortheme";
const Template = () => `
<div class="nav-container">

<button id="color-theme-btn"><img src="https://img.icons8.com/plasticine/256/paint-palette.png" alt="palette icon"/></button>
</div>`;//botoner cerrar sesion, volver a login y cambiar color.

/* const addListeners =()=>{
    document.querySelector("#logout-btn")
    .addEventListener("click", ()=>{
        localStorage.removeItem("user");
        initContent("Login");
    });
    document.querySelector("#start-btn")
    .addEventListener("click", ()=>{
        initContent("Hub");
    });
}
 */
export const printTemplate =()=>{
    document.querySelector("#nav").innerHTML = Template();
    //addListeners();
    colorThemeBtn();
}