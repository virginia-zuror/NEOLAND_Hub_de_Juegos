import './style.css'
import { colorThemeBtn } from "./components/colortheme";
import { printTemplate as LoginTemplate } from "./pages/Login/Login";
import { printTemplate as HubTemplate } from "./pages/Hub/Hub";
import { printTemplate as pokeApiTemplate } from "./pages/PokeAPI/PokeAPI";


colorThemeBtn();



export const initContent =(route)=>{
    switch (route) {
        case undefined:
            LoginTemplate();
            break;
        case "Login":
            LoginTemplate();
            break;    
        case "Hub":
            HubTemplate();
            break;
        case "PokeAPI":
            pokeApiTemplate();
            break;
    }

}

//llamamos a las funciones de distintas paginas

LoginTemplate();
HubTemplate();
pokeApiTemplate();