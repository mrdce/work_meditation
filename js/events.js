export const events = [

{
    chance:0.01,
    action(){
        alert("☄️ Метеорит решил, что дедлайн больше не проблема.");
    }
},

{
    chance:0.01,
    action(){
        const fawn = document.createElement("img");
        fawn.src = "img/events/fawn.gif";
        fawn.className = "fawnWalk";
        document.body.appendChild(fawn);
        fawn.addEventListener("animationend", () => fawn.remove());
    }
},

{
    chance:0.01,
    action(){
        const dog = document.createElement("img");
        dog.src = "img/events/doggo.webp";
        dog.className = "dogWalk";
        document.body.appendChild(dog);
        dog.addEventListener("animationend", () => dog.remove());
    }
}

];