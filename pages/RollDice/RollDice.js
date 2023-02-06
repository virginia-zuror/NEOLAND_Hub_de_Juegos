import "./RollDice.css";
import { printTemplate as navButtonsTemplate } from "../../components/navbuttons/navButtons";


const Template =()=>`
<div id="main_container">
    <div id="dice_container">
        <div id="machine"><h2>Ordenador</h2><div id="dice_machine"></div></div>
        <div id="player"><h2>${localStorage.getItem(["user"])}</h2><div id="dice_player"></div></div>
    </div>
    <div id="chooseNumber">

    </div>
    <button id="throw">Lanza el dado</button>
    <div id="resultGame"></div>


</div>
`
let posibilities = 6;
const diceResult =(posibilities)=>{
    document.querySelector("#resultGame").innerHTML = "";
//el jugador
    let resultPlayer = Math.floor(Math.random(1,posibilities)*posibilities);
document.querySelector("#dice_player").innerHTML = resultPlayer;
//la maquina
    let resultMachine = Math.floor(Math.random(1,posibilities)*posibilities);
document.querySelector("#dice_machine").innerHTML= resultMachine;

if(resultMachine > resultPlayer){
    document.querySelector("#resultGame").innerHTML = `Ha ganado la máquina, pronto gobernaré el mundo.`;
  }else if(resultMachine == resultPlayer){
    document.querySelector("#resultGame").innerHTML = `Empate, ni pa tí ni pa mí.`;
  }else{
    document.querySelector("#resultGame").innerHTML = `Vaya, me has ganado, pondremos tu nombre a una calle.`
  }

}




const addListenersRoll =()=>{
const buttonDice = document.querySelector("#throw");

buttonDice.addEventListener("click", ()=> diceResult(posibilities))
}

export const printTemplate =()=>{
    document.querySelector("#dashboard").innerHTML = "";
    document.querySelector("#dashboard").innerHTML = Template();
    navButtonsTemplate()
    addListenersRoll();

}