const btn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");
const heartsContainer = document.querySelector('.hearts');

btn.addEventListener("click", () => {
    surprise.classList.toggle("hidden");
    launchConfetti();
});

// Function to create floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.fontSize = (Math.random() * 30 + 10) + 'px';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Launch multiple hearts
function launchConfetti() {
    for(let i = 0; i < 30; i++) {
        setTimeout(createHeart, i * 100);
    }
}
