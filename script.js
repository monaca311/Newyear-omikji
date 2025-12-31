const btn = document.getElementById("omikuji-btn");
const display = document.getElementById("result-display");
const fortunes = ["大吉", "中吉", "吉", "末吉", "凶", "大凶"];
const luckyItems = ["ラッキーおやつ: チョコ", "勉強運: 絶好調！", "ラッキーカラー: 青", "ラッキーアイテム: 消しゴム"];
const minimessage = ["無理しすぎないで", "今日は早く寝よう", "いいことあるよ"];

function drawOmikuji() {
    let i = Math.floor(Math.random() * fortunes.length);
    let result = fortunes[i];
    display.textContent = result;
    display.style.fontSize = "3rem"; // ここで元のサイズ（3rem）に戻す
    display.classList.remove("shake-text");

    // ID名をHTMLと完全に一致させました
    let j = Math.floor(Math.random() * luckyItems.length);
    const luckyDisp = document.getElementById("lucky-items"); // HTMLに合わせて s なしに
    if(luckyDisp) luckyDisp.textContent = luckyItems[j];

    let k = Math.floor(Math.random() * minimessage.length);
    const messageDisp = document.getElementById("minimessage");
    if(messageDisp) messageDisp.textContent = minimessage[k];

    if (result === "大吉") {
        display.style.color = "red";
        display.style.textShadow = "0 0 10px gold";
        createSparkles();
    } else {
        display.style.color = "black";
        display.style.textShadow = "none";
    }
}

function createSparkles() {
    for (let i = 0; i < 30; i++) {
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");
        sparkle.style.left = Math.random() * 100 + "vw";
        sparkle.style.top = Math.random() * 100 + "vh";
        document.body.appendChild(sparkle);
        setTimeout(() => { sparkle.remove(); }, 2000);
    }
}

btn.addEventListener('click', () => {
    // 最初のクリックでおみくじを1回引く
    display.textContent = "？"; 
    const luckyDisp = document.getElementById("lucky-items");
    const messageDisp = document.getElementById("minimessage");
    if (luckyDisp) luckyDisp.textContent = "";
    if (messageDisp) messageDisp.textContent = "";

    // ここで許可を求める処理を実行
    if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission()
            .then(permissionState => {
                if (permissionState === 'granted') {
                    startSensor();
                }
            })
            .catch(console.error);
    } else {
        startSensor();
    }
});

let shakeCount = 0;
let isShaking = false;

function startSensor() {
    const guide = document.getElementById("guide");
    if(guide) guide.textContent = "いい感じ！もっと振って！";

    window.addEventListener('devicemotion', (event) => {
        const acc = event.accelerationIncludingGravity;
        if (!acc || !acc.x) return; 

        const totalAccel = Math.abs(acc.x) + Math.abs(acc.y) + Math.abs(acc.z);

        if (totalAccel > 30 && !isShaking) {
            shakeCount++;
            isShaking = true;

            setTimeout(() => { isShaking = false; }, 500);

            if (shakeCount < 3) {
                display.textContent = "ガシャ...";
                display.style.fontSize = "4rem";
                if(navigator.vibrate) navigator.vibrate(200);
                display.classList.add("shake-text");

                // ラッキーアイテムとメッセージを一旦空にする
                const luckyDisp = document.getElementById("lucky-items");
                const messageDisp = document.getElementById("minimessage");
                if (luckyDisp) luckyDisp.textContent = "";
                if (messageDisp) messageDisp.textContent = "";
            }

            if (shakeCount >= 3) {
                drawOmikuji();
                shakeCount = 0;
                if(guide) guide.style.display = "none";
            }
        }
    });
}
