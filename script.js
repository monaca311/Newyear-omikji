const btn = document.getElementById("omikuji-btn");
const display = document.getElementById("result-display");
const fortunes = ["大吉", "中吉", "吉", "末吉", "凶", "大凶"];

function drawOmikuji() {
    let i = Math.floor(Math.random() * fortunes.length);
    let result = fortunes[i];
    display.textContent = result;

    // もし大吉ならキラキラさせる！
    if (result === "大吉") {
        display.style.color = "red";
        display.style.textShadow = "0 0 10px gold"; // 文字を光らせる
        createSparkles(); // キラキラを出す関数を呼ぶ
    } else {
        display.style.color = "black";
        display.style.textShadow = "none";
    }
}

// キラキラをたくさん作る魔法
function createSparkles() {
    for (let i = 0; i < 30; i++) {
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");
        
        // 画面のランダムな場所に配置
        sparkle.style.left = Math.random() * 100 + "vw";
        sparkle.style.top = Math.random() * 100 + "vh";
        
        document.body.appendChild(sparkle);
        
        // アニメーションが終わったら消す
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
}

btn.addEventListener('click', () => {
    drawOmikuji();

    // 1. iOS(iPhone)でセンサーの許可が必要な場合
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission()
            .then(permissionState => {
                if (permissionState === 'granted') {
                    // 許可されたらセンサーの監視を開始！
                    startSensor();
                }
            })
            .catch(console.error);
    } else {
        // 2. AndroidやPCなど、許可が不要な場合
        startSensor();
    }
});

let shakeCount = 0;
let isShaking = false;

function startSensor() {
    window.addEventListener('devicemotion', (event) => {
        const acc = event.accelerationIncludingGravity;
        if (!acc || !acc.x) return; 

        const totalAccel = Math.abs(acc.x) + Math.abs(acc.y) + Math.abs(acc.z);

        // 感度を少し甘めの「30」に設定
        if (totalAccel > 30 && !isShaking) {
            shakeCount++;
            isShaking = true;

            // 0.5秒だけ休憩（連続カウント防止）
            setTimeout(() => {
                isShaking = false;
            }, 500);

            // 1回振ったら「ガシャ...」
            if (shakeCount === 1) {
                display.textContent = "ガシャ...";
            }

            // 2回振ったら結果発表！
            if (shakeCount >= 2) {
                drawOmikuji();
                shakeCount = 0; // カウントをリセット
            }
        }
    });
}
