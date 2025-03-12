const CACHE_KEY = "birdData";

async function fetchBirdInfo(birdName) {
    const cachedData = sessionStorage.getItem(CACHE_KEY);
    if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        if (parsedData[birdName]) {
            console.log("Loaded data from sessionStorage");
            return parsedData[birdName];
        }
    }

    try {
        const info = await fetchBirdInfoFromAPI(birdName);
        // Cache the new data
        const dataToCache = JSON.parse(sessionStorage.getItem(CACHE_KEY) || '{}');
        dataToCache[birdName] = info;
        sessionStorage.setItem(CACHE_KEY, JSON.stringify(dataToCache));
        return info;
    } catch (error) {
        console.error('Error fetching bird info:', error);
        throw error;
    }
}