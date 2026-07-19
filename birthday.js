/*
 * 袁雨婷生日祝福网页
 * birthday.js
 */


// ===============================
// 页面加载
// ===============================

window.onload = function(){


    // 星空效果
    createStars();


    // 祝福文字
    typeWish();


    // 按钮功能
    initButton();


    // 音乐控制
    initMusic();


};





// ===============================
// 星空背景
// ===============================


function createStars(){


    const canvas =
    document.getElementById("birthdayStars");


    if(!canvas) return;



    const ctx =
    canvas.getContext("2d");



    let width =
    canvas.width =
    window.innerWidth;


    let height =
    canvas.height =
    window.innerHeight;



    let stars=[];



    for(let i=0;i<120;i++){


        stars.push({

            x:Math.random()*width,

            y:Math.random()*height,

            r:Math.random()*2,

            speed:
            Math.random()*0.5+0.2

        });


    }



    function draw(){


        ctx.clearRect(
            0,
            0,
            width,
            height
        );



        ctx.fillStyle="white";



        stars.forEach(star=>{


            ctx.beginPath();


            ctx.arc(
                star.x,
                star.y,
                star.r,
                0,
                Math.PI*2
            );


            ctx.fill();



            star.y -= star.speed;



            if(star.y<0){

                star.y=height;

                star.x=Math.random()*width;

            }


        });



        requestAnimationFrame(draw);


    }


    draw();




    window.onresize=function(){


        width =
        canvas.width =
        window.innerWidth;


        height =
        canvas.height =
        window.innerHeight;


    }


}








// ===============================
// 生日祝福打字
// ===============================


function typeWish(){


    const box =
    document.getElementById("wish");



    if(!box) return;



    let text =

    `
雨婷，生日快乐 ❤️

认识你的这一天，
成为了我生命中特别的日子。

希望未来每一年，
我都可以陪你一起过生日。

愿你永远开心，
永远被温柔对待。

想和你在一起一辈子哦 ❤️
`;



    let index=0;



    function typing(){


        if(index < text.length){


            box.innerHTML +=
            text[index]
            .replace(
                "\n",
                "<br>"
            );


            index++;


            setTimeout(
                typing,
                80
            );


        }


    }



    typing();



}









// ===============================
// 愿望按钮
// ===============================


function initButton(){



    const wishBtn =
    document.getElementById(
        "wishBtn"
    );



    if(wishBtn){



        wishBtn.onclick=function(){



            const wish =
            document.getElementById(
                "wish"
            );



            wish.innerHTML=

            `
            ❤️ 我的生日愿望 ❤️
            <br><br>

            希望袁雨婷每天都开心。
            <br>

            希望所有烦恼离你远去。
            <br>

            希望未来的每一年生日，
            <br>

            我都能陪在你身边。
            <br><br>

            永远爱你 ❤️
            `;



            wish.style.animation=
            "showWish 1s";


        }


    }





    // 回忆按钮


    const nextBtn =
    document.getElementById(
        "nextBtn"
    );



    if(nextBtn){


        nextBtn.onclick=function(){


            window.location.href=
            "memory.html";


        }


    }




}









// ===============================
// 音乐播放
// ===============================


function initMusic(){



    const music =
    document.getElementById(
        "birthdayMusic"
    );



    if(!music) return;



    music.volume=0.5;



    // 微信需要用户操作

    document.addEventListener(
        "click",
        function(){


            music.play()
            .catch(()=>{});


        },
        {
            once:true
        }
    );



}
