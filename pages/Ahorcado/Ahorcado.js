import "./Ahorcado.css"
import { printTemplate as btnsTemplate } from "../../components/navbuttons/navButtons";



const Template = ()=>`
    <div class="container">
        <h1 class="hangMan">El Juego del Ahorcado</h1>
        <form>
            <input type="text" id="inputLetter" placeholder="Introduce una letra">
        </form>
        <h2>Intentos restantes:</h2>
        <div id="counterBack"> </div>
        <div id="word">
            <div id="0" class="L"></div>
            <div id="1" class="L"></div>
            <div id="2" class="L"></div>
            <div id="3" class="L"></div>
            <div id="4" class="L"></div>
            <div id="5" class="L"></div>
        </div>
        <div id="picture"></div>
            <button id="startHang">Reset</button>
        <div id="score"></div>
    </div>
`


let counter = 9; 
const letterIn =()=>{
    document.querySelector("#picture").innerHTML=`<img src='/icons/hang9.png'/>`
    document.querySelector("#counterBack").innerHTML= `${counter}`;
    let input = document.querySelector("#inputLetter");
    input.addEventListener("input", ()=>{
            let key = input.value;
            hangMan(key)})
}



let check =[];
const hangMan =(key)=>{
    
    
     const divs = document.querySelectorAll(".L");  
    const myWord = ['c', 'a', 'm', 'p', 'u', 's'];//palabra que juega
    

    if(myWord.includes(key) == false && counter>0){
           counter = counter -1; 
        }else if (myWord.includes(key) == true){
        
        let correctIndexLetter = myWord.indexOf(key);
        divs[correctIndexLetter].innerHTML = key; 
        
            if(!check.includes(key)){
                check.push(key)  
            }
    }
    if(counter == 0){
        document.querySelector("#score").innerHTML=`AHORCADO! gracias por contribuir a la justicia...`}
    
    document.querySelector("#startHang").addEventListener("click", ()=>{
        document.querySelector("#score").innerHTML= "";
        check=[];
        counter=9;
        document.querySelector("#counterBack").innerHTML= `${counter}`; 
        document.querySelector("#inputLetter").value = "";
        picture();
        divs.forEach(div => {
            div.innerHTML= "";
        });
    })

document.querySelector("#counterBack").innerHTML= `${counter}`; 
picture();
document.querySelector("#inputLetter").value = "";
console.log(check)
   if(check.length === myWord.length){
    document.querySelector("#score").innerHTML= "Enhorabuena! has salvado a un asesino de la horca...";
   }

   
}//fin funcion

const picture=()=>{
    let counterForPicture= document.querySelector("#counterBack").textContent;
    document.querySelector("#picture").innerHTML=`<img src='/icons/hang${counterForPicture}.png'/>`
}
 





    
 export const printTemplate =()=>{
   
    document.querySelector("#dashboard").innerHTML = Template()
   
    btnsTemplate();
    
    letterIn();
}