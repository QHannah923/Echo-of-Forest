// document.addEventListener('DOMContentLoaded', function() {
//     var earthy = document.getElementById('earthy');
//     var earthworms = document.getElementById('earthworms');
//     var seed = document.getElementById('seed');
//     var berry = document.getElementById('berry');
//     var earthwormsShown = false;
//     var seedShown = false;
//     var berryShown = false;
//     var collectedFeeds = 0;

//     var boxes = document.querySelectorAll('.box.collectible');

//     // 修改 earthy 的点击事件处理函数
//     earthy.addEventListener('click', function() {
//         if (!earthwormsShown) {
//             earthworms.classList.remove('hidden');
//             earthworms.classList.add('show-earthworms');
//             earthwormsShown = true;
//         }
//         if (!seedShown) {
//             seed.classList.remove('hidden');
//             seed.classList.add('show-seed');
//             seedShown = true;
//         }
//         if (!berryShown) {
//             berry.classList.remove('hidden');
//             berry.classList.add('show-berry');
//             berryShown = true;
//         }
//     });

//     // earthworms 的点击事件
//     earthworms.addEventListener('click', function() {
//         // 将 earthworms 移动到左侧边栏的下一个空箱子中
//         if (collectedFeeds < boxes.length) {
//             var targetBox = boxes[collectedFeeds];
//             collectedFeeds++;

//             // 克隆 earthworms 图片，添加到箱子中
//             var wormClone = earthworms.cloneNode(true);
//             wormClone.removeAttribute('id');     // 移除 id 属性，避免重复
//             wormClone.style.width = '';          // 移除内联样式，让 CSS 生效
//             wormClone.style.height = '';
//             wormClone.style.position = 'static'; // 重置定位
//             wormClone.style.margin = '0';        // 重置外边距
//             wormClone.classList.remove('show-earthworms');
//             wormClone.onclick = null;            // 移除点击事件

//             targetBox.appendChild(wormClone);

//             // 隐藏场景中的 earthworms 图片
//             earthworms.style.display = 'none';

//             // 更新 Feeds 计数
//             var feedsBox = document.querySelector('.box.feeds');
//             feedsBox.textContent = 'Feeds ' + collectedFeeds + '/10';

//             // 重置 earthwormsShown，使得可以再次生成
//             earthwormsShown = false;

//             // 保存状态并检查是否完成
//             saveFeedStorageState();
//             if (collectedFeeds === 10) {
//                 window.location.href = 'nextpage.html';
//             }
//         }
//     });

//     // seed 的点击事件
//     seed.addEventListener('click', function() {
//         // 将 seed 移动到左侧边栏的下一个空箱子中
//         if (collectedFeeds < boxes.length) {
//             var targetBox = boxes[collectedFeeds];
//             collectedFeeds++;

//             // 克隆 seed 图片，添加到箱子中
//             var seedClone = seed.cloneNode(true);
//             seedClone.removeAttribute('id');     // 移除 id 属性，避免重复
//             seedClone.style.width = '';          // 移除内联样式，让 CSS 生效
//             seedClone.style.height = '';
//             seedClone.style.position = 'static'; // 重置定位
//             seedClone.style.margin = '0';        // 重置外边距
//             seedClone.classList.remove('show-seed');
//             seedClone.classList.add('seed-in-box');  // 添加用于箱子内的特定类
//             seedClone.onclick = null;            // 移除点击事件

//             targetBox.appendChild(seedClone);

//             // 隐藏场景中的 seed 图片
//             seed.style.display = 'none';

//             // 更新 Feeds 计数
//             var feedsBox = document.querySelector('.box.feeds');
//             feedsBox.textContent = 'Feeds ' + collectedFeeds + '/10';

//             // 重置 seedShown，使得可以再次生成
//             seedShown = false;
//         }
//     });
// });

// // seed 的点击事件
// berry.addEventListener('click', function() {
//     // 将 seed 移动到左侧边栏的下一个空箱子中
//     if (collectedFeeds < boxes.length) {
//         var targetBox = boxes[collectedFeeds];
//         collectedFeeds++;

//         // 克隆 seed 图片，添加到箱子中
//         var berryClone = berry.cloneNode(true);
//         berryClone.removeAttribute('id');     // 移除 id 属性，避免重复
//         berryClone.style.width = '';          // 移除内联样式，让 CSS 生效
//         berryClone.style.height = '';
//         berryClone.style.position = 'static'; // 重置定位
//         berryClone.style.margin = '0';        // 重置外边距
//         berryClone.classList.remove('show-berry');
//         berryClone.classList.add('berry-in-box');  // 添加用于箱子内的特定类
//         berryClone.onclick = null;            // 移除点击事件

//         targetBox.appendChild(berryClone);

//         // 隐藏场景中的 seed 图片
//         berry.style.display = 'none';

//         // 更新 Feeds 计数
//         var feedsBox = document.querySelector('.box.feeds');
//         feedsBox.textContent = 'Feeds ' + collectedFeeds + '/10';

//         // 重置 seedShown，使得可以再次生成
//         berryShown = false;

//         saveFeedStorageState();
//         if (collectedFeeds === 10) {
//             window.location.href = 'nextpage.html';
//         }
//     }

//     function saveFeedStorageState() {
//         var feedStorageState = [];
//         var boxes = document.querySelectorAll('.box.collectible');
//         boxes.forEach(function(box) {
//             var img = box.querySelector('img');
//             if (img) {
//                 feedStorageState.push({
//                     id: img.id,
//                     src: img.src,
//                     alt: img.alt,
//                     className: img.className
//                 });
//             }
//         });
//         localStorage.setItem('feedStorageState', JSON.stringify(feedStorageState));
//     }
    
