const canvas = document.getElementById("partical-bg");
const ctx = canvas.getContext("2d"); // two-dimensional rendering context
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = []; // Holds each particle

// Settings
const particleAmount = 9; // Sets the amount of particles in the bg

// Resize the canvas to your window every time your user resizes the window
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].checkLocation();
    }
});

// When user scrolls, it will move the particles up/down depending if up or down scroll
window.addEventListener("scroll", () => {
    // If the user is scroll down, we would move the particles up
    if (this.oldScroll > this.scrollY) {
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].up();
        }
    }
    // Else we will move the particles down
    else {
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].down();
        }
    }

    // Saves the scrollY placement to the oldScroll
    this.oldScroll = this.scrollY;
});

// Time to create a Particle class since each particle has a different position and ways to move them so we will made a class to control each one
class Particle {
    // When the particle is constructed it will be placed somewhere with in the canvas area with a random properties
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 100 + 100; // Big :)
        this.speedX = Math.random() * 1 - 0.5; // Horizontal speed
        this.speedY = Math.random() * 1 - 0.5; // Vertical speed
        this.hsl = Math.floor(Math.random() * 40 + 160); // Random Color, however I set mines to more blue-ish color since I like it
    }

    // Just to check the particle so that it doesn't go off screen, no running away XD
    update() {
        // Moves the particle equal to it's X and Y speed
        this.x += this.speedX;
        this.y += this.speedY;

        // If the particle horizontal is going too far right
        if (this.x + this.size >= canvas.width) {
            this.x -= 3; // Bound it back a bit
            this.speedX = -this.speedX; // Reverse the speed
        }
        // If the particle horizontal is going too far left
        if (this.x - this.size <= 0) {
            this.x += 3;
            this.speedX = Math.abs(Math.random() * 1 - 0.5); // Speed changed to random speed
        }
        // If the particle vertical is going too far right
        if (this.y + this.size >= canvas.height) {
            this.y -= 3;
            this.speedY = -this.speedY;
        }
        // If the particle vertical is going too far right
        if (this.y - this.size <= 0) {
            this.y += 3;
            this.speedY = Math.abs(Math.random() * 1 - 0.5);
        }
    }

    // Creates the shape, filling type, and the color of the particle
    draw() {
        ctx.fillStyle = `hsla(${this.hsl}, 100%, 50%, 20%)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }

    // Moves the particle up (Connects to scroll)
    up() {
        this.y += 5;

        if (this.y > canvas.height) {
            this.y -= 5;
        }
    }

    // Moves the particle down (Connects to scroll)
    down() {
        this.y -= 5;

        if (this.y < 0) {
            this.y += 5;
        }
    }

    // Checks the location of the particle and if out, moves it back in (Connects to resize)
    checkLocation() {
        if (this.x > canvas.width) {
            this.x -= 6;
        }
        if (this.y > canvas.height) {
            this.y -= 6;
        }
    }
}

// Initialized the particles by creating each particle and push it into the particlesArray
function init() {
    for (let i = 0; i < particleAmount; i++) {
        particlesArray.push(new Particle());
    }
}
init();

// Checks the amount of particles, if for some reason the particle is gone we will push a new one
function checkParticleAmount() {
    while (particlesArray.length < particleAmount) {
        particlesArray.push(new Particle());
    }
}

// For each particle, run the update/draw method then checks the particle amount
function handleParticles() {
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }

    checkParticleAmount();
}

// This is where the animated stuff happens as it's an infinite loop which calls upon itself which in turn animates each particle
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();

    requestAnimationFrame(animate);
}
animate();
