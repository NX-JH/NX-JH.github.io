/*-------------------VALIDATED 31/7------------------------*/

/*-----Select and link the corresponding parts in CSS------*/
const page0btn = document.querySelector("#page0btn");
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");

const historyofbread = document.querySelector("#historyofbread");
const typesofbread = document.querySelector("#typesofbread");
const gamesandquizzes = document.querySelector("#gamesandquizzes");

const page0btnmobile = document.querySelector("#page0btnmobile");
const page1btnmobile = document.querySelector("#page1btnmobile");
const page2btnmobile = document.querySelector("#page2btnmobile");
const page3btnmobile = document.querySelector("#page3btnmobile");

/*Select all pages*/
const allpages = document.querySelectorAll(".page");

/* Hide all pages*/
function hideall() {
    for (let onepage of allpages) {
        onepage.style.display = "none";
    }
}

/*Remove underline from all navigation buttons-PC*/
function removeUnderline() {
    page0btn.classList.remove("active");
    page1btn.classList.remove("active");
    page2btn.classList.remove("active");
    page3btn.classList.remove("active");

/*Remove underline from all navigation buttons-MOBLIE*/
    page0btnmobile.classList.remove("active");
    page1btnmobile.classList.remove("active");
    page2btnmobile.classList.remove("active");
    page3btnmobile.classList.remove("active");
}

/*Show underline for selected page*/
function show(pgno) {

    hideall();
    removeUnderline();

    if (pgno == 0) {
        document.querySelector("#page0").style.display = "block";
        page0btn.classList.add("active");
        page0btnmobile.classList.add("active");
    }

    else if (pgno == 1) {
        document.querySelector("#page1").style.display = "block";
        page1btn.classList.add("active");
        page1btnmobile.classList.add("active");
    }

    else if (pgno == 2) {
        document.querySelector("#page2").style.display = "block";
        page2btn.classList.add("active");
        page2btnmobile.classList.add("active");
    }
    
    else if (pgno == 3) {
        document.querySelector("#page3").style.display = "block";
        page3btn.classList.add("active");
        page3btnmobile.classList.add("active");
    }

}

/* Listen for Navigation bar button clicks and display*/
page0btn.addEventListener("click", function () {
    show(0);
});

page0btnmobile.addEventListener("click", function () {
    show(0);
});

page1btn.addEventListener("click", function () {
    show(1);
});

page1btnmobile.addEventListener("click", function () {
    show(1);
});

historyofbread.addEventListener("click", function () {
    show(1);
});

page2btn.addEventListener("click", function () {
    show(2);
});

page2btnmobile.addEventListener("click", function () {
    show(2);
});

typesofbread.addEventListener("click", function () {
    show(2);
});

page3btn.addEventListener("click", function () {
    show(3);
});

page3btnmobile.addEventListener("click", function () {
    show(3);
});

gamesandquizzes.addEventListener("click", function () {
    show(3);
});

/*Display homepage as default*/
show(0);




/*-----Store breads info in breadList (carousel)-----*/
const breadList = [
    {
        name: "France",
        bread: "Baguette",
        image: "images.A02/baguette1.png"
    },
    {
        name: "Italy",
        bread: "Ciabatta",
        image: "images.A02/ciabatta1.png"
    },
    {
        name: "India",
        bread: "Chanai ",
        image: "images.A02/roti.png"
    },
    {
        name: "Germany",
        bread: "Pretzel",
        image: "images.A02/pretzel.png"
    },
    {
        name: "Mexico",
        bread: "Bolillo",
        image: "images.A02/bolillo.png"
    },
    {
        name: "Japan",
        bread: "Bread",
        image: "images.A02/milkbread.png"
    },
    {
        name: "Turkey",
        bread: "Pide",
        image: "images.A02/pide.png"
    },
    {
        name: "Israel",
        bread: "Challah",
        image: "images.A02/challah.png"
        
    },
    {
        name: "Philippines",
        bread: "Pandesal",
        image: "images.A02/pandesal.png"
        
    },
    {
        name: "GREECE",
        bread: "lagana",
        image: "images.A02/lagana.png"
        
    }
];

let start = 0;

function showCountries(){
    
    /*Show 5 breads at once, starting from bread no.0*/
    for(let i = 0; i < 5; i++){

        let bread = breadList[start + i];

        document.querySelector("#img" + (i+1)).src = bread.image;
        document.querySelector("#country" + (i+1)).innerHTML = bread.name;
        document.querySelector("#bread" + (i+1)).innerHTML = bread.bread;
    }

}

