const countdownEl = document.querySelector("#countdown")
let hungerEl = document.getElementById("hunger")
let tiredEl = document.getElementById("tired")
let boredEl = document.getElementById("bored")

const startButton = document.querySelector("#start")
const restartButton = document.querySelector("#restart")
const pauseButton = document.querySelector("#pause")
const yourName = document.querySelector("#yourName")
const ageEl = document.querySelector(".age")
const imageEl = document.querySelector("myImage")

const feedBtn = document.querySelector("#feed")
const playBtn = document.querySelector("#play")
const sleepBtn = document.querySelector("#sleep")


let startingMinutes = 5;
let time = startingMinutes * 60;
const minutes = Math.floor(time / 60);
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

const ageCount = () =>{
    let ageInterval = setInterval(function(){
        age++
        ageEl.innerText = "Age: " + age;
        }, 20000)
}

const hungerCount = () =>{
    let hungerInterval = setInterval(function(){
        hungerNow++
        hungerEl.innerText = "Hungry: " + hungerNow;
    }, 2000)
}

const playCount = () =>{
    let playInterval = setInterval(function(){
    playNow++ 
    boredEl.innerText = "Bored: " + playNow;
}, 3000)
}

const sleepCount = () =>{
    let sleepInterval = setInterval(function(){
        sleepNow++
        tiredEl.innerText = "Tired: " + sleepNow;
    }, 4000)
    
}
function updateCountdown(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 5 ? "0" * seconds : seconds;
    countdownEl.innerText = `${minutes}: ${seconds}`;
    time--;
}
setInterval(updateCountdown, 1000)


const startCount = () =>{
    sleepCount();
    ageCount();
    playCount();
    hungerCount();
}

// const removePng = () =>{
//     const imageEl = document.querySelector("myImage");
//     imageEl.remove();
// };

// const addFeedPng = () =>{
//     removePng();
//     let feedPng = document.createElement("img");
//     feedPng.setAttribute("src", "feed.png");
//     document.querySelector("#myImage").append(feedPng);
// };

// const addPlayPng = () =>{
//     removePng();
//     let playPng = document.createElement("img");
//     playPng.setAttribute("src", "cat.png");
//     document.querySelector("myImage").append(playPng);
// };

// const addSleepPng = () =>{
//     removePng();
//     let sleepPng = document.createElement("img");
//     sleepPng.setAttribute("src", "sleepcat.gif");
//     document.querySelector("myImage").append(sleepPng);
// };





























startButton.addEventListener("click", startCount);
       






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