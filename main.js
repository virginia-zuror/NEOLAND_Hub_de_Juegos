import './style.css'

import { printTemplate as colorTemplate } from "./components/buttons/buttons";
import { FooterContent } from "./components/footer/footer";
import { printTemplate as LoginTemplate } from "./pages/Login/Login";
import { printTemplate as HubTemplate } from "./pages/Hub/Hub";
import { printTemplate as pokeApiTemplate } from "./pages/PokeAPI/PokeAPI";


export const initContent =(route)=>{
    switch (route) {
       
        case "Login":
            LoginTemplate();
            break;    
        case "Hub":
            HubTemplate();
            break;
        case "PokeAPI":
            pokeApiTemplate();
            break;
        default:
            LoginTemplate();
            break;
    }

}

const initPage =()=>{
    colorTemplate();
if(localStorage.getItem("user")){
    HubTemplate();
}else{
    LoginTemplate();
}
FooterContent();
}
initPage();

