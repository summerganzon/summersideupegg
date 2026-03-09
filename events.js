const clockElement = document.getElementById('clock');

function updateClock() {
    const now = new Date();
    clockElement.textContent = now.toLocaleTimeString('en-GB');
}

const revealItems = document.querySelectorAll('[data-reveal]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

revealItems.forEach(item => observer.observe(item));

setInterval(updateClock, 1000);
updateClock();