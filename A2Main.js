/*-------------------VALIDATED 23/7------------------------*/
/* elect the navigation buttons in CSS*/
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

/*Remove underline from all navigation buttons*/
function removeUnderline() {
    page0btn.classList.remove("active");
    page1btn.classList.remove("active");
    page2btn.classList.remove("active");
    page3btn.classList.remove("active");


    page0btnmobile.classList.remove("active");
    page1btnmobile.classList.remove("active");
    page2btnmobile.classList.remove("active");
    page3btnmobile.classList.remove("active");
}

/*Show the selected page*/
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

/* Listen for button clicks*/
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

/*Store info in breadList*/
const breadList = [
    {
        name: "France",
        bread: "Baguette",
        image: "images.A02/Baguette.jpg"
    },
    {
        name: "Italy",
        bread: "Ciabatta",
        image: "images.A02/ciabatta.png"
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

/*Starts from bread0*/
let start = 0;

function showCountries(){

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

nextBtn.addEventListener("click", function(){

    if(start < breadList.length - 5){
        start++;
        showCountries();
    }

});

prevBtn.addEventListener("click", function(){

    if(start > 0){
        start--;
        showCountries();
    }

});



/*storing of info into breads*/
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

    image:"images.A02/naan.jpeg",

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

/*Select following id in CSS*/
const whitebread = document.querySelector(".div3");
const sourdough = document.querySelector(".div4");
const baguette = document.querySelector(".div5");
const ciabatta = document.querySelector(".div6");
const naan = document.querySelector(".div7");
const bagel = document.querySelector(".div8");


/*Listen for button clicks*/
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

    let bread = breads[breadName];

    document.querySelector("#recipeImg").src = bread.image;
    document.querySelector("#recipeTitle").innerHTML = bread.title;
    document.querySelector("#ingredients").innerHTML =
        "<h3>Ingredients</h3>" + bread.ingredients.join("<br>");
    document.querySelector("#steps").innerHTML =
        "<h3>Recipe</h3>" + bread.recipe.join("<br>");
}





/*search for these ids in html*/

const breadpos = document.getElementById("breadpos"); 

const basketwithoutbread = document.getElementById("basketwithoutbread"); 

const gamearea = document.getElementById("game");

/*initializing the vert and horizontal pos of these items*/

let currentX = 0;  
let currentY = 0;  

let basketposX = 0;


let mouseX = 0;
let speed = 20;

/*select a random number between min-max*/
function GetRandom(min,max){
  return Math.round(Math.random() * (max - min)) + min;
}

/*Uses GetRandom to decide where bread will be spawning*/
/*client width = total width*/
function spawnbread() {
currentX = GetRandom(0,gamearea.clientWidth - breadpos.clientWidth);  /* prevent the bread from going out of game area*/
currentY = 0;   //Bread will always spawn at the top

breadpos.style.left = currentX + "px";  
breadpos.style.top = currentY + "px";
}

spawnbread();

/*bread falls every 1 milisec*/
var breadfallingitvid = setInterval(breadfalling, 20); 

/*initializing value of width of basket*/

let basketleft=0;
let basketright=0;

let leftcatch = 0;
let rightcatch = 0;

let caught=false;

const scorebox=document.getElementById("scorebox"); 

var score=0;

const popAudio = new Audio("audio/breadcatch.mp3");

/* Ensure bread respawn when caught*/
function breadfalling(){
  currentY += speed;
  breadpos.style.top = currentY + "px";

let basketTop = basketwithoutbread.offsetTop;

let breadCenter = currentX + breadpos.clientWidth / 2;


if (!caught &&
    breadCenter > leftcatch &&
    breadCenter < rightcatch &&
    currentY + breadpos.clientHeight >= basketTop)
{
    score++;
    scorebox.innerHTML = "Score: " + score;
    popAudio.pause();
popAudio.currentTime = 0;
popAudio.play();

 if (score >= 10) {
            clearInterval(breadfallingitvid);

              breadpos.style.display = "none";

            alert("Congratulations! You scored 10 points!");
            return;   // Stop executing the rest of the function
        }

    spawnbread();

    return;
}

/*Ensure bread respawn when not caught*/
else if (currentY + breadpos.clientHeight >= gamearea.clientHeight)
{
  spawnbread();
}
}

/*store value of min X into gamearealeft*/
let gamearealeft = gamearea.getBoundingClientRect().left;

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
gamearea.addEventListener("click", mousepos);





const quizbtnSubmit=document.querySelector("#quizbtnSubmit");

/*listen for click when sumbit btn is pressed*/
quizbtnSubmit.addEventListener("click",CheckAns);

const quizscorebox=document.querySelector("#quizscorebox");

/*initialzie value of these*/
var q1,q2,q3,score=0;

function CheckAns(){

/*Prevent score from accumulating*/
score=0; 

/*read the value of the selected radio button for q1*/
q1=document.querySelector("input[name='q1']:checked").value;
console.log(q1);
if(q1=="14 000 years ago")score++; 

/*read the value of the selected radio button for q2*/
q2=document.querySelector("input[name='q2']:checked").value;
console.log(q2);
if(q2=="bread flour")score++;

/*read the value of the selected radio button for q3*/
q3=document.querySelector("input[name='q3']:checked").value;
console.log(q3); 
if(q3=="fluffy")score++;

/*Allow "score" value to change*/
quizscorebox.innerHTML="Score:"+score;
}


const startBtn = document.querySelector("#startBtn");
const loadingScreen = document.querySelector("#loadingScreen");

startBtn.addEventListener("click", function(){

    loadingScreen.style.opacity = "0"; /*Make loading page fade and turns invincible*/
    loadingScreen.style.transition = "0.8s"; /*Duration for the animation*/
    
    /*Completely remove loading page when reaches 0.8s*/
    setTimeout(function(){

        loadingScreen.style.display = "none"; 

    },800);

  });

const baker = document.querySelector("#bakerSprite");

const FRAME_WIDTH = 165;
const FRAME_HEIGHT = 165;
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

/*Full Screen*/
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

    
