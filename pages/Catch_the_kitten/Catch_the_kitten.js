import { printTemplate as navButtonsTemplate} from "../../components/navbuttons/navButtons";
import "./Catch_the_kitten.css";


const Template = ()=>`
<div id="board">
    <div id="1" class="square">1</div>
    <div id="2" class="square">2</div>
    <div id="3" class="square">3</div>
    <div id="4" class="square">4</div>
    <div id="5" class="square">5</div>
    <div id="6" class="square">6</div>
    <div id="7" class="square">7</div>
    <div id="8" class="square">8</div>
    <div id="9" class="square">9</div>
    <div id="10" class="square">10</div>
    <div id="11" class="square">11</div>
    <div id="12" class="square">12</div>
</div>`

export const printTemplate =()=>{

    document.querySelector("#dashboard").innerHTML = Template();
    navButtonsTemplate();
}