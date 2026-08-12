```javascript
/* =====================================================
   LOVE MY GIRL
   Birthday Opening Timeline
===================================================== */

const scene = document.getElementById("scene");
const startButton = document.getElementById("startButton");

let started = false;


/* =====================================================
   时间轴
=====================================================

   用户点击
       ↓
   0.0s   流星开始
       ↓
   3.2s   流星消失
       ↓
   3.6s   中央微光
       ↓
   3.6s   蛋糕开始出现
       ↓
   7.0s   蛋糕完成显现
       ↓
   8.5s   蜡烛开始点燃
       ↓
   10.3s  最后一根蜡烛点燃
       ↓
   13.5s  镜头缓慢拉远
       ↓
   最终生日场景

===================================================== */


/* =====================================================
   开始体验
===================================================== */

function startExperience() {

    if (started) {
        return;
    }

    started = true;


    /* -------------------------
       隐藏按钮
    ------------------------- */

    startButton.classList.remove("visible");

    startButton.classList.add("hidden");


    /* -------------------------
       夜空 + 流星
    ------------------------- */

    scene.classList.add("started");

    scene.classList.add("playing");


    /* -------------------------
       流星结束
       蛋糕出现
    ------------------------- */

    setTimeout(() => {

        scene.classList.add("cake-visible");

    }, 3600);


    /* -------------------------
       蜡烛点燃
    ------------------------- */

    setTimeout(() => {

        scene.classList.add("candles-lit");

    }, 8500);


    /* -------------------------
       最终镜头
    ------------------------- */

    setTimeout(() => {

        scene.classList.add("final");

    }, 13500);

}


/* =====================================================
   点击开始
===================================================== */

startButton.addEventListener(
    "click",
    startExperience
);


/* =====================================================
   触摸开始
===================================================== */

startButton.addEventListener(
    "touchstart",
    startExperience,
    {
        passive: true
    }
);


/* =====================================================
   页面加载
===================================================== */

window.addEventListener(
    "load",
    () => {

        setTimeout(() => {

            startButton.classList.add("visible");

        }, 1200);

    }
);
```
