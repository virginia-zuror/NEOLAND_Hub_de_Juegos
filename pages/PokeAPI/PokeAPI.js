import "./PokeAPI.css";
let allCharactersPoke=[];
let allPokemons=[];

const Template = () =>`
<div id="poke-container">
<section id="cards"></section>
</div>`


const getPokemons = async () => {
    
    for(let i=1; i<152; i++){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data = await res.json();
    
    allPokemons.push(data); 
    }
   mapPokemons(allPokemons);
  
}

const mapPokemons = (allPokemons) =>{
    allCharactersPoke = allPokemons.map((pokemon) =>({
        name : pokemon.name,
        experience : pokemon.base_experience,
    }));
    
    printPokemons(allCharactersPoke);
};

  

const printPokemons =(pokemons)=>{

    for (const pokemon of allCharactersPoke) {
        const figure = document.createElement("figure");
        const name = document.createTextNode(` Name: ${pokemon.name}`)
        const exp = document.createTextNode(`Exp points: ${pokemon.experience}`)
        figure.appendChild(name);
        figure.appendChild(exp);
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