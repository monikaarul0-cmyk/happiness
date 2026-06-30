// ==============================
// Happy 3rd Anniversary 🤍
// script.js - Part 1
// ==============================

// Pages
const home = document.getElementById("home");
const letterPage = document.getElementById("letterPage");
const galleryPage = document.getElementById("galleryPage");
const timerPage = document.getElementById("timerPage");
const reasonPage = document.getElementById("reasonPage");
const dreamPage = document.getElementById("dreamPage");
const finalPage = document.getElementById("finalPage");
const poemPage = document.getElementById("poemPage");

// Buttons
const startBtn = document.getElementById("startBtn");
const galleryBtn = document.getElementById("galleryBtn");
const timerBtn = document.getElementById("timerBtn");
const reasonBtn = document.getElementById("reasonBtn");
const dreamBtn = document.getElementById("dreamBtn");
const finalBtn = document.getElementById("finalBtn");
const poemBtn = document.getElementById("poemBtn");

// ==============================
// Hide All Pages
// ==============================

function hideAllPages(){

    home.style.display="none";
    letterPage.style.display="none";
    galleryPage.style.display="none";
    timerPage.style.display="none";
    reasonPage.style.display="none";
    dreamPage.style.display="none";
    finalPage.style.display="none";
    poemPage.style.display="none";

}

// ==============================
// Home ➜ Letter
// ==============================

startBtn.onclick=function(){

    hideAllPages();

    letterPage.style.display="block";

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ==============================
// Letter ➜ Gallery
// ==============================

galleryBtn.onclick=function(){

    hideAllPages();

    galleryPage.style.display="block";

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ==============================
// Gallery ➜ Timer
// ==============================

timerBtn.onclick=function(){

    hideAllPages();

    timerPage.style.display="block";

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};
// ==============================
// Timer ➜ Reasons
// ==============================

reasonBtn.onclick = function(){

    hideAllPages();

    reasonPage.style.display = "block";

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

};

// ==============================
// Reasons ➜ Dream
// ==============================

dreamBtn.onclick = function(){

    hideAllPages();

    dreamPage.style.display = "block";

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

};

// ==============================
// Dream ➜ Final
// ==============================

finalBtn.onclick = function(){

    hideAllPages();

    finalPage.style.display = "block";

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

};

// ==============================
// Final ➜ Tamil Poem
// ==============================

poemBtn.onclick = function(){

    hideAllPages();

    poemPage.style.display = "block";

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

};

// ==============================
// Anniversary Timer
// ==============================

const startDate = new Date("July 05, 2023 00:00:00");

function updateTimer(){

    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if(days < 0){

        months--;

        const lastMonth = new Date(
            now.getFullYear(),
            now.getMonth(),
            0
        );

        days += lastMonth.getDate();

    }

    if(months < 0){

        years--;

        months += 12;

    }

    const diff = now - startDate;

    const hours = Math.floor(diff/(1000*60*60)) % 24;

    const minutes = Math.floor(diff/(1000*60)) % 60;

    const seconds = Math.floor(diff/1000) % 60;

    document.getElementById("years").innerHTML = years;
    document.getElementById("months").innerHTML = months;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}

updateTimer();

setInterval(updateTimer,1000);

// ==============================
// Smooth Fade Effect
// ==============================

document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("click",()=>{

        document.body.style.opacity=".98";

        setTimeout(()=>{

            document.body.style.opacity="1";

        },200);

    });

});

// ==============================
// Photo Click Zoom
// ==============================

document.querySelectorAll(".photo img").forEach(photo=>{

    photo.addEventListener("click",()=>{

        if(photo.style.transform=="scale(1.2)"){

            photo.style.transform="scale(1)";

        }

        else{

            photo.style.transform="scale(1.2)";

        }

    });

});

// ==============================
// Image Fade In
// ==============================

window.onload=function(){

    document.querySelectorAll(".photo img").forEach((img,index)=>{

        img.style.opacity="0";

        setTimeout(()=>{

            img.style.transition=".8s";

            img.style.opacity="1";

        },index*150);

    });

};

// ==============================
// Scroll To Top On Every Page
// ==============================

function goTop(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

// ==============================
// Final Ending Effect
// ==============================

if(poemBtn){

poemBtn.addEventListener("click",()=>{

setTimeout(()=>{

alert("🤍 Happy 3rd Love Anniversary 🤍\n\nForever Starts With You ♾️");

},1500);

});

}

// ==============================
// Console Message
// ==============================

console.log("🤍 Website Created With Love 🤍");

console.log("Happy 3rd Love Anniversary");

console.log("Forever Starts With You ♾️");

// ==============================
// End of script.js
// ==============================