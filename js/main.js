const countdownEl = document.querySelector("#countdown")
let hungerEl = document.getElementById("hunger")
let tiredEl = document.getElementById("tired")
let boredEl = document.getElementById("bored")

const startButton = document.querySelector("#start")
const restartButton = document.querySelector("#restart")
const pauseButton = document.querySelector("#pause")
const yourName = document.querySelector("#yourName")
const ageEl = document.querySelector(".age")

const feedBtn = document.querySelector("#feed")
const playBtn = document.querySelector("#play")
const sleepBtn = document.querySelector("#sleep")


// let startingMinutes = 5;
// let time = startingMinutes * 60;
// const minutes = Math.floor(time / 60);
// const seconds = time % 60;
// let name = ""

let hungerNow = 0;
let playNow = 0;
let sleepNow = 0;
let age = 0;


const subFood = () => {
    if(hungerNow > 0){
        hungerNow--;
        hungerEl.innerText = "Hungry: " + hungerNow;
    }
    gameOver();
};

const subPlay = () => {
    if(playNow > 0){
        playNow--
        boredEl.innerText = "Bored: " + playNow; 
    }
    gameOver();
};

const subSleep = () => {
    if(sleepNow > 0){
        sleepNow--
        tiredEl.innerText = "Tired: " + sleepNow;
    }
    gameOver();
};

feedBtn.addEventListener("click", subFood);
playBtn.addEventListener("click", subPlay);
sleepBtn.addEventListener("click", subSleep);

let ageInterval = null;
let hungerInterval = null;
let playInterval = null;
let sleepInterval = null;

const ageCount = () =>{
    ageInterval = setInterval(function(){
        if(age < 10) {
            age++
            ageEl.innerText = "Age: " + age;
        }
        }, 20000)
}

const hungerCount = () =>{
    hungerInterval = setInterval(function(){
        if(hungerNow < 10) {
            hungerNow++
            hungerEl.innerText = "Hungry: " + hungerNow;
        }
    }, 2000)
}

const playCount = () =>{
    playInterval = setInterval(function(){
        if(playNow < 10) {
            playNow++ 
            boredEl.innerText = "Bored: " + playNow;
        }
}, 3000)
}

const sleepCount = () =>{
    sleepInterval = setInterval(function(){
        if(sleepNow < 10) {
            sleepNow++
            tiredEl.innerText = "Tired: " + sleepNow;
        }
    }, 4000)
    
}
// function updateCountdown(){
//     const minutes = Math.floor(time / 60);
//     let seconds = time % 60;
//     // seconds = seconds < 5 ? "0" * seconds : seconds;
//     countdownEl.innerText = `${minutes}: ${seconds}`;
//     time--;
// }
// setInterval(updateCountdown, 1000)




const startCount = () =>{
    sleepCount();
    ageCount();
    playCount();
    hungerCount();
    feedBtn.addEventListener("click", subFood);
    playBtn.addEventListener("click", subPlay);
    sleepBtn.addEventListener("click", subSleep);
}

const removePng = () =>{
    const imageEl = document.querySelector("#myImage");
    const gameClass = document.querySelector(".game")
    imageEl.removeChild("#myImage");
};

const addFeedPng = () =>{
    removePng();
    let feedPng = document.createElement("img");
    feedPng.setAttribute("src", "feed.png");
    document.querySelector("#myImage").appendChild(feedPng);
};

const addPlayPng = () =>{
    removePng();
    let playPng = document.createElement("img");
    playPng.setAttribute("src", "cat.png");
    document.querySelector("myImage").appendChild(playPng);
};

const addSleepPng = () =>{
    removePng();
    let sleepPng = document.createElement("img");
    sleepPng.setAttribute("src", "sleepcat.gif");
    document.querySelector("myImage").appendChild;(sleepPng);
};



const gameOver = () => {
    if(hungerNow >= 10) {
        clearInterval(hungerInterval);
        clearInterval(playInterval);
        clearInterval(sleepInterval);
        clearInterval(ageInterval);
        feedBtn.removeEventListener("click", subFood);
        playBtn.removeEventListener("click", subPlay);
        sleepBtn.removeEventListener("click", subSleep);
    } else if(playNow >= 10) {
        clearInterval(hungerInterval);
        clearInterval(playInterval);
        clearInterval(sleepInterval);
        clearInterval(ageInterval);
        feedBtn.removeEventListener("click", subFood);
        playBtn.removeEventListener("click", subPlay);
        sleepBtn.removeEventListener("click", subSleep);
    } else if(sleepNow >= 10) {
        clearInterval(hungerInterval);
        clearInterval(playInterval);
        clearInterval(sleepInterval);
        clearInterval(ageInterval);
        feedBtn.removeEventListener("click", subFood);
        playBtn.removeEventListener("click", subPlay);
        sleepBtn.removeEventListener("click", subSleep);
    }
}




// pauseButton.addEventListener("click", stopCount)

startButton.addEventListener("click", startCount);














// if(hungerNow >= 10 || playNow >= 10 || sleepNow >= 10) {
//     clearInterval(hungerInterval);
//     clearInterval(playInterval);
//     clearInterval(sleepInterval);
//     clearInterval(ageInterval);
//     feedBtn.removeEventListener("click", subFood);
//     playBtn.removeEventListener("click", subPlay);
//     sleepBtn.removeEventListener("click", subSleep);
// }















            
            
            
            
            
            
            // class Tamagotchipet extends Data{
                //     constructor(){
                    //         this.feed = feed;
                    //         this.play = play;
                    //         this.sleep = sleep;
                    //     }
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



