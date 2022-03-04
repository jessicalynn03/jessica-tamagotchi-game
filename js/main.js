const timeH1 = document.querySelector("#timer")
const hungerEl = document.querySelector(".hunger")
const tiredEl = document.querySelector(".tired")
const boredEl = document.querySelector(".bored")
const startButton = document.querySelector("#start")
const restartButton = document.querySelector("#restart")
const yourName = document.querySelector("#yourName")


const feedBtn = document.querySelector("#feed")
const playBtn = document.querySelector("#play")
const sleepBtn = document.querySelector("#sleep")

let time = 5; 
let name = ""

let hungerNow = 0;
let playNow = 0;
let sleepNow = 0;

const addFood = () => {
    hungerNow++;
    hungerEl.innerText = hungerNow;
};

const addPlay = () => {
    playNow++
    boredEl.innerText = playNow; 
};

const addSleep = () => {
    sleepNow++
    tiredEl.innerText = sleepNow;
};


const decreaseTime = () => {
    time--
    timeH1.innerText = time;
}








startButton.addEventListener("click", decreaseTime)
feedBtn.addEventListener("click", addFood);
playBtn.addEventListener("click", addPlay);
sleepBtn.addEventListener("click", addSleep);









// class Tamagotchipet{
//     constructor(){
//         this.name = "";
//         this.hunger = hunger;
//         this.tired = tired;
//         this.bored = bored;
//         this.age = age;
//     }
// }

// class Tamagotchipet extends Data{
//     constructor(){
//         this.feed = feed;
//         this.play = play;
//         this.sleep = sleep;
//     }
// }