import "./Catch_the_kitten.css";

import { printTemplate as navButtonsTemplate} from "../../components/navbuttons/navButtons";
import { game } from "../../components/gameCat";


const Template = ()=>`
<div class="score">0</div>
<div id="board">
    <div id="1" class="place">
    <div class="kitty"></div>
    </div>
    <div id="2" class="place">
    <div class="kitty"></div>
    </div>
    <div id="3" class="place">
    <div class="kitty"></div>
    </div>
    <div id="4" class="place">
    <div class="kitty"></div>
    </div>
    <div id="5" class="place">
    <div class="kitty"></div>
    </div>
    <div id="6" class="place">
    <div class="kitty"></div>
    </div>
    <div id="7" class="place">
    <div class="kitty"></div>
    </div>
    <div id="8" class="place">
    <div class="kitty"></div>
    </div>
    <div id="9" class="place">
    <div class="kitty"></div>
    </div>
    <div id="10" class="place">
    <div class="kitty"></div>
    </div>
    <div id="11" class="place">
    <div class="kitty"></div>
    </div>
    <div id="12" class="place">
    <div class="kitty"></div>
    </div>
</div>
<div id="controlBtns">
<button id="start" class="startBtn">Start</button>
<button id="resset" class="ressetBtn">Resset</button>
</div>`






export const printTemplate =()=>{
    navButtonsTemplate();
    
    document.querySelector("#dashboard").innerHTML = Template();
    console.log("estas en la pantalla ")
   game()
}





