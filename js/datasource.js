// // script.js

// document.addEventListener('DOMContentLoaded', () => {
//     // API URL
//     const apiUrl = 'https://data.gov.au/data/api/3/action/datastore_search?resource_id=ef2c8a26-efc6-4f57-8149-7ea2ad75ce3a&limit=5';

//     // 获取音频容器
//     const audioContainer = document.getElementById('audio-container');

//     // 使用 fetch 从 API 获取数据
//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             // 检查API是否返回了有效的结果
//             if (data && data.result && data.result.records) {
//                 console.log('Fetched Records:', data.result.records); // 调试输出

//                 data.result.records.forEach((record, index) => {
//                     // 获取每个记录的音频URL
//                     const urls = record.URL.split(';'); // 分割URL字段
//                     const audioUrl = urls.find(url => url.includes('slwa_b')); // 选择包含音频文件的URL

//                     if (audioUrl) {
//                         // 创建音频元素和播放按钮
//                         const audioElement = document.createElement('audio');
//                         audioElement.src = audioUrl;
//                         audioElement.controls = true;
//                         audioElement.id = `audio${index}`;

//                         const playButton = document.createElement('button');
//                         playButton.textContent = `Play Audio ${index + 1}`;
//                         playButton.onclick = () => audioElement.play();

//                         // 将音频元素和按钮添加到页面中
//                         audioContainer.appendChild(audioElement);
//                         audioContainer.appendChild(playButton);
//                     } else {
//                         console.error(`No valid audio URL found for record ${index + 1}`);
//                     }
//                 });
//             } else {
//                 audioContainer.textContent = 'No audio records found.';
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             audioContainer.textContent = 'Failed to load audio data.';
//         });
// });
