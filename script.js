const btn = document.getElementById("omikuji-btn");
const display = document.getElementById("result-display");
const fortunes = ["大吉", "中吉", "吉", "末吉", "凶", "大凶"];

btn.addEventListener('click', () => {
    let i = Math.floor(Math.random()*fortunes.length);
    display.textContent = fortunes[i];
});

