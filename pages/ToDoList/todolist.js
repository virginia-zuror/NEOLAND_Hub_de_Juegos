import "./todolist.css"
import { printTemplate as btnsTemplate } from "../../components/navbuttons/navButtons";
const Template = ()=>`
    <div class="container"    
    <form>
        <div id="shoreText">
            <input type="text" id="todo" placeholder="Inserta nueva tarea"/>
            <button id="addBtn" type="button">+</button>
        </div>
        <div id="list">
            <ul>Tareas pendientes:</ul>
        </div>
    </form>
    </div>
`




const addShore =()=>{
   const toDoList = [];
    let input = document.querySelector("#todo")
    const ul= document.querySelector("ul");
    document.querySelector("#addBtn").addEventListener("click", (ev)=>{
     ul.innerHTML+=`
     <li>${input.value}<button id="delete">X</button></li>
     `})}

    
 

/*  const deleteItemLi = () =>{
    const lis = document.querySelectorAll("li")
   const listBtns = document.querySelectorAll("#delete");
   console.log(listBtns)
   
   


} */
 


/* const deleteLiBtns = document.querySelectorAll("#btnLi");

for (const deleteLiBtn of deleteLiBtns) {
    console.log(deleteLiBtn);
   deleteLiBtn.addEventListener("click", (ev) => {
   const myLiToDelete = document.querySelector("li");  deleteItemLi(myLiToDelete)
});
}     */ 
 
    
 export const printTemplate =()=>{
   
    document.querySelector("#dashboard").innerHTML = Template()
    
    btnsTemplate();
    addShore() 
    deleteItemLi()
}