showCountries();


const nextBtn=document.getElementById("nextBtn");
const prevBtn=document.getElementById("prevBtn");

/*Check if btn clicked->change content*/
nextBtn.addEventListener("click", function(){

    if(start < breadList.length - 5){
        start++;
        showCountries();
    }

});

/*Check if btn clicked->change content*/
prevBtn.addEventListener("click", function(){

    if(start > 0){
        start--;
        showCountries();
    }

});


/*-----storing of info into breads for Types Of Bread------*/
const breads={

    white:{
    title:"White Bread",

    image:"images.A02/whitebread.jpg",

     ingredients:[
            "500g Bread Flour",
            "7g Yeast",
            "320ml Warm Water",
            "10g Salt",
            "15g Butter"
        ],

        recipe:[
            "Mix ingredients.",
            "Knead 10 minutes.",
            "Proof 1 hour.",
            "Bake 200°C for 30 minutes."
        ]

    },

    SourDough:{
    title:"SourDough Bread",

    image:"images.A02/sourdough.jpg",

     ingredients:[
            "500g Bread Flour",
            "100g sourdough starter",
            "350ml Water",
            "10g Salt",
            
        ],

        recipe:[
            "Mix all ingredients until combined.",
            "Knead until smooth.",
            "Let the dough ferment for 4–6 hours.",
            "Shape and proof for 2–3 hours.",
            "Bake at 230°C for 35–40 minutes."
        ]

    },

    
    Baguette:{
    title:"Baguette",

    image:"images.A02/baguette.jpg",

     ingredients:[
            "500g Bread Flour",
            "7g Instant yeast",
            "325ml Water",
            "10g Salt",
            
        ],

        recipe:[
            "Mix the ingredients together.",
            "Knead until elastic.",
            "Let the dough rise for 1 hour.",
            "Shape into long loaves.",
            "Bake at 230°C for 20–25 minutes."
        ]

    },

    Ciabatta:{
    title:"Ciabatta",

    image:"images.A02/ciabatta.png",

     ingredients:[
            "500g Bread Flour",
            "7g Instant yeast",
            "400ml Water",
            "7g Instant yeast",
            "15ml Olive oil",
            
        ],

        recipe:[
            "Mix all ingredients into a wet dough.",
            "Let the dough rise for 1–2 hours.",
            "Fold the dough gently.",
            "Shape into rectangles.",
            "Bake at 220°C for 25–30 minutes."
        ]
      },

  Naan:{
    title:"Naan",

    image:"images.A02/naan.jpg",

     ingredients:[
            "500g Plain flour",
            "180g Plain yogurt",
            "120ml Warm water",
            "7g Instant yeast",
            "1 tsp Sugar",
            "1 tsp Salt",
            "2 tbsp Oil",
            
        ],

        recipe:[
            "Mix all ingredients into a soft dough.",
            "Knead for 8–10 minutes.",
            "Let rise for 1 hour.",
            "Roll into oval shapes.",
            "Cook on a hot pan or in a tandoor until golden."
        ]
      },

      Bagel:{
    title:"Bagel",

    image:"images.A02/bagel.jpg",

     ingredients:[
            "500g Bread flour",
            "300ml Warm water",
            "7g Instant yeast",
            "1 tbsp Sugar",
            "10g Salt",
           
            
        ],

        recipe:[
            "Mix and knead the dough.",
            "Let rise for 1 hour.",
            "Shape into rings.",
            "Boil each bagel for 1 minute.",
            "Bake at 220°C for 20–25 minutes."
        ]
      }
  };


const whitebread = document.querySelector(".div3");
const sourdough = document.querySelector(".div4");
const baguette = document.querySelector(".div5");
const ciabatta = document.querySelector(".div6");
const naan = document.querySelector(".div7");
const bagel = document.querySelector(".div8");


/*Display recipe based on bread clicked*/
whitebread.addEventListener("click", function () {
    showBread("white");
});

sourdough.addEventListener("click", function () {
    showBread("SourDough");
});

baguette.addEventListener("click", function () {
    showBread("Baguette");
});

ciabatta.addEventListener("click", function () {
    showBread("Ciabatta");
});

