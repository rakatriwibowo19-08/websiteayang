const tasks = document.querySelectorAll(".task");
const percent = document.getElementById("progressPercent");
const fill = document.getElementById("progressFill");
const text = document.getElementById("progressText");

function updateProgress() {

    const done = document.querySelectorAll(".task:checked").length;

    const total = tasks.length;

    const value = Math.round(done / total * 100);

    percent.textContent = value + "%";

    fill.style.width = value + "%";

    text.textContent = `${done} / ${total} Selesai`;

}

tasks.forEach(task => {

    task.addEventListener("change", updateProgress);

});
/* ===========================
   COPYRIGHT YEAR
=========================== */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

/* ===========================
   BACK TO TOP
=========================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
/* ===========================
   MOBILE MENU
=========================== */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("active");
        navMenu.classList.toggle("active");

    });

    // Tutup menu saat salah satu link diklik
    document.querySelectorAll(".nav-menu a").forEach(link => {

        link.addEventListener("click", () => {

            menuToggle.classList.remove("active");
            navMenu.classList.remove("active");

        });

    });

}
/* ===========================
   BMI CALCULATOR
=========================== */

const btnBMI = document.getElementById("calculateBMI");

if(btnBMI){

btnBMI.addEventListener("click",()=>{

const weight=parseFloat(document.getElementById("weight").value);

const height=parseFloat(document.getElementById("height").value)/100;

const bmi=(weight/(height*height)).toFixed(1);

const value=document.getElementById("bmiValue");
const status=document.getElementById("bmiStatus");
const desc=document.getElementById("bmiDesc");
const circle=document.querySelector(".bmi-circle");

value.textContent=bmi;

if(bmi<18.5){

status.textContent="Kurus";
desc.textContent="Berat badan berada di bawah kisaran ideal.";
circle.style.background="linear-gradient(135deg,#60a5fa,#2563eb)";

}else if(bmi<25){

status.textContent="Normal";
desc.textContent="Selamat! Berat badan sudah ideal.";
circle.style.background="linear-gradient(135deg,#34d399,#059669)";

}else if(bmi<30){

status.textContent="Overweight";
desc.textContent="Masih sedikit di atas berat badan ideal. Tetap semangat!";
circle.style.background="linear-gradient(135deg,#f59e0b,#d97706)";

}else{

status.textContent="Obesitas";
desc.textContent="Yuk mulai pola hidup sehat secara bertahap.";
circle.style.background="linear-gradient(135deg,#ef4444,#dc2626)";

}

});

}
/* ======================
   WATER TRACKER
====================== */

let water = 0;

const target = 2000;

const fillWater = document.getElementById("waterFill");

const waterText = document.getElementById("waterText");

const waterStatus = document.getElementById("waterStatus");

document.getElementById("drinkWater").onclick = () => {

if(water < target){

water += 250;

}

updateWater();

};

document.getElementById("resetWater").onclick = () => {

water = 0;

updateWater();

};

function updateWater(){

fillWater.style.height = (water/target)*100 + "%";

waterText.innerHTML = water+" / "+target+" ml";

if(water >= target){

waterStatus.innerHTML="🎉 Target air hari ini tercapai!";

}else{

waterStatus.innerHTML="Masih kurang "+(target-water)+" ml";

}

}
/* ==========================================
   SCROLL REVEAL
========================================== */

const reveals = document.querySelectorAll(
".reveal, .reveal-left, .reveal-right, .reveal-zoom"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.15
});

reveals.forEach(el=>observer.observe(el));
/*=========================
    HEALTHY CALENDAR
==========================*/

const calendar = document.getElementById("calendar");

if(calendar){

const today = new Date();

const year = today.getFullYear();

const month = today.getMonth();

const days = new Date(year,month+1,0).getDate();

const firstDay = new Date(year,month,1).getDay();

document.getElementById("monthYear").innerHTML=

today.toLocaleString("id-ID",{

month:"long",

year:"numeric"

});

for(let i=0;i<firstDay;i++){

calendar.innerHTML+="<div></div>";

}

for(let i=1;i<=days;i++){

const box=document.createElement("div");

box.classList.add("day");

box.innerHTML=i;

if(i===today.getDate()){

box.classList.add("today");

}

box.addEventListener("click",()=>{

if(box.classList.contains("success")){

box.classList.remove("success");

box.classList.add("warning");

}else if(box.classList.contains("warning")){

box.classList.remove("warning");

}else{

box.classList.add("success");

}

});

calendar.appendChild(box);

}

}
const greeting = document.getElementById("greeting");

if(greeting){

    const hour = new Date().getHours();

    if(hour < 11){

        greeting.innerHTML = "☀ Good Morning";

    }else if(hour < 15){

        greeting.innerHTML = "🌤 Good Afternoon";

    }else if(hour < 18){

        greeting.innerHTML = "🌇 Good Evening";

    }else{

        greeting.innerHTML = "🌙 Good Night";

    }

}