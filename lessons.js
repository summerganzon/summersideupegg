const revealElements = document.querySelectorAll('[data-reveal]');
const clockElement = document.getElementById('clock');

// Clock logic
function updateClock() {
    const now = new Date();
    clockElement.textContent = now.getHours().toString().padStart(2, '0') + ":" + 
                               now.getMinutes().toString().padStart(2, '0') + ":" + 
                               now.getSeconds().toString().padStart(2, '0');
}

// Simple Intersection Observer
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

setInterval(updateClock, 1000);
updateClock();