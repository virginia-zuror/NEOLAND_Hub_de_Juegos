import "./navButtons.css"
import { initContent } from "../../main";
const Template =()=>`<div class="nav_btns_container">
<button id="start-btn">Inicio</button>
<button id="logout-btn">Logout</button>
</div>`;

const addListeners =()=>{
    document.querySelector("#logout-btn")
    .addEventListener("click", ()=>{
        localStorage.removeItem("user");
        initContent("Login");
    });
    document.querySelector("#start-btn")
    .addEventListener("click", ()=>{
        console.log("click")
        initContent("Hub");
    });
}

export const printTemplate =()=>{
    document.querySelector("#dashboard").innerHTML += Template();
    addListeners();
}