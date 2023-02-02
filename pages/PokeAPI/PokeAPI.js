import "./PokeAPI.css";
let allCharactersPoke=[];


const Template = () =>`
<div id="poke-container">
<section id="cards"></section>
</div>`

let allPokemons=[];
const getPokemons = async () => {
    
    for(let i=1; i<152; i++){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data = await res.json();
    
    allPokemons.push(data); 
    }
   printPokemons(allPokemons);
  
}

  

const printPokemons =(pokemons)=>{

    for (const pokemon of allPokemons) {
        const figure = document.createElement("figure");
        const name = document.createTextNode(` Name: ${pokemon.name}`)
        const type = document.createTextNode(`Type: ${pokemon.types.type}`)
        figure.appendChild(name);
        figure.appendChild(type);
        document.querySelector("#cards").appendChild(figure);

    }
}

const addListeners =()=>{
    document.querySelector("#start-btn")
    .addEventListener("click", ()=>{
        initContent("Hub");
    });
}

export const printTemplate = ()=>{
    document.querySelector("#dashboard").innerHTML = Template();
    getPokemons();
    addListeners();
} 