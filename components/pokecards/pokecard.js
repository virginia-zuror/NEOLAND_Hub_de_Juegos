import "./pokecard.css"

let allCharactersPoke=[];


export const getPokemons = async () => {
    const allPokemons=[];
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
        number : pokemon.id,
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
   

    for (const pokemon of allCharactersPoke) {
        const flipCard = document.createElement("div");
            flipCard.setAttribute("id", "flipCard");
            
        const cardInner = document.createElement("div");
            cardInner.setAttribute("class", "cardInner");
        //creamos la parte frontal de las cartas

        const figureFront = document.createElement("figure");
        figureFront.setAttribute("id", `card_front`)
        figureFront.innerHTML=`
        <h2 class="number">${pokemon.number}</h2>
        <h1>${pokemon.name.toUpperCase()}</h1>
        <img src= ${pokemon.image} alt= "${pokemon.name} image"/>
        <h2>Tipo:</h2>`;
            for (const tp of pokemon.type){//mapeamos el array de types
                const p = document.createElement("p");
                p.innerHTML = tp.type.name;
                figureFront.appendChild(p);
                flipCard.classList.add(tp.type.name)
                }
        cardInner.appendChild(figureFront);
        
       
        //y ahora creamos tambien la cara tarsera de la carta.
        
        
        const figureBack = document.createElement("figure");
        figureBack.setAttribute("id", `card_back`)
        figureBack.innerHTML= `
        <h1>${pokemon.name.toUpperCase()}</h1>
        <h2>Exp.points: ${pokemon.experience}</h2>
        <h2>Habilidades:</h2>`;
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

export const filter = (value) => {
    console.log(value)
    const filteredPokeName = allCharactersPoke.filter((pokemon) => pokemon.name.includes(value.toLowerCase()))
        printPokemons(filteredPokeName)
}


export const filterType = (value) =>{
    console.log(value)
    const filteredPokeType = [];  
    if(value != "default"){    
        for (const pokemon of  allCharactersPoke) {
            pokemon.type.forEach(element => {
                if(element.type.name.includes(value)){      
                filteredPokeType.push(pokemon)
                }
            });        
        }
    printPokemons(filteredPokeType);  
    }else{
        printPokemons(allCharactersPoke);
    }   
}


    
       




    


   





