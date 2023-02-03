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
        image : pokemon.sprites.other['official-artwork'].front_default,
        experience : pokemon.base_experience,
        height : pokemon.height,
        weight : pokemon.weight,
        ability : pokemon.abilities,
        type : pokemon.types,
        locationsEncounters : pokemon.location_area_encounters,           
    }));
    printPokemons(allCharactersPoke);//mi nuevo array con los datos que me interesan se llama allCharactersPoke
   
};

export const printPokemons =(allCharactersPoke)=>{
    let number= 1;
    document.querySelector("#cards").innerHTML = "";


    for (const pokemon of allCharactersPoke) {
        const flipCard = document.createElement("div");
            flipCard.setAttribute("class", "flipCard");
        const cardInner = document.createElement("div");
            cardInner.setAttribute("class", "cardInner");
        //creamos la parte frontal de las cartas

        const figureFront = document.createElement("figure");
        figureFront.setAttribute("id", `card_front`)
        figureFront.innerHTML=`
        <h1>${pokemon.name.toUpperCase()}</h1>
        <img src= ${pokemon.image} alt= "${pokemon.name} image"/>
        `;
            for (const tp of pokemon.type){//mapeamos el array de types
                const p = document.createElement("p");
                p.innerHTML = tp.type.name;
                figureFront.appendChild(p);
                }
        cardInner.appendChild(figureFront);
        number++;
       
        //y ahora creamos tambien la cara tarsera de la carta.
        
        
        const figureBack = document.createElement("figure");
        figureBack.setAttribute("id", `card_back`)
        figureBack.innerHTML= `
        <h1>${pokemon.name.toUpperCase()}</h1>
        <p>${pokemon.experience}</p>
        `;
            for (const ab of pokemon.ability){//mapeamos el array de abilities
                const p = document.createElement("p");
                p.innerHTML = ab.ability.name;
                figureBack.appendChild(p);
            }
       cardInner.appendChild(figureBack); 
       flipCard.appendChild(cardInner);
       document.querySelector("#cards").appendChild(flipCard);
    }
    
};

//creamos un buscador por nombre del bicho

export const filterByName = (value) => {
    
    const filteredPoke = allCharactersPoke.filter((pokemon) => pokemon.name.includes(value))
        
    printPokemons(filteredPoke);
    
}

   





