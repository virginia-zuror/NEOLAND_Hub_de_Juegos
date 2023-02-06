import "./todolist.css"
import { printTemplate as btnsTemplate } from "../../components/navbuttons/navButtons";



const Template = ()=>`
    <div class="container"    
         <div id="shoreText">
            <input type="text" id="toDo" name="task" placeholder="Inserta nueva tarea">
            <button id="addBtn">+</button>
                
        </div>
        <div id="list">
            <ul>Tareas pendientes:</ul>
        </div>
    
    </div>
`

const inputTask = document.querySelector("#toDo");
const addBtn = document.querySelector("#addBtn");

const addTask = ()=>{
    addBtn.addEventListener("click", ()=>{
        console.log(inputTask);
    })
    

}
    
 

    
 export const printTemplate =()=>{
   
    document.querySelector("#dashboard").innerHTML = Template()
   
    btnsTemplate();
     addTask() 
    
}