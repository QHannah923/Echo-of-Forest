// 获取元素
var treeContainer = document.getElementById('leaf-container');
var popup = document.getElementById('popup');
var closePopup = document.getElementById('closepopup'); // 确保选择器和 HTML 一致
var birdsound = document.getElementById('birdsound1'); // 获取音频元素

// 点击叶子时出现鸟
treeContainer.addEventListener('click', function() {
    // 获取所有的叶子元素
    var leaves = document.querySelectorAll('.leaf');

    // 为每个叶子添加 shake 动画
    leaves.forEach(function(leaf) {
        leaf.classList.remove('shake');
        void leaf.offsetWidth; // 触发 reflow 以重置动画
        leaf.classList.add('shake');
    });

    // 获取所有鸟类元素并添加 fly 动画
    var birds = document.querySelectorAll('.bird');
    birds.forEach(function(bird) {
        if (!bird.classList.contains('fly')) {
            bird.classList.add('fly');
        }
    });

//     // 立即播放音频
//      if (birdsound) {
//         birdsound.play().then(function() {
//             // 音频开始播放后
//             console.log("sound play");

//             // 10秒后停止播放音频
//             setTimeout(function() {
//                 birdsound.pause();
//                 birdsound.currentTime = 0; // 重置音频到开头
//             }, 10000); // 10000 毫秒 = 10 秒
//         }).catch(function(error) {
//             console.log("sound play fail: ", error);
//         });
//     }
});

// 点击鸟时显示弹窗
document.querySelectorAll('.bird').forEach(function(bird) {
    bird.addEventListener('click', function() {
        popup.style.display = 'block';
    });

     // 添加播放鸟声的代码
     if (birdsound) {
        birdsound.play().then(function() {
            console.log("sound play");
            setTimeout(function() {
                birdsound.pause();
                birdsound.currentTime = 0;
            }, 10000);
        }).catch(function(error) {
            console.log("sound play fail: ", error);
        });
    }
});


// 添加关闭弹窗的功能
closePopup.addEventListener('click', function() {
    popup.style.display = 'none';
});

// 点击弹窗外部时关闭弹窗
window.addEventListener('click', function(event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});






