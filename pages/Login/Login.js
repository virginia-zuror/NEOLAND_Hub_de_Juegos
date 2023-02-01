import "./Login.css";
//esta es la pantalla de inicio de la web
//import { printTemplate as HubTemplate } from "../Hub/Hub";
import { initContent } from "../../main";



const Template = () => `
<section class="login">
<h2>Para acceder es necesario hacer login.</h2>
<form>
<input type="text" id="userName" name="userName" required>
<button class="login-btn" type="submit">Acceder</button>
</form>
</section>
`

const addListeners = () =>{
    const submit = document.querySelector("#userName");
    document.querySelector(".login-btn")
        .addEventListener("click", () =>{
            if(localStorage.getItem(["user"])== submit.value ){
                initContent("Hub");
            }else if(submit.value != ""){
            localStorage.setItem("user",submit.value); 
            initContent("Hub");}
            
        })
}

export const printTemplate = () =>{
    document.querySelector("#dashboard").innerHTML = Template();
    
    addListeners();
    
}
