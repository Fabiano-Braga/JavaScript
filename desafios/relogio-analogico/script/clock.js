function setDate() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    console.log(`Hora real: ${hours}:${minutes}:${seconds}`);

    // Cálculos corrigidos
    const secondsDegrees = (seconds / 60) * 360;
    const minsDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30;

    // Aplicar as rotações
    const secondHand = document.querySelector('.second-hand');
    const minsHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    // Debug visual
    console.log(`Ponteiros: H ${hoursDegrees.toFixed(1)}° M ${minsDegrees.toFixed(1)}° S ${secondsDegrees.toFixed(1)}°`);
}

// Iniciar
setInterval(setDate, 1000);
setDate();

// Configuração das particulas
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for (let i = 0; i <100; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25
    });
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';

    particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1
    });

    requestAnimationFrame(animateParticles);
}

animateParticles();