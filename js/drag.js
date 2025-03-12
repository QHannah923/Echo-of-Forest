document.addEventListener('DOMContentLoaded', function() {
    var worm = document.querySelector('.worm'); // Select the worm image
    var bird = document.querySelector('.bird'); // Select the bird image
    var scoreBox = document.querySelector('.score'); // Select the score box

    // Enable the worm to be draggable
    worm.setAttribute('draggable', 'true');

    // Event listener for the drag start
    worm.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text/plain', 'worm');
    });

    // Allow the bird to accept the dropped item
    bird.addEventListener('dragover', function(event) {
        event.preventDefault(); // Necessary to allow drop
    });

    // Handle the drop event
    bird.addEventListener('drop', function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData('text');
        
        if (data === 'worm') {
            // Hide the worm
            worm.style.display = 'none';

            // Increase score
            var currentScore = parseInt(scoreBox.textContent.split(' ')[1]);
            scoreBox.textContent = 'Score ' + (currentScore + 1);

            // Optionally, show a message or trigger any other effect
        }
    });
});
