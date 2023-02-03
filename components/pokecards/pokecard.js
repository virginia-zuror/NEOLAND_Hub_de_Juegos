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
        ability : pokemon.abilities[0].ability.name,
        type : pokemon.types[0].type.name,
              
    }));
    
    
    printPokemons(allCharactersPoke);//mi nuevo array con los datos que me interesan se llama allCharactersPoke
};

const printPokemons =(pokemons)=>{
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
}

