const btn = document.getElementById("omikuji-btn");
const display = document.getElementById("result-display");
const fortunes = ["大吉", "中吉", "吉", "末吉", "凶", "大凶"];

function drawOmikuji() {
    let i = Math.floor(Math.random() * fortunes.length);
    display.textContent = fortunes[i];
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

let shakeCount = 0; // 振られた回数を数える箱
let isShaking = false; // 連続してカウントしないためのフラグ

function startSensor() {
    window.addEventListener('devicemotion', (event) => {
        const acc = event.accelerationIncludingGravity;
        const totalAccel = Math.abs(acc.x) + Math.abs(acc.y) + Math.abs(acc.z);

        // しきい値を超えた、かつ「今振っている最中」でなければカウント
        if (totalAccel > 30 && !isShaking) {
            shakeCount++;
            isShaking = true; // 一度カウントしたら、一旦「振り中」にする

            // 0.5秒後に「振り中」を解除（連続カウント防止）
            setTimeout(() => {
                isShaking = false;
            }, 500);

            if(shakecheck == 1) {
                display.textContent = "ガシャ...";
            }

            // 2回（以上）振られたらおみくじを引く！
            if (shakeCount >= 2) {
                drawOmikuji();
                shakeCount = 0; // 回数をリセット
            }
        }
    });
}
