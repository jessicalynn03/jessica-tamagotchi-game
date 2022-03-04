const timeH1 = document.querySelector("#timer")
const hungerEl = document.querySelector(".hunger")
const tiredEl = document.querySelector(".tired")
const boredEl = document.querySelector(".bored")
const startButton = document.querySelector("#start")
const restartButton = document.querySelector("#restart")
const yourName = document.querySelector("#yourName")
const ageEl = document.querySelector(".age")


const feedBtn = document.querySelector("#feed")
const playBtn = document.querySelector("#play")
const sleepBtn = document.querySelector("#sleep")

let time = 5; 
let name = ""

let hungerNow = 0;
let playNow = 0;
let sleepNow = 0;
let age = 0;

const subFood = () => {
    if(hungerNow > 0){
        hungerNow--;
        hungerEl.innerText = "Hungry: " + hungerNow;
    }
    
};

const subPlay = () => {
    if(playNow > 0){
        playNow--
        boredEl.innerText = "Bored: " + playNow; 
    }
    
};

const subSleep = () => {
    if(sleepNow > 0){
        sleepNow--
        tiredEl.innerText = "Tired: " + sleepNow;
    }
    
};

let hungerInterval = setInterval(function(){
    hungerNow++
    hungerEl.innerText = "Hungry: " + hungerNow;
}, 2000)

let playInterval = setInterval(function(){
    playNow++ 
    boredEl.innerText = "Bored: " + playNow;
}, 3000)
let sleepInterval = setInterval(function(){
    sleepNow++
    tiredEl.innerText = "Tired: " + sleepNow;
}, 4000)


let ageInterval = setInterval(function(){
age++
ageEl.innerText = "Age: " + age;
}, 5000)



       






// startButton.addEventListener("click", decreaseTime)
feedBtn.addEventListener("click", subFood);
playBtn.addEventListener("click", subPlay);
sleepBtn.addEventListener("click", subSleep);



// const decreaseTime = () => {
//     time--
//     timeH1.innerText = time;
// }







// class Tamagotchipet{
//     constructor(name, hunger, tired, bored, age){
//         this.name = name;
//         this.hunger = hunger;
//         this.tired = tired;
//         this.bored = bored;
//         this.age = age;
//     }
    
// }
    
    
    
    
    
    //         feedBtn(){
    
    //         }
    // }
    //         playBtn(){
    
    //         }
    
    //         sleepBtn(){
    
    //         }
    //     }






// class Tamagotchipet extends Data{
//     constructor(){
//         this.feed = feed;
//         this.play = play;
//         this.sleep = sleep;
//     }
// }