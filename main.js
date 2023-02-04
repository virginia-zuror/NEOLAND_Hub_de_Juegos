import './style.css'

import { printTemplate as colorTemplate } from "./components/buttons/buttons";
import { FooterContent } from "./components/footer/footer";
import { printTemplate as LoginTemplate } from "./pages/Login/Login";
import { printTemplate as HubTemplate } from "./pages/Hub/Hub";
import { printTemplate as pokeApiTemplate } from "./pages/PokeAPI/PokeAPI";


colorTemplate();


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

//llamamos solo a la pagina de login que quiero que entre por defecto

LoginTemplate();
FooterContent();