const mouseFollow = document.getElementById("mouseFollow");
const icon = document.getElementById("mouseFollow-icon");

// Variable to store animation frame ID
let animationHandle = null;

// When the mouse moves, run it
window.onmousemove = (e) => {
    // removes the previous animation frame request
    cancelAnimationFrame(animationHandle);

    // Sees if the mouse is interacting with class "intractable"
    const intractable = e.target.closest(".intractable");
    const interacting = intractable !== null;

    // animate mouse follow and update it's data-type
    animateMouseFollow(e, interacting);
    mouseFollow.dataset.type = interacting ? intractable.dataset.type : "";

    // Changes the innerHTML to a different name depending on the return form the getMouseFollowClass(type)
    if (interacting) {
        icon.innerHTML = getMouseFollowClass(intractable.dataset.type);
    }
};

// Moves the mouse with a cool delay which is like showing the mouseFollow trying to follow :D
function animateMouseFollow(e, interacting) {
    // changes the position is same as the mouse
    const x = e.clientX - mouseFollow.offsetWidth / 2;
    const y = e.clientY - mouseFollow.offsetHeight / 2;

    // Animation :D
    const keyframes = {
        transform: `translate(${x}px, ${y}px) scale(${interacting ? 4 : 1})`,
    };

    // request animation frame for smoother animation
    animationHandle = requestAnimationFrame(() => {
        mouseFollow.animate(keyframes, {
            duration: 800,
            fill: "forwards",
        });
    });
}

// Depending on the data-type, it will return the icon name which is connected to google icons
function getMouseFollowClass(type) {
    switch (type) {
        case "close":
            return "close"; // Close Icon
        case "expand":
            return "open_in_full"; // Expand Icon
        case "mail":
            return "mail"; // Mail Icon
        default:
            return "open_in_new"; // Link Icon
    }
}
