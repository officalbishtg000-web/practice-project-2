const main = document.querySelector("main");
const btn = document.querySelector("button");
const timer = document.querySelector("#timer");
const scoree = document.querySelector("#score");
const overlay = document.querySelector("#overlay");

let box = document.createElement("div");
box.classList.add("box");
 
let time = 0;
let Interval;
let score = 0
let clicked = false;




const randomColor = ()=>{

    let r = Math.floor(Math.random () * 256);
    let g = Math.floor(Math.random () * 256);
    let b = Math.floor(Math.random () * 256);

    return `rgb(${r},${g},${b})`

};


    const randomBox = ()=>{

        clicked = false; // reset for the new box
        
        box.style.backgroundColor = randomColor();
        main.append(box);

        let mainH = main.clientHeight - box.offsetHeight;
        let mainW = main.clientWidth - box.offsetWidth;


        const rY = Math.random() * mainH;
        const rX = Math.random() * mainW;
 
 
        box.style.top = `${rY}px`;
        box.style.left = `${rX}px`;
    };   

window.addEventListener("keypress" , ()=>{
    clearInterval(Interval);

    Interval = setInterval(()=>{
        randomBox();
        time += 1;
        timer.textContent = time;
    },1000);

    setTimeout(() => {
       clearInterval(Interval); 

       //Show overLay
       overlay.style.display = "flex";
       
        setTimeout(()=>{
            //remove overlay after 3 sec
            overlay.style.display = "none"

            scoree.style.display = "none"
            timer.style.display = "none"
        },3000)

    }, 10000);


});

box.addEventListener("click" , ()=>{
    score += 1;
    scoree.textContent = score;
});

box.addEventListener("click", () => {

    if (clicked) return; // ignore further clicks

    clicked = true;

    score += 1;
    scoree.textContent = score;

});

