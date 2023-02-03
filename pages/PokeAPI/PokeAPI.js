import "./PokeAPI.css";

import { getPokemons } from "../../components/pokecards/pokecard";



const Template = () =>`
<div id="poke-container">
<div id="searcher">
<input type="text" id="inputName">
<button id="searchBtn">Search</button>
</div>
<div id="selectorType">
<ul class="TypeList"></ul>
</div>
<section id="cards">
</section>
</div>`


/* const getPokemons = async () => {
    
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
        ability : pokemon.abilities[0].ability.name,
        type : pokemon.types[0].type.name,
              
    }));
    
    
    printPokemons(allCharactersPoke);//mi nuevo array con los datos que me interesan se llama allCharactersPoke
}; */

  
//esta funcion es la carta del bicho, la dejo comentada para probar a crearla en otro js como compoennte y dejar este mas limpio
/* const printPokemons =(pokemons)=>{
    let number= 1;
    for (const pokemon of allCharactersPoke) {
        
        const figure = document.createElement("figure");
        figure.setAttribute("id", `${pokemon.name}`)
        figure.innerHTML=`
        <h1>${pokemon.name}</h1>
        <h2>Puntos de exp.: ${pokemon.experience}</h2>
        <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png" alt= "${pokemon.name} image"/>
        <p>Habilidad: ${pokemon.ability}</p>`;
      
        document.querySelector("#cards").appendChild(figure);

        number++;
    }
} */

const filterByName =()=>{//pendiente no encuentra
    const inputName = document.querySelector("#inputName");
    const cards = document.querySelector("#cards");
    const idCard = document.querySelectorAll("figure");
    for (const pokemon of allCharactersPoke) {
        const filteredPokemons = allCharactersPoke.filter(pokemon =>{
            pokemon.name.includes(inputName.value)? cards.innerHTML = idCard[pokemon] : cards.innerHTML = `No hemos encontrado ninguna coincidencia`;
    });
    
};
} 

    




const addListeners =()=>{
    document.querySelector("#start-btn")
    .addEventListener("click", ()=>{
        initContent("Hub");
    });
    document.querySelector("#searchBtn")
    .addEventListener("click", ()=> filterByName(allCharactersPoke));
}
 
export const printTemplate = ()=>{
    document.querySelector("#dashboard").innerHTML = Template();
    getPokemons();
    filterByName();
    addListeners();
    
} 