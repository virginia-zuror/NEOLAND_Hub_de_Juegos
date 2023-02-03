import "./pokecard.css"

let allCharactersPoke=[];
let allPokemons=[];

export const getPokemons = async () => {
    
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
        height : pokemon.height,
        weight : pokemon.weight,
        ability : pokemon.abilities,
        type : pokemon.types,
        locationsEncounters : pokemon.location_area_encounters,           
    }));
    printPokemonsFront(allCharactersPoke);//mi nuevo array con los datos que me interesan se llama allCharactersPoke
};

const printPokemonsFront =(pokemons)=>{
    let number= 1;
    for (const pokemon of allCharactersPoke) {
        
        const figure = document.createElement("figure");
        figure.setAttribute("id", `${pokemon.name}`)
        figure.innerHTML=`
        <h1>${pokemon.name.toUpperCase()}</h1>
        <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png" alt= "${pokemon.name} image"/>
        `;
      for (const tp of pokemon.type){//mapeamos el array de types
        const p = document.createElement("p");
        p.innerHTML = tp.type.name;
        figure.appendChild(p);
      }
        document.querySelector("#cards").appendChild(figure);

        number++;
    }
}

