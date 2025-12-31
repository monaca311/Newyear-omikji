const btn = document.getElementById("omikuji-btn");
const display = document.getElementById("result-display");
const fortunes = ["超大吉", "大吉", "中吉", "吉", "小吉", "末吉", "凶", "大凶"];

const luckyItems = [
    "ラッキーおやつ: 板チョコ", 
    "ラッキーおやつ: 一口カルパス",
    "ラッキーおやつ: きのこの山",
    "ラッキーおやつ: 人が剥いたみかん",
    "ラッキーカラー: 紅白", 
    "ラッキーカラー: ワインレッド",
    "ラッキーカラー: 今の空の色",
    "ラッキーアイテム: 折り鶴", 
    "ラッキーアイテム: 30秒早く食べるカップ麺",
    "ラッキーアイテム: ギザ10",
    "ラッキーアイテム: 割り方ミスった割り箸",
    "ラッキーアイテム: いつもと違う寝具",
    "ラッキーアイテム: 根拠のない自信",
    "ラッキーアイテム: 財布に入ってる一番古いレシート",
    "ラッキーフード: 黄金イカ", 
    "ラッキーフード: カレー",
    "ラッキーフード: 2日目のカレー",
    "ラッキーフード: 溶けかけたカレーのじゃがいも",
    "ラッキーフード: おせちで最後に残ってるやつ",
    "ラッキーフード: 醤油をつけすぎたお餅",
    "ラッキードリンク: 甘酒",
    "ラッキードリンク: 自販機の右下にあるやつ",
    "ラッキーアクション: 部屋の掃除", 
    "ラッキーアクション: 乗馬",
    "ラッキーアクション: 右足から靴を履く",
    "ラッキープレイス: 好きな人の隣", 
    "ラッキープレイス: こたつ",
    "ラッキーパーソン: 久しぶりに連絡をくれる人",
    "ラッキーパーソン: スマホの画面バキバキの人",
    "ラッキーパーソン: 裸眼の人",
    "ラッキーパーソン: 自分よりお年玉もらってそうな人",
    "ラッキーナンバー: 2026",
    "ラッキーナンバー: 7777",
    "ラッキースポット: 城戸南蔵院", 
    "ラッキースポット: 太宰府天満宮",
    "ラッキームービー: ズートピア",
    "ラッキームービー: ズートピア2",
    "ラッキーフライ: ファミチキ",
    "ラッキーフライ: マックフライポテト",
    "ラッキーフライ: モスチキン"
];

const minimessage = [
    "無理しすぎないで", 
    "今日は早く寝よう", 
    "いいことあるよ", 
    "自分を信じて！", 
    "おいしいもの食べよう", 
    "深呼吸してみて", 
    "明日はもっといい日になる", 
    "お餅の食べ過ぎ注意", 
    "お年玉、貰えるかも", 
    "今年の君は一味違うぞ", 
    "お餅はよく噛んで", 
    "今日はのんびりしよう", 
    "推し活がはかどる一年かも", 
    "勇気を出して一歩踏み出してみよう",
    "正月は増量してなんぼ",
    "とりあえず梅昆布茶うまい",
    "自分にやさしく他人にやさしく",
    "自分へのご褒美忘れずに",
    "製作者「おみくじ作る仕事したい」",
    "今日はラッキーが向こうからやってくる",
    "今の振り方、100点満点",
    "画面を吹くと運気アップ",
    "もう一回振ってもいいよ？",
    "製作者「もう超大吉出た？」",
    "明日から本気出す",
    "来年から本気出す",
    "転生してから本気出す",
    "もう一回振っておみくじダイエット",
    "姿勢悪くなってきてるよ",
    "おみくじの結果より体重を気にして",
    "製作者「テストプレイで筋肉痛なった」",
    "おみくじに頼ってるようじゃダメか、運勢はね、自分で切り開かないと",
    "スマホの画面そろそろ拭いたら？",
    "冬休み永遠に続けばいいのに",
    "製作者「そんなに遊んでくれて嬉しい」",
    "お年玉どうやって使うかちゃんと考えなよ",
    "正月ってどんなに食べてもお腹空く",
    "運勢気にする前にスマホの充電気にしなよ",
    "大丈夫、明日も面白くなるはず",
    "この結果、制作者の気分で操ってます(嘘)"
];

function drawOmikuji() {
    // 0から99までのランダムな数字を作る
    let randomNum = Math.floor(Math.random() * 100);
    let result = "";

    // ここで確率を自由に決める！
    if (randomNum < 2) {          // 0〜1（2%）
        result = "超大吉";
    } else if (randomNum < 15) {   // 2〜14（13%）
        result = "大吉";
    } else if (randomNum < 35) {   // 15〜34（20%）
        result = "中吉";
    } else if (randomNum < 60) {   // 35〜59（25%）
        result = "吉";
    } else if (randomNum < 80) {   // 60〜79（20%）
        result = "小吉";
    } else if (randomNum < 95) {   // 80〜94（15%）
        result = "末吉";
    } else if (randomNum < 98) {   // 95〜97（3%）
        result = "凶";
    } else {                       // 98〜99（2%）
        result = "大凶";
    }
    
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

    if (result === "超大吉") {
        display.style.color = "red";
        display.style.textShadow = "0 0 10px gold";
        document.body.style.backgroundColor = "gold"; // 背景を金にする！
        createSparkles();
    } else {
        display.style.color = "black";
        display.style.textShadow = "none";
        document.body.style.backgroundColor = "#b22222";
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
                display.style.fontSize = "3.2rem";
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


