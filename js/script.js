document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    const birdSound = document.getElementById('birdSound');
    const shrubIcon = document.querySelector('.shrub');

    // Play bird sound in the background
    birdSound.volume = 0.2; // Adjust the volume as needed
    birdSound.play();

    // Make the start button jiggle periodically
    setInterval(function() {
        startButton.classList.toggle('jiggle');
    }, 3000); // Jiggle every 3 seconds

    // Function to trigger the shrub shake animation
    function shakeShrub() {
        shrubIcon.classList.add('shake');
        setTimeout(() => {
            shrubIcon.classList.remove('shake');
        }, 800); // Duration should match the animation length in CSS
    }

    // Shake the shrub every few seconds, with a random interval (e.g., between 3 to 7 seconds)
    setInterval(shakeShrub, Math.random() * 4000 + 3000); // Random interval between 3s and 7s

    // Click event to start the game
    startButton.addEventListener('click', function() {
        startButton.classList.remove('jiggle');
        alert('Game started! The bird is singing...');
    });
});

