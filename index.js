const clockElement = document.getElementById('clock');
const card = document.getElementById('main-window');
const buttons = document.querySelectorAll('.nav-grid a');
const signatureOverlay = document.querySelector('.signature-overlay');

function updateClock() {
    const now = new Date();
    const time = now.getHours().toString().padStart(2, '0') + ":" + 
                 now.getMinutes().toString().padStart(2, '0') + ":" + 
                 now.getSeconds().toString().padStart(2, '0');
    clockElement.textContent = time;
}

function randomFlicker() {
    if (Math.random() > 0.99) {
        card.style.opacity = '0.8';
        setTimeout(() => card.style.opacity = '1', 50);
    }
}

function pulseSignature() {
    if (signatureOverlay) {
        let val = 0.1 + Math.sin(Date.now() * 0.002) * 0.05;
        signatureOverlay.style.opacity = val.toString();
    }
}

function animate() {
    randomFlicker();
    pulseSignature();
    requestAnimationFrame(animate);
}

setInterval(updateClock, 1000);
updateClock();
animate();

window.addEventListener('load', () => {
    setTimeout(() => {
        card.style.transform = 'translate(2px, 2px)';
        setTimeout(() => {
            card.style.transform = 'translate(0, 0)';
        }, 100);
    }, 1100);
});

buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.borderColor = '#ff0000';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.borderColor = '#0000ff';
    });
});