// =========================================================
// Happy Birthday · 首页交互脚本
// File: js/main.js
// =========================================================

const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

// ===============================
// 星星系统
// ===============================

const stars = [];
const STAR_COUNT = Math.min(220, Math.floor((w * h) / 6000));

for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.8 + 0.3,
        a: Math.random(),
        speed: Math.random() * 0.15 + 0.02,
        drift: (Math.random() - 0.5) * 0.1
    });
}

function drawStars() {
    ctx.clearRect(0, 0, w, h);

    stars.forEach(s => {
        s.y += s.speed;
        s.x += s.drift;

        if (s.y > h) s.y = 0;
        if (s.x > w) s.x = 0;
        if (s.x < 0) s.x = w;

        s.a += (Math.random() - 0.5) * 0.05;
        s.a = Math.max(0.2, Math.min(1, s.a));

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.a})`;
        ctx.fill();
    });

    requestAnimationFrame(drawStars);
}

drawStars();

// ===============================
// 随机流星
// ===============================

function createMeteor() {
    const meteor = document.createElement('div');
    meteor.className = 'meteor';

    const startY = Math.random() * h * 0.6;
    const duration = Math.random() * 2 + 3;
    const delay = Math.random() * 0.5;

    meteor.style.top = `${startY}px`;
    meteor.style.left = '-220px';
    meteor.style.animation = `meteorMove ${duration}s linear ${delay}s forwards`;

    document.body.appendChild(meteor);

    setTimeout(() => meteor.remove(), (duration + delay) * 1000 + 200);
}

setInterval(() => {
    if (Math.random() > 0.35) createMeteor();
}, 2200);

// ===============================
// 音乐控制
// ===============================

const bgm = document.getElementById('bgm');
const openBtn = document.getElementById('openBtn');
const fade = document.getElementById('fade');
const intro = document.getElementById('intro');

let started = false;

async function startExperience() {

    if (started) return;
    started = true;

    // 点击粒子特效
    createBurst(openBtn);

    // 播放音乐（移动端必须由用户手势触发）
    try {
        bgm.volume = 0.85;
        await bgm.play();
    } catch (e) {
        console.log('音乐播放需要用户允许');
    }

    // 按钮禁用
    openBtn.disabled = true;
    openBtn.innerText = '正在开启礼物...';

    // 镜头推进效果
    intro.style.transition = '1.8s ease';
    intro.style.transform = 'scale(1.08)';
    intro.style.opacity = '0';

    // 淡出遮罩
    setTimeout(() => {
        fade.classList.add('show');
    }, 700);

    // 跳转生日页
    setTimeout(() => {
        window.location.href = 'birthday.html';
    }, 2200);
}

openBtn.addEventListener('click', startExperience);

// ===============================
// 粒子爆发效果
// ===============================

function createBurst(target) {

    const rect = target.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    for (let i = 0; i < 24; i++) {

        const p = document.createElement('span');
        const angle = (Math.PI * 2 * i) / 24;
        const distance = Math.random() * 80 + 40;

        p.style.position = 'fixed';
        p.style.left = `${cx}px`;
        p.style.top = `${cy}px`;
        p.style.width = '6px';
        p.style.height = '6px';
        p.style.borderRadius = '50%';
        p.style.background = i % 2 === 0 ? '#ffd6e8' : '#fff';
        p.style.boxShadow = '0 0 10px rgba(255,255,255,.8)';
        p.style.pointerEvents = 'none';
        p.style.zIndex = '9999';
        p.style.transition = '1s ease-out';

        document.body.appendChild(p);

        requestAnimationFrame(() => {
            p.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`;
            p.style.opacity = '0';
        });

        setTimeout(() => p.remove(), 1000);
    }
}

// ===============================
// 适配窗口变化
// ===============================

window.addEventListener('resize', () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
});

// ===============================
// 微信浏览器 / iOS 预加载音乐
// ===============================

document.addEventListener('WeixinJSBridgeReady', () => {
    bgm.load();
});

document.addEventListener('touchstart', () => {
    bgm.load();
}, { once: true });
