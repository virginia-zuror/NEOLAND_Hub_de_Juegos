import "./RollDice.css";
import { printTemplate as navButtonsTemplate } from "../../components/navbuttons/navButtons";


const Template =()=>`
<div id="main_container">
    <h1>Roll the Dice Against the Machine</h1>
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
    let resultMachine = Math.round(Math.random()*(posibilities-1)+1);
//el jugador
    let resultPlayer = Math.round(Math.random()*(posibilities-1)+1);
    console.log(resultMachine)
    console.log(resultPlayer);



//la maquina
    if(resultMachine == 1){
        document.querySelector("#dice_machine").innerHTML = `<img src="/icons/1.png" alt="1"/><p>${resultMachine}</p>`;
    }else if(resultMachine == 2){
        document.querySelector("#dice_machine").innerHTML = `<img src="/icons/2.png" alt="2"/><p>${resultMachine}</p>`;
    }else if(resultMachine == 3){
        document.querySelector("#dice_machine").innerHTML = `<img src="/icons/3.png" alt="3"/><p>${resultMachine}</p>`;
    }else if(resultMachine == 4){
        document.querySelector("#dice_machine").innerHTML = `<img src="/icons/4.png" alt="4"/><p>${resultMachine}</p>`;
    }else if(resultMachine == 5){
        document.querySelector("#dice_machine").innerHTML = `<img src="/icons/5.png" alt="5"/><p>${resultMachine}</p>`;
    }else if(resultMachine == 6){
        document.querySelector("#dice_machine").innerHTML = `<img src="/icons/6.png" alt="6"/><p>${resultMachine}</p>`;
    }

if(resultPlayer == 1){
        document.querySelector("#dice_player").innerHTML = `<img src="/icons/1.png" alt="1"/><p>${resultPlayer}</p>`;
    }else if(resultPlayer == 2){
        document.querySelector("#dice_player").innerHTML = `<img src="/icons/2.png" alt="2"/><p>${resultPlayer}</p>`;
    }else if(resultPlayer == 3){
        document.querySelector("#dice_player").innerHTML = `<img src="/icons/3.png" alt="3"/><p>${resultPlayer}</p>`;
    }else if(resultPlayer == 4){
        document.querySelector("#dice_player").innerHTML = `<img src="/icons/4.png" alt="4"/><p>${resultPlayer}</p>`;
    }else if(resultPlayer == 5){
        document.querySelector("#dice_player").innerHTML = `<img src="/icons/5.png" alt="5"/><p>${resultPlayer}</p>`;
    }else if(resultPlayer == 6){
        document.querySelector("#dice_player").innerHTML = `<img src="/icons/6.png" alt="6"/><p>${resultPlayer}</p>`;
    }



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