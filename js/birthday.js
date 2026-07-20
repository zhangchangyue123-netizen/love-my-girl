/*
=================================================
 Happy Birthday · Story Animation
 birthday.js
=================================================
*/


document.addEventListener(
    "DOMContentLoaded",
    ()=>{


        initStory();

        initStars();

        initMusic();

        initCake();

        initGift();


    }
);





/* ================================================
   八幕故事控制
================================================ */


function initStory(){


    const scenes =
        document.querySelectorAll(".scene");


    const nextButtons =
        document.querySelectorAll(".next-btn");


    let current = 0;



    function showScene(index){


        scenes.forEach(scene=>{

            scene.classList.remove(
                "active"
            );

        });



        scenes[index].classList.add(
            "active"
        );


    }




    nextButtons.forEach(btn=>{


        btn.addEventListener(
            "click",
            ()=>{


                if(current < scenes.length-1){


                    current++;


                    showScene(current);


                    createHearts();


                }



            }
        );


    });



}








/* ================================================
   音乐
================================================ */


function initMusic(){


    const music =
        document.getElementById(
            "birthdayMusic"
        );


    if(!music)return;



    document.addEventListener(
        "click",
        ()=>{


            music.play()
            .catch(()=>{});


        },

        {
            once:true
        }

    );


}









/* ================================================
   星空粒子
================================================ */


function initStars(){


    const canvas =
        document.getElementById(
            "birthdayStars"
        );


    if(!canvas)return;



    const ctx =
        canvas.getContext(
            "2d"
        );



    let stars=[];



    function resize(){


        canvas.width =
            window.innerWidth;


        canvas.height =
            window.innerHeight;



        stars=[];



        for(
            let i=0;
            i<180;
            i++
        ){


            stars.push({

                x:
                Math.random()
                *
                canvas.width,


                y:
                Math.random()
                *
                canvas.height,


                size:
                Math.random()*2,


                speed:
                Math.random()
                *.3+.1,


                alpha:
                Math.random()


            });


        }


    }




    resize();



    window.addEventListener(
        "resize",
        resize
    );





    function draw(){


        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );



        stars.forEach(star=>{


            star.alpha +=
                star.speed*.01;



            if(star.alpha>1){

                star.alpha=0;

            }



            ctx.beginPath();



            ctx.arc(

                star.x,

                star.y,

                star.size,

                0,

                Math.PI*2

            );



            ctx.fillStyle =
            `
            rgba(
            255,
            255,
            255,
            ${star.alpha}
            )
            `;



            ctx.fill();



        });



        requestAnimationFrame(
            draw
        );

    }



    draw();


}









/* ================================================
   蛋糕蜡烛
================================================ */


function initCake(){



    const btn =
        document.getElementById(
            "lightCake"
        );



    const flame =
        document.getElementById(
            "flame"
        );



    if(!btn)return;



    let light=false;



    btn.onclick=()=>{


        light=!light;



        if(light){


            flame.innerHTML="🔥";


            flame.style
            .filter=
            "drop-shadow(0 0 20px orange)";



            btn.innerHTML=
            "吹灭蜡烛";


            createFireworks();


        }

        else{


            flame.innerHTML="🕯️";


            btn.innerHTML=
            "点亮蜡烛";


        }



    };



}










/* ================================================
   礼物盒
================================================ */


function initGift(){


    const gift =
        document.getElementById(
            "giftBox"
        );


    const open =
        document.getElementById(
            "openGift"
        );


    if(!open)return;



    open.onclick=()=>{


        gift.style.transform=
            "scale(1.5) rotate(20deg)";



        gift.innerHTML=
            "💖";



        createLoveRain();



    };


}









/* ================================================
   爱心
================================================ */


function createHearts(){



    for(
        let i=0;
        i<8;
        i++
    ){


        const heart =
            document.createElement(
                "div"
            );


        heart.innerHTML="❤️";



        heart.style.position=
            "fixed";



        heart.style.left=
            Math.random()*100+
            "%";



        heart.style.bottom=
            "0";



        heart.style.fontSize=
            "20px";



        heart.style.zIndex=
            "999";



        heart.style.transition=
            "3s ease";



        document.body.appendChild(
            heart
        );



        setTimeout(()=>{


            heart.style.transform=
            `
            translateY(-90vh)
            scale(2)
            `;



            heart.style.opacity=0;



        },100);



        setTimeout(()=>{


            heart.remove();


        },3000);



    }



}









/* ================================================
   爱心雨
================================================ */


function createLoveRain(){



    for(
        let i=0;
        i<40;
        i++
    ){


        const love =
            document.createElement(
                "div"
            );


        love.innerHTML="💗";



        love.style.position=
        "fixed";



        love.style.top="-20px";



        love.style.left=
        Math.random()*100+
        "%";



        love.style.fontSize=
        Math.random()*20+15+
        "px";



        love.style.transition=
        "4s linear";



        love.style.zIndex=
        "9999";



        document.body.appendChild(
            love
        );



        setTimeout(()=>{


            love.style.transform=
            `
            translateY(100vh)
            rotate(360deg)
            `;



        },100);



        setTimeout(()=>{


            love.remove();


        },5000);



    }



}








/* ================================================
   烟花
================================================ */


function createFireworks(){


    for(
        let i=0;
        i<20;
        i++
    ){


        const spark =
            document.createElement(
                "div"
            );



        spark.innerHTML="✨";



        spark.style.position=
            "fixed";



        spark.style.left=
            "50%";



        spark.style.top=
            "50%";



        spark.style.fontSize=
            "20px";



        spark.style.transition=
            "2s ease";



        spark.style.zIndex=
            "999";



        document.body.appendChild(
            spark
        );



        setTimeout(()=>{


            spark.style.transform=
            `
            translate(
            ${Math.random()*400-200}px,
            ${Math.random()*400-200}px
            )
            scale(0)
            `;



            spark.style.opacity=0;



        },100);



        setTimeout(()=>{


            spark.remove();


        },2200);



    }



}
