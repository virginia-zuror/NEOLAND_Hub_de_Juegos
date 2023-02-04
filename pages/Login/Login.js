import "./Login.css";
//esta es la pantalla de inicio de la web

import { initContent } from "../../main";



const Template = () => `
<section class="login">
<h2>Para acceder es necesario hacer login.</h2>
<form>
<input type="text" id="userName" name="userName"required>
<button class="login_btn" type="submit">Acceder</button>
</form>
</section>
`

const addListeners = () =>{

    let alias = document.querySelector("#userName")
    const login_btn = document.querySelector(".login_btn");

    login_btn.addEventListener("click", () =>{

        if (alias.value.length>1){
        localStorage.setItem("user",alias.value);
        initContent("Hub")
        }
        })
}
export const printTemplate = () =>{
   
    document.querySelector("#dashboard").innerHTML = Template();
   
    addListeners();
    
}
