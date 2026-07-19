/*
====================================
 Happy Birthday · 袁雨婷 ❤️

 main.js

 首页交互逻辑

====================================
*/


// ================================
// 1. 星空粒子背景
// ================================

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");


let width;
let height;


function resize(){

    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;

}

resize();


window.addEventListener(
    "resize",
    resize
);



let stars = [];


// 创建星星

for(let i = 0; i < 220; i++){

    stars.push({

        x:Math.random()*width,

        y:Math.random()*height,

        radius:
        Math.random()*1.8,

        speed:
        Math.random()*0.35+0.05,

        alpha:
        Math.random()

    });

}



// 绘制星空

function drawStars(){


    ctx.clearRect(
        0,
        0,
        width,
        height
    );


    stars.forEach(star=>{


        ctx.beginPath();


        ctx.arc(
            star.x,
            star.y,
            star.radius,
            0,
            Math.PI*2
        );


        ctx.fillStyle=
        `rgba(255,255,255,${star.alpha})`;


        ctx.fill();



        star.y += star.speed;



        // 到底重新出现

        if(star.y > height){

            star.y=0;

            star.x=
            Math.random()*width;

        }



        // 闪烁

        star.alpha +=
        (Math.random()-0.5)*0.05;


        if(star.alpha<0.2)
            star.alpha=0.2;


        if(star.alpha>1)
            star.alpha=1;



    });


    requestAnimationFrame(
        drawStars
    );

}


drawStars();





// ================================
// 2. 流星效果
// ================================


let meteors=[];



function createMeteor(){


    meteors.push({

        x:
        Math.random()*width,

        y:-50,

        length:
        Math.random()*100+80,

        speed:
        Math.random()*8+8

    });


}



setInterval(
    createMeteor,
    2500
);



function drawMeteor(){


    meteors.forEach(
    (m,index)=>{


        ctx.beginPath();


        ctx.moveTo(
            m.x,
            m.y
        );


        ctx.lineTo(
            m.x-m.length,
            m.y+m.length
        );


        ctx.strokeStyle=
        "rgba(255,255,255,.7)";


        ctx.lineWidth=2;


        ctx.stroke();



        m.x-=m.speed;

        m.y+=m.speed;



        if(m.y>height){

            meteors.splice(index,1);

        }


    });



    requestAnimationFrame(
        drawMeteor
    );

}


drawMeteor();




// ================================
// 3. 打字机效果
// ================================


const text =

"今天，是属于你的日子。\\n愿所有美好都围绕着你。";


const typing =
document.getElementById(
    "typing"
);


let index=0;



function typingEffect(){


    if(index < text.length){


        let char=text[index];


        if(char==="\\n"){

            typing.innerHTML+="<br>";

        }
        else{

            typing.innerHTML+=char;

        }


        index++;


        setTimeout(
            typingEffect,
            120
        );


    }


}



setTimeout(
    typingEffect,
    1500
);




// ================================
// 4. 点击开始故事
// ================================


const btn =
document.getElementById(
    "startBtn"
);


const music =
document.getElementById(
    "bgm"
);



btn.addEventListener(
"click",
()=>{


    // 播放音乐

    music.play()
    .catch(()=>{

        console.log(
        "等待用户操作"
        );

    });



    // 页面淡出

    document.body.style.transition=
    "2s";


    document.body.style.opacity=
    "0";



    setTimeout(()=>{


        /*
        
        下一阶段会跳转：

        birthday.html

        这里提前预留

        */


        console.log(
        "进入生日故事页面"
        );


    },2000);



});





// ================================
// 5. 点击产生爱心
// ================================


document.addEventListener(
"click",
function(e){


    let heart =
    document.createElement(
        "div"
    );


    heart.innerHTML="❤️";


    heart.style.position=
    "fixed";


    heart.style.left=
    e.clientX+"px";


    heart.style.top=
    e.clientY+"px";


    heart.style.fontSize=
    Math.random()*20+20+"px";


    heart.style.pointerEvents=
    "none";


    heart.style.zIndex=999;



    document.body.appendChild(
        heart
    );



    heart.animate(

        [

            {
                transform:
                "translateY(0)",
                opacity:1
            },

            {

                transform:
                "translateY(-120px)",

                opacity:0

            }

        ],

        {

            duration:1200

        }

    );



    setTimeout(()=>{

        heart.remove();

    },1200);



});
