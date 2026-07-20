/*
=========================================================
Happy Birthday · 首页脚本
File: js/main.js
=========================================================
*/

window.addEventListener("load", () => {

    initStars();

    createFloatingStars();

    createRandomMeteors();

    setupOpenButton();

});

/* =====================================================
   Canvas 星空
===================================================== */

function initStars() {

    const canvas = document.getElementById("stars");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let width;
    let height;

    let stars = [];

    function resize() {

        width = canvas.width = window.innerWidth;

        height = canvas.height = window.innerHeight;

        stars = [];

        const count = Math.floor(width / 8);

        for (let i = 0; i < count; i++) {

            stars.push({

                x: Math.random() * width,

                y: Math.random() * height,

                r: Math.random() * 2 + 0.3,

                alpha: Math.random(),

                speed: Math.random() * 0.15 + 0.02

            });

        }

    }

    resize();

    window.addEventListener("resize", resize);

    function draw() {

        ctx.clearRect(0, 0, width, height);

        stars.forEach(star => {

            star.alpha += star.speed;

            if (star.alpha >= 1 || star.alpha <= 0) {

                star.speed *= -1;

            }

            ctx.beginPath();

            ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);

            ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;

            ctx.fill();

        });

        requestAnimationFrame(draw);

    }

    draw();

}

/* =====================================================
   漂浮星点
===================================================== */

function createFloatingStars() {

    const amount = 60;

    for (let i = 0; i < amount; i++) {

        const star = document.createElement("div");

        star.className = "star";

        const size = Math.random() * 3 + 1;

        star.style.width = size + "px";

        star.style.height = size + "px";

        star.style.left = Math.random() * 100 + "%";

        star.style.top = Math.random() * 100 + "%";

        star.style.animationDuration =
            (Math.random() * 4 + 2) + "s";

        document.body.appendChild(star);

    }

}

/* =====================================================
   随机流星
===================================================== */

function createRandomMeteors() {

    setInterval(() => {

        const meteor = document.createElement("div");

        meteor.className = "meteor";

        meteor.style.top =
            Math.random() * 40 + "%";

        meteor.style.left = "-250px";

        meteor.style.animation =
            "meteorMove 3s linear forwards";

        document.body.appendChild(meteor);

        setTimeout(() => {

            meteor.remove();

        }, 3000);

    }, 2500);

}

/* =====================================================
   爱心特效
===================================================== */

document.addEventListener("click", (e) => {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left = e.clientX + "px";

    heart.style.top = e.clientY + "px";

    heart.style.pointerEvents = "none";

    heart.style.fontSize = "20px";

    heart.style.zIndex = "9999";

    heart.style.transition = "1.2s ease";

    document.body.appendChild(heart);

    requestAnimationFrame(() => {

        heart.style.transform =
            `translateY(-80px) scale(1.8)`;

        heart.style.opacity = "0";

    });

    setTimeout(() => {

        heart.remove();

    }, 1200);

});

/* =====================================================
   开启礼物按钮
===================================================== */

function setupOpenButton() {

    const button = document.getElementById("openBtn");

    const fade = document.getElementById("fade");

    const music = document.getElementById("bgm");

    if (!button) return;

    button.addEventListener("click", async () => {

        button.disabled = true;

        button.innerHTML =
            "✨ 正在开启礼物... ✨";

        /* 播放音乐 */

        try {

            await music.play();

        } catch (err) {

            console.log("音乐等待用户授权");

        }

        /* 镜头推进 */

        document.body.animate(

            [
                {
                    transform: "scale(1)"
                },
                {
                    transform: "scale(1.12)"
                }
            ],

            {
                duration: 2200,
                easing: "ease-in-out",
                fill: "forwards"
            }

        );

        /* 标题淡出 */

        const content =
            document.querySelector(".content");

        if (content) {

            content.animate(

                [
                    {
                        opacity: 1
                    },
                    {
                        opacity: 0
                    }
                ],

                {
                    duration: 1800,
                    fill: "forwards"
                }

            );

        }

        /* 转场 */

        setTimeout(() => {

            fade.classList.add("show");

        }, 1200);

        /* 跳转 */

        setTimeout(() => {

            window.location.href =
                "birthday.html";

        }, 2600);

    });

}

/* =====================================================
   自动唤醒音频（移动端）
===================================================== */

function unlockAudio() {

    const music = document.getElementById("bgm");

    if (!music) return;

    music.play()
        .then(() => {

            music.pause();

            music.currentTime = 0;

        })
        .catch(() => { });

}

document.addEventListener(
    "touchstart",
    unlockAudio,
    { once: true }
);

document.addEventListener(
    "click",
    unlockAudio,
    { once: true }
);
