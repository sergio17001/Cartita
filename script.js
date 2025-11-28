
console.log("Detectando toques...");
document.addEventListener("click", () => console.log("Click detectado"));
document.addEventListener("touchstart", () => console.log("Toque detectado"));


const heart = document.createElement("div");

console.log("Corazón creado en:", x, y);

function createHeart(event) {
    let x, y;

    if (event.touches && event.touches.length > 0) {
        x = event.touches[0].clientX;
        y = event.touches[0].clientY + window.scrollY;
    } else {
        x = event.clientX;
        y = event.clientY + window.scrollY;
    }

    const heart = document.createElement("div");
    heart.className = "touch-heart";
    heart.style.left = x + "px";
    heart.style.top = y + "px";
    
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1000);
}

+ window.scrollY


document.addEventListener("click", createHeart);
document.addEventListener("touchstart", createHeart);

function createHearts(event) {

    let x, y;

    if (event.touches && event.touches.length > 0) {
        x = event.touches[0].clientX;
        y = event.touches[0].clientY + window.scrollY;
    } else {
        x = event.clientX;
        y = event.clientY + window.scrollY;
    }

    const sizes = [1, 0.7, 0.45]; // 3 corazones

    sizes.forEach(scale => {
        const heart = document.createElement("div");
        heart.className = "touch-heart";
        heart.style.left = x + "px";
        heart.style.top = y + "px";
        heart.style.transform = `translate(-50%, -50%) scale(${scale})`;

        document.body.appendChild(heart);

        heart.addEventListener("animationend", () => {
            createSparkles(x, y - 50); 
            heart.remove();
        });
    });
}




function createSparkles(x, y) {
    for (let i = 0; i < 6; i++) {
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle";
        sparkle.style.left = x + "px";
        sparkle.style.top = y + "px";

        sparkle.style.setProperty("--tx", (Math.random() - 0.5) * 50 + "px");
        sparkle.style.setProperty("--ty", (Math.random() - 0.5) * 50 + "px");

        document.body.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 800);
    }
}

function createSparkles(x, y) {
    for (let i = 0; i < 6; i++) {
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle";
        sparkle.style.left = x + "px";
        sparkle.style.top = y + "px";

        sparkle.style.setProperty("--tx", (Math.random() - 0.5) * 50 + "px");
        sparkle.style.setProperty("--ty", (Math.random() - 0.5) * 50 + "px");

        document.body.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 800);
    }
}




<script>
const miniContainer = document.querySelector(".mini-corazones");

function explotarCorazones() {
    for (let i = 0; i < 6; i++) {
        const c = document.createElement("div");
        c.textContent = "❤️";
        c.style.setProperty("--x", Math.random() * 2 - 1);
        c.style.setProperty("--y", Math.random() * 2 - 1);
        miniContainer.appendChild(c);

        setTimeout(() => c.remove(), 2500);
    }
}

setInterval(explotarCorazones, 1500);
</script>

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() * 0.6) - 0.3;
        this.speedY = (Math.random() * 0.6) - 0.3;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Si salen de la pantalla vuelven a entrar por el lado opuesto
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }

    draw() {
        ctx.fillStyle = "rgba(255,255,255,0.7)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    for (let i = 0; i < 120; i++) {
        particlesArray.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particlesArray.forEach(p => {
        p.update();
        p.draw();
    });

    requestAnimationFrame(animateParticles);
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

initParticles();
animateParticles();


document.addEventListener("click", createHearts);
document.addEventListener("touchstart", createHearts);

function createHearts(event) {

    let x, y;

    if (event.touches && event.touches.length > 0) {
        x = event.touches[0].clientX;
        y = event.touches[0].clientY + window.scrollY;
    } else {
        x = event.clientX;
        y = event.clientY + window.scrollY;
    }

    const sizes = [1, 0.7, 0.45]; // 3 corazones

    sizes.forEach(scale => {
        const heart = document.createElement("div");
        heart.className = "touch-heart";
        heart.style.left = x + "px";
        heart.style.top = y + "px";
        heart.style.transform = `translate(-50%, -50%) scale(${scale})`;

        document.body.appendChild(heart);

        heart.addEventListener("animationend", () => {
            createSparkles(x, y - 50); 
            heart.remove();
        });
    });
}

function createSparkles(x, y) {
    for (let i = 0; i < 6; i++) {
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle";
        sparkle.style.left = x + "px";
        sparkle.style.top = y + "px";

        sparkle.style.setProperty("--tx", (Math.random() - 0.5) * 50 + "px");
        sparkle.style.setProperty("--ty", (Math.random() - 0.5) * 50 + "px");

        document.body.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 800);
    }
}


// Crear un corazón donde la persona toque la pantalla
document.addEventListener("click", createHeart);
document.addEventListener("touchstart", createHeart);

function createHeart(event) {
    let x, y;

    if (event.touches) {
        x = event.touches[0].clientX;
        y = event.touches[0].clientY;
    } else {
        x = event.clientX;
        y = event.clientY;
    }

    const heart = document.createElement("div");
    heart.classList.add("touch-heart");
    heart.style.left = x + "px";
    heart.style.top = y + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);
}