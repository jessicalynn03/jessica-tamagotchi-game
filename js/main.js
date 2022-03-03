const timeH1 = document.querySelector("#timer")
const hungerEl = document.querySelector(".hunger")
const tiredEl = document.querySelector(".tired")
const boredEl = document.querySelector(".bored")
const startButton = document.querySelector("#start")
const restartButton = document.querySelector("#restart")
const yourName = document.querySelector("#yourName")

const feedPet = document.querySelector("#feed")
const playWithPet = document.querySelector("#play")
const sleepNow = document.querySelector("#sleep")

let time = 5; 
let name = ""


class Tamagotchipet{
    constructor(){
        this.name = "";
        this.hunger = hunger;
        this.tired = tired;
        this.bored = bored;
        this.age = age;
    }
}

class Tamagotchipet extends Data{
    constructor(){
        this.feed = feed;
        this.play = play;
        this.sleep = sleep;
    }
}