naan.addEventListener("click", function () {
    showBread("Naan");
});

bagel.addEventListener("click", function () {
    showBread("Bagel");
});

/*Display data depending on clicked bread*/
function showBread(breadName){

    /*Access bread info based on name*/
    /*Inner html to allow content to be changed*/
    let bread = breads[breadName];

    document.querySelector("#recipeImg").src = bread.image;

    document.querySelector("#recipeTitle").innerHTML = bread.title;

    document.querySelector("#ingredients").innerHTML ="<h3>Ingredients</h3>" + bread.ingredients.join("<br>");
    
    document.querySelector("#steps").innerHTML ="<h3>Recipe</h3>" + bread.recipe.join("<br>");
}

/*-----Game-----*/
/*Data for burnt bread*/
const burntbreadpos = document.getElementById("burntbreadpos");
var burntVisible = false;
let burntX = 0;
let burntY = 0;
let burntspeed = 25;
let burntspeednormal=burntspeed;

/*Data for normal bread*/
const breadpos = document.getElementById("breadpos"); 
let currentX = 0;  
let currentY = 0;  
let speed = 25;
let normalspeed=speed;


/*Data for speedup cube*/
const speeduppos = document.getElementById("speedup");
var speedupVisible = false;
let speedupX = 0;
let speedupY = 0;
let speedupspeed=20;

/*Data for slowdown cube*/
const slowdownpos = document.getElementById("slowdown");
var slowdownVisible = false;
let slowdownX = 0;
let slowdownY = 0;
let slowdownspeed=20;


const basketwithoutbread = document.getElementById("basketwithoutbread"); 
const gamearea = document.getElementById("game");

let basketposX = 0;

let basketleft=0;
let basketright=0;

let leftcatch = 0;
let rightcatch = 0;

let mouseX = 0;

/*Get the X coordinate of most left of game area*/
let gamearealeft = gamearea.getBoundingClientRect().left;


/*select a random number between min-max and round off to nearest value*/
function GetRandom(min,max){
  return Math.round(Math.random() * (max - min)) + min;
}

const gamestartbtn = document.getElementById("gamestartbtn");
const timerDisplay = document.getElementById("timer");

/*Interval IDs*/
let breadfallingitvid;
let speedupInterval;
let slowdownInterval;

/*Start button*/
gamestartbtn.addEventListener("click", startGame);

/*Starts the entire game*/
function startGame()

{
/*Reset Score when startbtn is pressed*/
score = 0;
scorebox.innerHTML = "Score: " + score;

/*hide these objects when new game starts*/
burntVisible = false;
speedupVisible = false;
slowdownVisible = false;

breadpos.style.display = "block";
burntbreadpos.style.display = "none";
speeduppos.style.display = "none";
slowdownpos.style.display = "none";

    gamestartbtn.disabled = true;


    spawnbread();


    breadfallingitvid = setInterval(breadfalling,20);

    speedupInterval = setInterval(SpawnSpeedup,10000);
    slowdownInterval = setInterval(SpawnSlowdown,10000);

    /*-----Timer-----*/
    let timeLeft = 60;

    /*Display default 60s*/
    timerDisplay.innerHTML = timeLeft;

    /*Function called every second*/
    let countdown = setInterval(function(){

        timeLeft--;

        /*Displays time that have already started decreasing*/
        timerDisplay.innerHTML = timeLeft;

        /* Remove all obejcts when game ends*/
        if(timeLeft <= 0)
        {
            clearInterval(countdown);
            clearInterval(breadfallingitvid);
            clearInterval(speedupInterval);
            clearInterval(slowdownInterval);

            breadpos.style.display = "none";
            burntbreadpos.style.display = "none";
            speeduppos.style.display = "none";
            slowdownpos.style.display = "none";

            gamestartbtn.disabled = false;

            alert("Game Over!");
        }

    },1000);
}



/*Uses GetRandom to decide where bread will be spawning*/
/*client width = total width*/
function spawnbread()
{

/* prevent the bread from going out of game area*/
currentX = GetRandom(0,gamearea.clientWidth - breadpos.clientWidth); 

/*Bread will always spawn at the top*/
currentY = 0;  

/*Spawns bread current X px dist from the left*/
breadpos.style.left = currentX + "px";  
breadpos.style.top = currentY + "px";
}

