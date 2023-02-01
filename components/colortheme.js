import "./colortheme.css";

const colorBtn =() =>`
<button id="color-theme-btn">Cambia el color</button>`;
//randomColor genera un codigo hexadecimal 
const randomColor=()=>{
    const hexadecimal = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F");
    let color ="#";
    for(let i=0; i<6; i++){
        let positionGenerated = randomNumber(0,hexadecimal.length);//obtenemos el indice del array de numeros y letras
        color += hexadecimal[positionGenerated];
    }
    return color;
};
const randomNumber =(min, max)=>{
    let posibilities= max-min;
    let random =(Math.random())*posibilities;
    random= Math.floor(random);
    return parseInt(min) + random;//generamos un número aleatorio que se usará para obtener el indice de hexadecimal en randomcolor
}
const addListeners=()=>{
    document.querySelector("#color-theme-btn").addEventListener("click", () =>{
        const newColor = randomColor();
        document.body.style.backgroundColor = newColor;
    });
};

export const colorThemeBtn =()=>{
    document.querySelector("#nav").innerHTML = colorBtn();//en boton del theme va al nav
    addListeners();
}