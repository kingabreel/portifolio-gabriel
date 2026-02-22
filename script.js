const toggleSwitch = document.getElementById('theme-toggle');
const modeLabel = document.getElementById('mode-label');
const glitchText = document.querySelector('.glitch-text');

toggleSwitch.addEventListener('change', function (e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'corporate');
        modeLabel.textContent = "CORP_MODE";
        glitchText.style.animation = "none";
    } else {
        document.documentElement.removeAttribute('data-theme');
        modeLabel.textContent = "HCKR_MODE";
        glitchText.style.animation = "";
    }
});

const text = "init_sequence... analyzing firewall... access granted.";
const typeTarget = document.getElementById("typewriter");
let i = 0;
function typeWriter() {
    if (i < text.length) {
        typeTarget.innerHTML = "> " + text.substring(0, i + 1) + "<span class='cursor'></span>";
        i++;
        setTimeout(typeWriter, 40 + Math.random() * 40);
    }
}
setTimeout(typeWriter, 500);

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";
const decryptElements = document.querySelectorAll('.decrypt-text');

decryptElements.forEach(el => {
    el.addEventListener('mouseover', event => {
        if (document.documentElement.getAttribute('data-theme') === 'corporate') return;

        let iterations = 0;
        const interval = setInterval(() => {
            event.target.innerText = event.target.innerText.split("")
                .map((letter, index) => {
                    if (index < iterations) return event.target.dataset.value[index];
                    return letters[Math.floor(Math.random() * letters.length)];
                })
                .join("");

            if (iterations >= event.target.dataset.value.length) clearInterval(interval);
            iterations += 1 / 3;
        }, 30);
    });
});

const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';
const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width / fontSize;
const rainDrops = [];

for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
}

const draw = () => {
    ctx.fillStyle = 'rgba(2, 6, 2, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.97) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};

// Handle window resize for canvas
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

setInterval(draw, 30);
