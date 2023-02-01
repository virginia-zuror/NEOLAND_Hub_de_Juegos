import './style.css'
import { printTemplate as LoginTemplate } from "./pages/Login/Login";
import { printTemplate as HubTemplate } from "./pages/Hub/Hub";






export const initContent =(route)=>{
    switch (route) {
        case undefined:
            LoginTemplate();
        case "Login":
            LoginTemplate();
            break;    
        case "Hub":
            HubTemplate();
            break;
    }

}

//llamamos a la funcion de mostrar login

LoginTemplate();
HubTemplate();