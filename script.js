const btn = document.getElementById("omikuji-btn");
const display = document.getElementById("result-display");
const fortunes = ["大吉", "中吉", "吉", "末吉", "凶", "大凶"];

btn.addEventListener('click', () => {
    // 1. iOS(iPhone)でセンサーの許可が必要な場合
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission()
            .then(permissionState => {
                if (permissionState === 'granted') {
                    // 許可されたらセンサーの監視を開始！
                    window.addEventListener('devicemotion', (event) => {
                        // ここで「振ったかどうか」を判定する
                    });
                }
            })
            .catch(console.error);
    } else {
        // 2. AndroidやPCなど、許可が不要な場合
        window.addEventListener('devicemotion', (event) => {
            // ここで「振ったかどうか」を判定する
        });
    }
});

