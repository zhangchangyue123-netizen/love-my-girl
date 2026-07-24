/*
====================================================
 Birthday Gift
 birthday.js
 Final Architecture - Part 1
====================================================
*/

/* ============================================
   DOM
============================================ */

const scenes = [...document.querySelectorAll(".scene")];
const nextButtons = document.querySelectorAll(".next-btn");

const music = document.getElementById("birthdayMusic");

const canvas = document.getElementById("fireworkCanvas");
const ctx = canvas.getContext("2d");


/* ============================================
   Canvas
============================================ */

function resizeCanvas(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);


/* ============================================
   Global State
============================================ */

const state = {

    currentScene:0,

    musicStarted:false,

    candleLight:false,

    photoPlayed:false,

    typingPlayed:false,

    fireworkTimer:null,

    heartTimer:null,

    petalTimer:null

};


/* ============================================
   Init
============================================ */

init();

function init(){

    bindButtons();

    bindMusic();

    showScene(0);

}


/* ============================================
   Scene Manager
============================================ */

function showScene(index){

    if(index<0 || index>=scenes.length){

        return;

    }

    scenes.forEach(scene=>{

        scene.classList.remove("active");

    });

    scenes[index].classList.add("active");

    state.currentScene=index;

    enterScene(index);

}



function nextScene(){

    if(state.currentScene>=scenes.length-1){

        return;

    }

    showScene(state.currentScene+1);

}



/* ============================================
   Enter Scene
============================================ */

function enterScene(index){

    clearSceneEffects();

    switch(index){

        case 0:

            enterStarScene();

            break;

        case 1:

            enterCakeScene();

            break;

        case 2:

            enterCandleScene();

            break;

        case 3:

            enterFireworkScene();

            break;

        case 4:

            enterPhotoScene();

            break;

        case 5:

            enterTimelineScene();

            break;

        case 6:

            enterLoveScene();

            break;

        case 7:

            enterEndScene();

            break;

    }

}


/* ============================================
   Leave All Scene Effects
============================================ */

function clearSceneEffects(){

    clearInterval(state.fireworkTimer);

    clearInterval(state.heartTimer);

    clearInterval(state.petalTimer);

}


/* ============================================
   Buttons
============================================ */

function bindButtons(){

    nextButtons.forEach(button=>{

        button.addEventListener("click",()=>{

            nextScene();

        });

    });

}


/* ============================================
   Music
============================================ */

function bindMusic(){

    window.addEventListener(

        "click",

        ()=>{

            if(state.musicStarted){

                return;

            }

            state.musicStarted=true;

            if(music){

                music.volume=.45;

                music.play().catch(()=>{});

            }

        },

        {

            once:true

        }

    );

}


/* ============================================
   Scene 1
============================================ */

function enterStarScene(){

    // Part2
}


/* ============================================
   Scene 2
============================================ */

function enterCakeScene(){

    // Part2
}


/* ============================================
   Scene 3
============================================ */

function enterCandleScene(){

    // Part2
}


/* ============================================
   Scene 4
============================================ */

function enterFireworkScene(){

    // Part2
}


/* ============================================
   Scene 5
============================================ */

function enterPhotoScene(){

    // Part3
}


/* ============================================
   Scene 6
============================================ */

function enterTimelineScene(){

    // Part3
}


/* ============================================
   Scene 7
============================================ */

function enterLoveScene(){

    // Part3
}


/* ============================================
   Scene 8
============================================ */

function enterEndScene(){

    // Part3
}


/* ============================================
   Particle Manager
============================================ */

const fireworks=[];

const hearts=[];

const petals=[];


/* ============================================
   Render Loop
============================================ */

function render(){

    ctx.clearRect(

        0,

        0,

        canvas.width,

        canvas.height

    );

    updateFireworks();

    updateHearts();

    updatePetals();

    requestAnimationFrame(render);

}

render();


/* ============================================
   Placeholder
============================================ */

function updateFireworks(){}

function updateHearts(){}

function updatePetals(){}


/* ============================================
   Utils
============================================ */

function random(min,max){

    return Math.random()*(max-min)+min;

}
