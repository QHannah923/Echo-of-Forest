<?php
header('Content-Type: application/json');

$birdName = isset($_GET['bird']) ? $_GET['bird'] : 'Lyrebird';
// Ensure bird name is in correct format (underscores instead of spaces)
$birdName = str_replace(' ', '_', $birdName);

$cacheFile = 'cache_' . strtolower($birdName) . '.json';
$cacheTime = 3600; // 1 hour in seconds

if (file_exists($cacheFile) && (time() - filemtime($cacheFile)) < $cacheTime) {
    echo file_get_contents($cacheFile);
} else {
    $url = 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&explaintext&titles=' . urlencode($birdName) . '&format=json&origin=*';
    $data = file_get_contents($url);

    if ($data === false) {
        echo json_encode(["error" => "Failed to retrieve data from Wikipedia API"]);
    } else {
        file_put_contents($cacheFile, $data);
        echo $data;
    }
}
?>