function spawnBurntBread()
{
    burntX = GetRandom(0, gamearea.clientWidth - burntbreadpos.clientWidth);
    burntY = 0;

    burntbreadpos.style.left = burntX + "px";
    burntbreadpos.style.top = burntY + "px";
}

function spawnspeedup()
{
    speedupX = GetRandom(0, gamearea.clientWidth - speeduppos.clientWidth);
    speedupY = 0;

    speeduppos.style.left = speedupX + "px";
    speeduppos.style.top = speedupY + "px";
}

function spawnslowdown()
{
    slowdownX = GetRandom(0, gamearea.clientWidth - slowdownpos.clientWidth);
    slowdownY = 0;

    slowdownpos.style.left = slowdownX + "px";
    slowdownpos.style.top = slowdownY + "px";
}

/*Check if cube spawned, if not, spawns*/
function SpawnSpeedup()
{
if(speedupVisible == false)
     { 
        speedupVisible = true;
        speeduppos.style.display = "block";
        spawnspeedup(); 
     }

    }
function SpawnSlowdown()
{
if(slowdownVisible == false)
     { 
        slowdownVisible = true;
        slowdownpos.style.display = "block";
        spawnslowdown(); 
     }

    }


const scorebox=document.getElementById("scorebox"); 

var score=0;

const popAudio = new Audio("audio/breadcatch.mp3");

/* Ensure bread respawn when caught*/
function breadfalling(){
  currentY += speed;
  breadpos.style.top = currentY + "px";

let basketTop = basketwithoutbread.offsetTop;

let breadCenter = currentX + breadpos.clientWidth / 2;

/*Check if bread is within basket range*/
if (
    breadCenter > leftcatch &&
    breadCenter < rightcatch &&
    currentY + breadpos.clientHeight >= basketTop)
{
    /*Audio played whenever nice bread caught*/
    score++;
    scorebox.innerHTML = "Score: " + score;
    popAudio.pause();
    popAudio.currentTime = 0;
    popAudio.play();

if (!burntVisible && Math.random() < 0.80)
    {
        burntVisible = true;

        burntbreadpos.style.display = "block";
        spawnBurntBread();
    }

    spawnbread();

    return;
}


/*Check if things below are caught, if yes, apply effect*/
if (burntVisible)
{
    burntY += burntspeed;
    burntbreadpos.style.top = burntY + "px";

    let burntCenter = burntX + burntbreadpos.clientWidth / 2;

    if (
        burntCenter > leftcatch &&
        burntCenter < rightcatch &&
        burntY + burntbreadpos.clientHeight >= basketTop
    )
    {
        score = score - 5;
        scorebox.innerHTML = "Score: " + score;

        burntbreadpos.style.display = "none";
        burntVisible = false;
    }

    else if (burntY + burntbreadpos.clientHeight >= gamearea.clientHeight)
    {
        burntbreadpos.style.display = "none";
        burntVisible = false;
    }
}

    if (speedupVisible)
    {
        speedupY += speedupspeed;
        speeduppos.style.top = speedupY + "px";

    let speedupCenter = speedupX + speeduppos.clientWidth / 2;

    if (
        speedupCenter > leftcatch &&
        speedupCenter < rightcatch &&
        speedupY + speeduppos.clientHeight >= basketTop
    )
    {
        speed=normalspeed*2;
         burntspeed=burntspeednormal*2;

        setTimeout(function()
        {speed = normalspeed;}, 5000);

        setTimeout(function()
        {burntspeed = burntspeednormal;},5000);

          speeduppos.style.display = "none";
        speedupVisible = false;

    }

    else if (speedupY + speeduppos.clientHeight >= gamearea.clientHeight)
    {
        speeduppos.style.display = "none";
        speedupVisible = false;
    }
}

if (slowdownVisible)
{
    slowdownY += slowdownspeed;
    slowdownpos.style.top = slowdownY + "px";

    let slowdownCenter = slowdownX + slowdownpos.clientWidth / 2;

    if (
        slowdownCenter > leftcatch &&
        slowdownCenter < rightcatch &&
        slowdownY + slowdownpos.clientHeight >= basketTop
    )
    {
        speed=normalspeed/2;
        burntspeed=burntspeednormal/2;
        setTimeout(function()
        {speed = normalspeed;}, 5000);

        setTimeout(function()
        {burntspeed = burntspeednormal;},5000);

        slowdownpos.style.display = "none";
        slowdownVisible = false;

    }

    else if (slowdownY + slowdownpos.clientHeight >= gamearea.clientHeight)
    {
        slowdownpos.style.display = "none";
        slowdownVisible = false;
    }
}


/*Ensure bread respawn when not caught*/
else if (currentY + breadpos.clientHeight >= gamearea.clientHeight)
{
  spawnbread();
}
}


