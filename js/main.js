/*
====================================
 Birthday Gift
 Home Page Main JS
====================================
*/


/* ================================
   Canvas 星空系统
================================ */


const canvas = document.getElementById("starCanvas");

const ctx = canvas.getContext("2d");


let width;
let height;



function resizeCanvas(){

    width = canvas.width = window.innerWidth;

    height = canvas.height = window.innerHeight;

}


resizeCanvas();


window.addEventListener(
    "resize",
    resizeCanvas
);



/* ================================
   创建星星
================================ */


const stars = [];

const STAR_COUNT = 350;



class Star {


    constructor(){


        this.x =
            Math.random() * width;


        this.y =
            Math.random() * height;


        this.radius =
            Math.random() * 1.5 + 0.3;



        this.alpha =
            Math.random();



        this.speed =
            Math.random() * 0.02 + 0.005;



        this.direction =
            Math.random() > 0.5
            ? 1
            : -1;


    }



    update(){


        this.alpha +=
            this.speed *
            this.direction;



        if(
            this.alpha >= 1 ||
            this.alpha <= 0.2
        ){

            this.direction *= -1;

        }


    }



    draw(){


        ctx.beginPath();


        ctx.arc(
            this.x,
            this.y,
            this.radius,
            0,
            Math.PI * 2
        );


        ctx.fillStyle =
            `rgba(255,255,255,${this.alpha})`;



        ctx.fill();


    }


}




for(
    let i = 0;
    i < STAR_COUNT;
    i++
){

    stars.push(
        new Star()
    );

}





/* ================================
   星空动画
================================ */


function animateStars(){


    ctx.clearRect(
        0,
        0,
        width,
        height
    );



    stars.forEach(star=>{

        star.update();

        star.draw();

    });



    requestAnimationFrame(
        animateStars
    );


}


animateStars();





/* ================================
   流星系统
================================ */


const meteorContainer =
    document.getElementById(
        "meteorContainer"
    );




function createMeteor(){


    const meteor =
        document.createElement(
            "div"
        );



    meteor.className =
        "meteor";



    meteor.style.left =
        Math.random()*80 + "%";



    meteor.style.top =
        Math.random()*40 + "%";



    meteor.style.animationDuration =
        (1.5 + Math.random()*1.5)
        +"s";



    meteorContainer.appendChild(
        meteor
    );



    setTimeout(()=>{


        meteor.remove();


    },3000);



}




// 随机出现流星

setInterval(()=>{


    createMeteor();


},2500);





/* ================================
   添加流星 CSS
   JS动态注入
================================ */


const meteorStyle =
document.createElement("style");


meteorStyle.innerHTML = `


.meteor{


position:absolute;


width:120px;

height:2px;


background:

linear-gradient(
90deg,
rgba(255,255,255,0),
white
);


transform:

rotate(-45deg);


filter:

drop-shadow(
0 0 8px white
);


animation:

meteorMove linear forwards;


}


@keyframes meteorMove{


from{

transform:

translate(0,0)
rotate(-45deg);


opacity:1;


}


to{


transform:

translate(
-500px,
500px
)
rotate(-45deg);


opacity:0;


}


}


`;



document.head.appendChild(
    meteorStyle
);





/* ================================
   按钮进入生日页面
================================ */


const enterBtn =
document.getElementById(
    "enterBtn"
);



const bgm =
document.getElementById(
    "bgm"
);




enterBtn.addEventListener(
    "click",
    ()=>{


        // 播放音乐

        if(bgm){

            bgm.volume = 0.5;


            bgm.play()
            .catch(()=>{});


        }



        // 页面转场

        document.body.style.transition =
            "all 1s ease";


        document.body.style.opacity =
            "0";



        setTimeout(()=>{


            window.location.href =
                "birthday.html";



        },1000);



    }
);
