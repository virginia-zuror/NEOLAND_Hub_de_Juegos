import './style.css'

import { printTemplate as colorTemplate } from "./components/buttons/buttons";
import { FooterContent } from "./components/footer/footer";
import { printTemplate as LoginTemplate } from "./pages/Login/Login";
import { printTemplate as HubTemplate } from "./pages/Hub/Hub";
import { printTemplate as pokeApiTemplate } from "./pages/PokeAPI/PokeAPI";
import { printTemplate as KittyTemplate } from './pages/Catch_the_kitten/Catch_the_kitten';
import { printTemplate as ToDoListTemplate } from "./pages/ToDoList/todolist";


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
        case "Kitty":
            KittyTemplate();
            break;
        case "ToDoList":
                ToDoListTemplate();
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

