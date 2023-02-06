import "./RollDice.css";
import { printTemplate as navButtonsTemplate } from "../../components/navbuttons/navButtons";


const Template =()=>`
<div id="main_container">
    <div id="dice_container">
        <div id="dice_machine"></div>
        <div id="dice_player"></div>
    </div>
    <div id="chooseNumber">

    </div>
    <button id="throw">Lanza el dado</button>
    <div id="result"></div>


</div>
`
let posibilities = 6;
const diceResult =(posibilities)=>{
let result = Math.floor(Math.random()*posibilities);
console.log(result);
}


const buttonDice = document.querySelector("#throw");


const addListenersRoll =()=>{
buttonDice.addEventListener("click", ()=> diceResult())
}

export const printTemplate =()=>{
    document.querySelector("#dashboard").innerHTML = "";
    document.querySelector("#dashboard").innerHTML = Template();
    navButtonsTemplate()
    addListenersRoll();

}