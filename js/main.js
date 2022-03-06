const countdownEl = document.querySelector("#countdown")
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


let startingMinutes = 5;
let time = startingMinutes * 60;
const minutes = math.floor(time / 60);
const seconds = time % 60;
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
}, 20000)



const updateCountdown = () =>{
    time--
    countdownEl.innerText = `${minutes}: ${seconds}`;
}





// function updateCountdown(){
//     const minutes = math.floor(time / 60);
//     let seconds = time % 60;
//     seconds = seconds < 5 ? "0" * seconds : seconds;
//     countdownEl.innerText = `${minutes}: ${seconds}`;
//     time--;
// }
// setInterval(updateCountdown, 1000)


startButton.addEventListener("click", updateCountdown)
       






feedBtn.addEventListener("click", subFood);
playBtn.addEventListener("click", subPlay);
sleepBtn.addEventListener("click", subSleep);











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