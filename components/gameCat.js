export const game =()=>{
    console.log(document.querySelectorAll(".place"));


const places = document.querySelectorAll('.place');
const scoreElement = document.querySelector('.score');
//const timeEl = document.querySelector('#time');
const startBtn = document.querySelector('#start');


let score = 0;
//let time = 10;
let actualPlace;

places.forEach(place => {
    place.addEventListener("click",(ev)=>{
    
        if(parseInt(place.getAttribute("id")) === actualPlace+1){
            score +=1;
            
            scoreElement.innerHTML = score;
        }
    })
});

startBtn.addEventListener("click", (ev)=> start())

const start =()=>{
    places.forEach(place => {
        place.innerHTML="";
    });

    actualPlace = Math.round(Math.random(1,11)*places.length);
    
    if(places[actualPlace]< 1){
        console.log('primera condicion')
        console.log(places[actualPlace])
        actualPlace = Math.round(Math.random(1,11)*places.length)
    //;
    }else if(places[actualPlace]>12){
    console.log("segunda condicion mayor que 12")
    console.log(places[actualPlace])
    actualPlace = Math.round(Math.random(1,11)*places.length)
    }else{
        console.log("normal")
        places[actualPlace].innerHTML=`<div class="kitty"></div>`
    }
    
}

start()



}