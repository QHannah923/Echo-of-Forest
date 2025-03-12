const tree6 = document.querySelector('.trees6');
const bird4 = document.querySelector('.bird4');
const bird5 = document.querySelector('.bird5');
const bird6 = document.querySelector('.bird6');
const closeAudioBtn = document.getElementById('closeAudioBtn'); // Get close button
const birdAudioElement = document.getElementById('birdAudio'); // Get audio elements

// Shake every 2 seconds for 1 second
setInterval(() => {
    tree6.style.animationPlayState = 'running'; // Shake every 2 seconds for 1 second
    setTimeout(() => {
        tree6.style.animationPlayState = 'paused'; // Pause the animation after 1 second
    }, 1000); // Set the shaking duration
}, 2000); // A 2-second interval

const birds4 = document.querySelector('.birds4');
let birdsVisible = false;

// Container showing the bird
tree6.addEventListener('click', function() {
    if (!birdsVisible) {
        birds4.style.display = 'block';
        birdsVisible = true;
    }
});

// The base URL of the API request
const apiBaseUrl = 'https://data.gov.au/data/api/3/action/datastore_search?resource_id=ef2c8a26-efc6-4f57-8149-7ea2ad75ce3a';

// Get data from the API and handle bird click events
fetch(apiBaseUrl)
    .then(response => response.json())
    .then(data => {
        const bird4Url = getAudioUrlFromDataset(data, 35);
        const bird5Url = getAudioUrlFromDataset(data, 82);
        const bird6Url = getAudioUrlFromDataset(data, 19);

        console.log('bird4Url:', bird4Url);
        console.log('bird5Url:', bird5Url);
        console.log('bird6Url:', bird6Url);

        bird4.addEventListener('click', () => playAudio(bird4Url));
        bird5.addEventListener('click', () => playAudio(bird5Url));
        bird6.addEventListener('click', () => playAudio(bird6Url));
    })
    .catch(error => {
        console.error('Error fetching API data:', error);
    });

function getAudioUrlFromDataset(data, rowNumber) {
    const record = data.result.records[rowNumber - 1]; // Gets data for the specified row
    const audioUrlBase = record.URL.split(';')[0]; // Get the url field in the data set and use it; Separate and take the first paragraph
    return audioUrlBase + '.mp3'; // Splice the.mp3 suffix
}

// Play Audio
function playAudio(url) {
    console.log("Playing audio from URL:", url);
    if (!birdAudioElement.paused) {
        birdAudioElement.pause(); // If there is audio playing, pause it first
    }
    birdAudioElement.src = url; // Set up a new audio source
    birdAudioElement.play().catch(error => {
        console.error("Error playing audio:", error); // Catch playback error
    });
}

// Turn off the button's event listener
closeAudioBtn.addEventListener('click', () => {
    if (!birdAudioElement.paused) {
        birdAudioElement.pause(); // Pause audio
        closeAudioBtn.innerText = 'Sound paused'; // Update button text
    }
});

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded, setting up bird click listeners");
    
    document.querySelectorAll('.bird[data-bird]').forEach(bird => {
        bird.addEventListener('click', function() {
            const birdName = this.dataset.bird;
            console.log("Bird clicked:", birdName);
            
            if (birdName) {
                fetchBirdInfoFromAPI(birdName)
                    .then(info => {
                        console.log("Bird info received:", info);
                        displayBirdInfo(birdName, info);
                    })
                    .catch(error => {
                        console.error('Error displaying bird info:', error);
                        displayBirdInfo(birdName, "No information found.");
                    });
            } else {
                console.error("Bird clicked but no data-bird attribute found");
            }
        });
    });
});
function displayBirdInfo(birdName, info) {
    console.log("Displaying info for bird:", birdName);
    
    if (!birdName) {
        console.error("Attempted to display info for null bird name");
        birdName = "Unknown Bird";
    }
    
    document.getElementById('bird-title').textContent = birdName.replace(/_/g, ' ');
    
    if (info.error) {
        document.getElementById('bird-info').textContent = info.error;
    } else if (info.info) {
        document.getElementById('bird-info').textContent = info.info;
    } else {
        document.getElementById('bird-info').textContent = "Unexpected response format";
    }
    
    document.getElementById('popup').style.display = 'block';
}
