import "./Catch_the_kitten.css";

import { printTemplate as navButtonsTemplate} from "../../components/navbuttons/navButtons";



const Template = ()=>`
<div class="gameCat">
    <h1 class="title_cat">¡Atrapa al gatito!</h1>
    <div id="board">
        <div id="1" class="place"></div>
        <div id="2" class="place"></div>
        <div id="3" class="place"></div>
        <div id="4" class="place"></div>
        <div id="5" class="place"></div>
        <div id="6" class="place"></div>
        <div id="7" class="place"></div>
        <div id="8" class="place"></div>
        <div id="9" class="place"></div>
        <div id="10" class="place"></div>
        <div id="11" class="place"></div>
        <div id="12" class="place"></div>
    </div>
    <div id="controlBtns">
        <div class="score">0 Puntos</div>
        <button id="start" class="startBtn">Start</button>
        <div id="time"></div>
    </div>
    
</div>`

export const gameFunctions =()=>{
const places = document.querySelectorAll('.place');
const scoreTotal = document.querySelector('.score');
const timeCounter = document.querySelector('#time');
const startBtn = document.querySelector('#start');

let score = 0;
let time = 10;
let actualPlace;//las declaramos fuera


places.forEach(place => {
    place.addEventListener("click", () => {
        if (parseInt(place.getAttribute("id")) === actualPlace+1) {//si coincide es el sitio correcto
            score += 1;
            scoreTotal.innerHTML = `Puntos: ${score}`;
        }
    })
});

 const start =()=> {
    
    let initGame = setInterval(() => { 
       places.forEach(place => {// recorremos los div place y se vacian todos al inicio del ciclo
            place.innerHTML = '';
            startBtn.disabled = true;
        });

        actualPlace = Math.floor(Math.random() * 12);//se genera un indice
        places[actualPlace].innerHTML = '<div class="kitty"></div>';//en ese div se crea un template con la clase kitty que en css tiene una imagen

        time--;
        timeCounter.innerHTML = `Tiempo restante:${time}`;// se muestra el tiempo restante en el contador
        if (time == 0) { 
            clearInterval(initGame);//al llegar a cero el tiempo cortamos el identificador del setinterval
            setTimeout(() => {//el alert empieza a contar al inicio del juego pero tarda 10seg en sacar el alert, que es lo qu epodemos jugar
                alert(`Fin de la partida, has conseguido ${score} puntos!!`);
                time=10;
                startBtn.disabled=false;
            }, 100);
        }
    }, 1000);
}
document.querySelector(".startBtn").addEventListener("click", (ev)=> start());
}



    




export const printTemplate =()=>{
       
    document.querySelector("#dashboard").innerHTML = Template();
    navButtonsTemplate();
    gameFunctions();
    
    
}





