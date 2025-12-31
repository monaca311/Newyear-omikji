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

function startSensor() {
    window.addEventListener('devicemotion', (event) => {
        // 加速度を取得
        const acc = event.accelerationIncludingGravity;
        // 縦・横・高さの動きを合計（ざっくりとした強さ）
        const totalAccel = Math.abs(acc.x) + Math.abs(acc.y) + Math.abs(acc.z);

        // しきい値（30）を超えたら「振った」と判定！
        if (totalAccel > 30) {
            drawOmikuji();
        }
    });
}
