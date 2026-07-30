import {phrases} from "./js/phrases.js";
import {events} from "./js/events.js";

// elem
const button = document.getElementById("button");
const message = document.getElementById("message");
const counter = document.getElementById("counter");

// bg
const backgrounds = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
];

const randomBackground =
    backgrounds[Math.floor(Math.random()*backgrounds.length)];

document.body.style.backgroundImage =
    `url(img/backgrounds/${randomBackground})`;

// events
let clicks = 0;

button.addEventListener("click", () => {
    clicks++;
    counter.textContent =
        `Поебали уже ${clicks} раз`;
    message.textContent =
        phrases[Math.floor(Math.random()*phrases.length)];

    events.forEach(event=>{
        if(Math.random()<event.chance){
            event.action();
        }
    });
});