function mousepos(event) {

/*mouse position*/
mouseX = event.clientX; 

/*basket position to be calculated from the left of the game area not webpage*/
basketposX = mouseX - gamearealeft; 

/* to calculate maximum of X*/
const maxX = gamearea.clientWidth - basketwithoutbread.clientWidth;  

/*Basekt does not exceed minimum X/ the leftest side of gamearea*/
  if (basketposX - basketwithoutbread.clientWidth / 2 < 0)
    {
        basketposX = basketwithoutbread.clientWidth / 2;
    }


/*Basekt does not exceed maximum X/ the rightest side of gamearea*/
 else if (basketposX - basketwithoutbread.clientWidth / 2 > maxX)
    {
        basketposX = maxX + basketwithoutbread.clientWidth / 2;
    }

basketleft = basketposX - basketwithoutbread.clientWidth / 2;
basketright = basketposX + basketwithoutbread.clientWidth / 2;

/*increase catching range by 10*/
leftcatch = basketleft - 10;

rightcatch = basketright + 10;

    /*check everything fufills, then move the basket*/
    basketwithoutbread.style.left = basketposX - basketwithoutbread.clientWidth / 2  + "px";  
}


/*calls for mousepos function when game area is clicked*/
gamearea.addEventListener("mousemove", mousepos);


const quizbtnSubmit=document.querySelector("#quizbtnSubmit");
const quizscorebox=document.querySelector("#quizscorebox");

/*listen for click when sumbit btn is pressed*/
quizbtnSubmit.addEventListener("click",CheckAns);

/*initialzie value of these*/
var q1,q2,q3,quizscore=0;

function CheckAns(){

/*Prevent score from accumulating when redoing*/
quizscore=0; 

/*read the value of the selected radio button for q1*/
q1=document.querySelector("input[name='q1']:checked").value;
console.log(q1);
if(q1=="14 000 years ago")quizscore++; 

/*read the value of the selected radio button for q2*/
q2=document.querySelector("input[name='q2']:checked").value;
console.log(q2);
if(q2=="bread flour")quizscore++;

/*read the value of the selected radio button for q3*/
q3=document.querySelector("input[name='q3']:checked").value;
console.log(q3); 
if(q3=="fluffy")quizscore++;

/*Allow "score" value to change*/
quizscorebox.innerHTML="Score:"+quizscore;
}

/*-----Loading screen-----*/
const startBtn = document.querySelector("#startBtn");
const loadingScreen = document.querySelector("#loadingScreen");

startBtn.addEventListener("click", function(){

    /*Make loading page fade and turns invincible*/
    loadingScreen.style.opacity = "0"; 
    /*Duration for the animation*/
    loadingScreen.style.transition = "0.8s";
    
    /*Completely remove loading page when reaches 0.8s*/
    setTimeout(function(){

        loadingScreen.style.display = "none"; 

    },800);

  });

const baker = document.querySelector("#bakerSprite");

/*Make every frame have samee W and H*/
const FRAME_WIDTH = 165;
const FRAME_HEIGHT = 165;

/*Space/blank for white parts*/
const H_GAP = 12;
const V_GAP = 13;

let frame = 0;

setInterval(function(){

    let col = frame % 4;
    let row = Math.floor(frame / 4);

    baker.style.backgroundPosition =
        -(col * (FRAME_WIDTH + H_GAP)) + "px " +
        -(row * (FRAME_HEIGHT + V_GAP)) + "px";

    frame++;

    if(frame == 8){
        frame = 0;
    }

},180);

/*Full Screen and exit Full Screen*/
const btnFS=document.querySelector("#btnFS");
const btnWS=document.querySelector("#btnWS");

btnFS.addEventListener("click",enterFullscreen);
btnWS.addEventListener("click",exitFullscreen);

function enterFullscreen() { //must be called by user generated event
document.documentElement.requestFullscreen();
}

function exitFullscreen() {
document.exitFullscreen();
}

    
