console.log("Script is running");

// Function to fetch bird information from API
async function fetchBirdInfoFromAPI(birdName) {
    // Format bird name for Wikipedia (replace spaces with underscores)
    const formattedBirdName = birdName;
    console.log("Formatted bird name:", formattedBirdName);
    
    try {
        const response = await fetch(`api.php?bird=${encodeURIComponent(formattedBirdName)}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return extractBirdInfo(data);
    } catch (error) {
        console.error('Error fetching bird info:', error);
        throw error;
    }
}

function extractBirdInfo(data) {
    const pages = data.query.pages;
    const pageId = Object.keys(pages)[0];
    const extract = pages[pageId].extract;
    
    // First, try to find diet information
    const dietRegex = /diet[^.]+\./i;
    const dietMatch = extract.match(dietRegex);
    
    if (dietMatch) {
        return dietMatch[0];
    } else {
        // If no diet info, return the first sentence or two of the extract
        const generalInfoRegex = /^(.+?\.)\s+(.+?\.)?/;
        const generalMatch = extract.match(generalInfoRegex);
        return generalMatch ? generalMatch[0] : 'No information found.';
    }
}

function displayBirdInfo(birdName, info) {
    const titleElement = document.getElementById('bird-title');
    const infoElement = document.getElementById('bird-info');
    titleElement.textContent = birdName;
    infoElement.innerHTML = `<p>${info}</p>`;
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-bird]').forEach(birdElement => {
        birdElement.addEventListener('click', async function() {
            const birdName = this.getAttribute('data-bird');
            try {
                const info = await fetchBirdInfo(birdName);
                displayBirdInfo(birdName, info);
            } catch (error) {
                console.error('Error:', error);
                displayBirdInfo(birdName, 'Failed to load bird information.');
            }
        });
    });

    document.getElementById('closepopup').addEventListener('click', closePopup);
    window.addEventListener('click', (event) => {
        if (event.target === document.getElementById('popup')) {
            closePopup();
        }
    });
});