// });

document.addEventListener('DOMContentLoaded', function() {
    var earthy = document.getElementById('earthy');
    var earthworms = document.getElementById('earthworms');
    var seed = document.getElementById('seed');
    var berry = document.getElementById('berry');
    var earthwormsShown = false;
    var seedShown = false;
    var berryShown = false;
    var collectedFeeds = 0;

    var boxes = document.querySelectorAll('.box.collectible');

    // 修改 earthy 的点击事件处理函数
    earthy.addEventListener('click', function() {
        if (!earthwormsShown) {
            earthworms.classList.remove('hidden');
            earthworms.classList.add('show-earthworms');
            earthwormsShown = true;
        }
        if (!seedShown) {
            seed.classList.remove('hidden');
            seed.classList.add('show-seed');
            seedShown = true;
        }
        if (!berryShown) {
            berry.classList.remove('hidden');
            berry.classList.add('show-berry');
            berryShown = true;
        }
    });

    // earthworms 的点击事件
    earthworms.addEventListener('click', function() {
        // 将 earthworms 移动到左侧边栏的下一个空箱子中
        if (collectedFeeds < boxes.length) {
            var targetBox = boxes[collectedFeeds];
            collectedFeeds++;

            // 克隆 earthworms 图片，添加到箱子中
            var wormClone = earthworms.cloneNode(true);
            wormClone.removeAttribute('id');     // 移除 id 属性，避免重复
            wormClone.style.width = '';          // 移除内联样式，让 CSS 生效
            wormClone.style.height = '';
            wormClone.style.position = 'static'; // 重置定位
            wormClone.style.margin = '0';        // 重置外边距
            wormClone.classList.remove('show-earthworms');
            wormClone.onclick = null;            // 移除点击事件

            targetBox.appendChild(wormClone);

            // 隐藏场景中的 earthworms 图片
            earthworms.style.display = 'none';

            // 更新 Feeds 计数
            var feedsBox = document.querySelector('.box.feeds');
            feedsBox.textContent = 'Feeds ' + collectedFeeds + '/10';

            // 重置 earthwormsShown，使得可以再次生成
            earthwormsShown = false;

            // 保存状态并检查是否完成
            saveFeedStorageState();
            if (collectedFeeds === 10) {
                window.location.href = 'nextpage.html'; // 替换为您的目标页面
            }
        }
    });

    // seed 的点击事件
    seed.addEventListener('click', function() {
        // 将 seed 移动到左侧边栏的下一个空箱子中
        if (collectedFeeds < boxes.length) {
            var targetBox = boxes[collectedFeeds];
            collectedFeeds++;

            // 克隆 seed 图片，添加到箱子中
            var seedClone = seed.cloneNode(true);
            seedClone.removeAttribute('id');     // 移除 id 属性，避免重复
            seedClone.style.width = '';          // 移除内联样式，让 CSS 生效
            seedClone.style.height = '';
            seedClone.style.position = 'static'; // 重置定位
            seedClone.style.margin = '0';        // 重置外边距
            seedClone.classList.remove('show-seed');
            seedClone.classList.add('seed-in-box');  // 添加用于箱子内的特定类
            seedClone.onclick = null;            // 移除点击事件

            targetBox.appendChild(seedClone);

            // 隐藏场景中的 seed 图片
            seed.style.display = 'none';

            // 更新 Feeds 计数
            var feedsBox = document.querySelector('.box.feeds');
            feedsBox.textContent = 'Feeds ' + collectedFeeds + '/10';

            // 重置 seedShown，使得可以再次生成
            seedShown = false;

            // 保存状态并检查是否完成
            saveFeedStorageState();
            if (collectedFeeds === 10) {
                window.location.href = 'nextpage.html'; // 替换为您的目标页面
            }
        }
    });

    // berry 的点击事件
    berry.addEventListener('click', function() {
        // 将 berry 移动到左侧边栏的下一个空箱子中
        if (collectedFeeds < boxes.length) {
            var targetBox = boxes[collectedFeeds];
            collectedFeeds++;

            // 克隆 berry 图片，添加到箱子中
            var berryClone = berry.cloneNode(true);
            berryClone.removeAttribute('id');     // 移除 id 属性，避免重复
            berryClone.style.width = '';          // 移除内联样式，让 CSS 生效
            berryClone.style.height = '';
            berryClone.style.position = 'static'; // 重置定位
            berryClone.style.margin = '0';        // 重置外边距
            berryClone.classList.remove('show-berry');
            berryClone.classList.add('berry-in-box');  // 添加用于箱子内的特定类
            berryClone.onclick = null;            // 移除点击事件

            targetBox.appendChild(berryClone);

            // 隐藏场景中的 berry 图片
            berry.style.display = 'none';

            // 更新 Feeds 计数
            var feedsBox = document.querySelector('.box.feeds');
            feedsBox.textContent = 'Feeds ' + collectedFeeds + '/10';

            // 重置 berryShown，使得可以再次生成
            berryShown = false;

            // 保存状态并检查是否完成
            saveFeedStorageState();
            if (collectedFeeds === 10) {
                window.location.href = 'nextpage.html'; // 替换为您的目标页面
            }
        }
    });

    // 定义 saveFeedStorageState 函数
    function saveFeedStorageState() {
        var feedStorageState = [];
        boxes.forEach(function(box) {
            var img = box.querySelector('img');
            if (img) {
                feedStorageState.push({
                    id: img.id,
                    src: img.src,
                    alt: img.alt,
                    className: img.className
                });
            }
        });
        localStorage.setItem('feedStorageState', JSON.stringify(feedStorageState));
    }

});
