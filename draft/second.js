// document.addEventListener('DOMContentLoaded', function () {
//     const feedsBox = document.getElementById('feed-list');
//     const message = document.getElementById('message');
//     let collectedFeeds = JSON.parse(localStorage.getItem('collectedFeeds')) || [];

//     // 初始化页面，显示Feed列表
//     function loadFeeds() {
//         feedsBox.innerHTML = '';
//         collectedFeeds.forEach((feed, index) => {
//             const div = document.createElement('div');
//             div.textContent = `${index + 1}. ${feed}`;
//             feedsBox.appendChild(div);
//         });
//     }

//     // 喂食逻辑：移除第一个Feed并更新 localStorage
//     document.getElementById('feed-bird').addEventListener('click', function () {
//         if (collectedFeeds.length > 0) {
//             const feed = collectedFeeds.shift(); // 移除第一个Feed
//             localStorage.setItem('collectedFeeds', JSON.stringify(collectedFeeds));
//             message.textContent = `已喂食: ${feed}`;
//             loadFeeds();
//         } else {
//             message.textContent = '所有Feed已喂完！';
//         }
//     });

//     loadFeeds(); // 页面加载时初始化
// });


document.addEventListener('DOMContentLoaded', function () {
    const feedsBox = document.querySelector('.box.feeds');
    const collectedFeeds = JSON.parse(localStorage.getItem('collectedFeeds')) || [];

    // 检查是否有已收集的数据
    if (collectedFeeds.length === 0) {
        console.warn('No feeds collected. Redirecting to the first page.');
        window.location.href = 'feed.html';  // 返回页面一
    }

    // 显示收集的 feed
    collectedFeeds.forEach(feedClass => {
        const feedItem = document.createElement('div');
        feedItem.className = feedClass;
        feedItem.textContent = `Feed: ${feedClass}`;
        feedsBox.appendChild(feedItem);
    });

    // 喂鸟按钮事件
    document.getElementById('feedButton').addEventListener('click', function () {
        alert('鸟儿已经被喂食！');
        localStorage.removeItem('collectedFeeds');  // 清除数据
    });
});

