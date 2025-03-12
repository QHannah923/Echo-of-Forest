// // 获取元素
// var popup = document.getElementById('popup');
// var closePopup = document.getElementById('closepopup');
// var birdSound = document.getElementById('birdsound1');

// // 确保页面加载时音频不自动播放
// document.addEventListener('DOMContentLoaded', function() {
//     if (birdSound) {
//         birdSound.pause();
//         birdSound.currentTime = 0; // 重置音频到开头
//     }
// });

// // 点击鸟时显示弹窗和播放音频
// document.querySelectorAll('.bird').forEach(function(bird) {
//     bird.addEventListener('click', function() {
//         // 显示弹窗
//         popup.style.display = 'block';

//         // 播放音频
//         if (birdSound) {
//             birdSound.play().then(function() {
//                 console.log("sound play");

//                 // 10秒后停止播放音频
//                 setTimeout(function() {
//                     birdSound.pause();
//                     birdSound.currentTime = 0; // 重置音频到开头
//                 }, 10000); // 10000 毫秒 = 10 秒
//             }).catch(function(error) {
//                 console.log("sound play fail: ", error);
//             });
//         }
//     });
// });

// // 添加关闭弹窗的功能
// closePopup.addEventListener('click', function() {
//     popup.style.display = 'none';
// });

// // 点击弹窗外部时关闭弹窗
// window.addEventListener('click', function(event) {
//     if (event.target === popup) {
//         popup.style.display = 'none';
//     }
// });
