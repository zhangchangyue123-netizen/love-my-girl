/*
=================================================
 Happy Birthday Story
 Fixed Version
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


});





/* =====================================
   八幕切换
===================================== */


function initStory(){


    const scenes =
    document.querySelectorAll(".scene");


    const buttons =
    document.querySelectorAll(".next-btn");


    let index=0;



    function changeScene(next){


        if(next>=scenes.length){

            return;

        }



        scenes[index]
        .classList.remove("active");



        setTimeout(()=>{


            scenes[index]
            .style.visibility="hidden";



            index=next;



            scenes[index]
            .style.visibility="visible";


            scenes[index]
            .classList.add("active");



        },200);



    }




    buttons.forEach(btn=>{


        btn.addEventListener(
        "click",
        ()=>{


            changeScene(index+1);


            createHearts();



        });


    });



}








/* =====================================
   音乐
===================================== */


function initMusic(){


    const music=
    document.getElementById(
        "birthdayMusic"
    );


    if(!music)return;



    document.body.addEventListener(
    "click",
    ()=>{


        music.volume=0.5;


        music.play()
        .catch(()=>{});


    },

    {
        once:true
    });


}








/* =====================================
   星空
===================================== */


function initStars(){


    const canvas=
    document.getElementById(
        "birthdayStars"
    );



    if(!canvas)return;



    const ctx=
    canvas.getContext("2d");



    let stars=[];



    function resize(){


        canvas.width=
        window.innerWidth;


        canvas.height=
        window.innerHeight;



        stars=[];



        for(
            let i=0;
            i<220;
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


                r:
                Math.random()*1.8,


                a:
                Math.random()

            });



        }


    }



    resize();



    window.addEventListener(
        "resize",
        resize
    );



    function animate(){


        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );



        stars.forEach(s=>{


            s.a+=0.01;



            if(s.a>1)
                s.a=0;



            ctx.beginPath();


            ctx.arc(
                s.x,
                s.y,
                s.r,
                0,
                Math.PI*2
            );



            ctx.fillStyle=
            `
            rgba(
            255,
            255,
            255,
            ${s.a}
            )
            `;



            ctx.fill();



        });



        requestAnimationFrame(
            animate
        );


    }



    animate();


}









/* =====================================
   蜡烛
===================================== */


function initCake(){


    const btn=
    document.getElementById(
        "lightCake"
    );


    const flame=
    document.getElementById(
        "flame"
    );



    if(!btn)return;



    let open=false;



    btn.onclick=()=>{


        open=!open;



        if(open){


            flame.innerHTML="🔥";


            flame.classList.add(
                "fire"
            );


            btn.innerHTML=
            "吹灭蜡烛";



            createFireworks();



        }else{


            flame.innerHTML="🕯️";


            flame.classList.remove(
                "fire"
            );


            btn.innerHTML=
            "点亮蜡烛";


        }


    };


}








/* =====================================
   礼物
===================================== */


function initGift(){


    const btn=
    document.getElementById(
        "openGift"
    );


    const gift=
    document.getElementById(
        "giftBox"
    );


    if(!btn)return;



    btn.onclick=()=>{


        gift.innerHTML="💖";


        gift.classList.add(
            "open"
        );


        createLoveRain();



    };


}








/* =====================================
   爱心动画
===================================== */


function createHearts(){



    for(
    let i=0;i<10;i++
    ){


        const h=
        document.createElement(
            "div"
        );


        h.innerHTML="❤️";


        h.className="heart";


        h.style.left=
        Math.random()*100+"%";


        document.body.appendChild(h);



        setTimeout(()=>{


            h.remove();


        },3000);



    }


}







function createLoveRain(){


    for(
    let i=0;i<50;i++
    ){


        let h=
        document.createElement(
            "div"
        );


        h.innerHTML="💗";


        h.className="rain-heart";


        h.style.left=
        Math.random()*100+"%";



        document.body.appendChild(h);



        setTimeout(()=>{


            h.remove();


        },5000);



    }


}







function createFireworks(){


    for(
    let i=0;i<30;i++
    ){


        let star=
        document.createElement(
            "div"
        );


        star.innerHTML="✨";


        star.className=
        "firework";


        document.body.appendChild(
            star
        );



        setTimeout(()=>{


            star.remove();


        },2000);



    }



}
