/*
================================
 袁雨婷生日祝福网页
 birthday.js 最终版
================================
*/



// 页面加载完成

window.onload=function(){


    createStars();


    typeWish();


    initButtons();


    initMusic();


};







/*
================================
 星空粒子动画
================================
*/


function createStars(){


const canvas=document.getElementById(
"birthdayStars"
);



if(!canvas) return;



const ctx=canvas.getContext("2d");



let width=
canvas.width=
window.innerWidth;



let height=
canvas.height=
window.innerHeight;



let stars=[];



// 创建星星

for(let i=0;i<150;i++){


stars.push({

x:Math.random()*width,

y:Math.random()*height,

size:
Math.random()*2+0.5,


speed:
Math.random()*0.5+0.1,


opacity:
Math.random()


});


}





function draw(){


ctx.clearRect(
0,
0,
width,
height
);




stars.forEach(star=>{



ctx.beginPath();



ctx.fillStyle=
`rgba(255,255,255,${star.opacity})`;



ctx.arc(

star.x,

star.y,

star.size,

0,

Math.PI*2

);



ctx.fill();





star.y-=star.speed;





// 星星移动到顶部重新出现


if(star.y<0){


star.y=height;


star.x=Math.random()*width;


}




});




requestAnimationFrame(draw);



}



draw();





window.onresize=function(){


width=
canvas.width=
window.innerWidth;



height=
canvas.height=
window.innerHeight;



};



}









/*
================================
 生日祝福文字逐字出现
================================
*/


function typeWish(){



const wish=
document.getElementById(
"wish"
);



if(!wish)return;




const text=
`
宝宝 生日快乐 ❤️

认识你的那一天，
成为了我生命中特别的日子。

希望未来每一年生日，
我都可以陪你一起度过。

愿你永远开心，
永远被温柔对待。

想和你在一起一辈子哦 ❤️
`;





let index=0;



function typing(){



if(index<text.length){



let char=text[index];



if(char=="\n"){


wish.innerHTML+="<br>";



}else{


wish.innerHTML+=char;



}



index++;



setTimeout(
typing,
80
);



}



}



typing();



}









/*
================================
 按钮功能
================================
*/


function initButtons(){



// 愿望按钮


const wishBtn=
document.getElementById(
"wishBtn"
);



if(wishBtn){



wishBtn.onclick=function(){



const wish=
document.getElementById(
"wish"
);



wish.innerHTML=
`
💗 我的生日愿望 💗
<br><br>

希望宝宝每天都开心。

<br>

希望未来的每一个生日，

<br>

我都能陪在你身边。

<br><br>

永远爱你 ❤️
`;



wish.style.animation=
"wishShow 1s";



createHeart();




};



}






// 回忆按钮


const nextBtn=
document.getElementById(
"nextBtn"
);



if(nextBtn){



nextBtn.onclick=function(){



window.location.href=
"memory.html";



};



}



}









/*
================================
 点击产生爱心
================================
*/


function createHeart(){



for(let i=0;i<20;i++){



let heart=
document.createElement(
"div"
);



heart.innerHTML="❤️";



heart.style.position=
"fixed";



heart.style.left=
Math.random()*100+"%";



heart.style.bottom=
"20px";



heart.style.fontSize=
Math.random()*20+15+"px";



heart.style.animation=
"heartFly 3s linear";



document.body.appendChild(
heart
);




setTimeout(()=>{


heart.remove();



},3000);



}



}








/*
================================
 音乐播放
================================
*/


function initMusic(){



const music=
document.getElementById(
"birthdayMusic"
);



if(!music)return;



music.volume=0.5;




// 微信需要用户点击

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
