<?php
header('Content-Type: application/json');

$birdName = isset($_GET['bird']) ? $_GET['bird'] : '';
if (empty($birdName)) {
    echo json_encode(["error" => "No bird name provided"]);
    exit;
}

$birdName = str_replace(' ', '_', $birdName);

$url = 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&titles=' . urlencode($birdName) . '&format=json&origin=*';

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_USERAGENT, 'YourAppName/1.0 (your@email.com)');
$data = curl_exec($ch);

if ($data === false) {
    echo json_encode(["error" => "Failed to retrieve data from Wikipedia API: " . curl_error($ch)]);
} else {
    $jsonData = json_decode($data, true);
    if (isset($jsonData['query']['pages'])) {
        $page = reset($jsonData['query']['pages']);
        if (isset($page['extract'])) {
            // Strip HTML tags and decode entities
            $extract = strip_tags($page['extract']);
            $extract = html_entity_decode($extract, ENT_QUOTES | ENT_HTML5, 'UTF-8');
            echo json_encode(["info" => $extract]);
        } else {
            echo json_encode(["error" => "No information found for this bird"]);
        }
    } else {
        echo json_encode(["error" => "Unexpected response from Wikipedia API"]);
    }
}

curl_close($ch);
?>