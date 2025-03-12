document.addEventListener('DOMContentLoaded', function () {
    let collectedFeeds = [];  // 用于存储已收集的 feed
    const totalFeeds = 10;    // 假设需要收集 10 个 feed
    const feedsBox = document.querySelector('.box.feeds');

    // 收集完成后的跳转页面 URL（确保路径正确）
    const nextPageURL = 'birds.html';  // 修改为你自己的页面路径

    // 收集 feed 并放入收集箱
    function moveItemToBox(item, className) {
        if (!collectedFeeds.includes(className)) {
            const clone = item.cloneNode(true);
            clone.removeAttribute('id');
            clone.style.position = 'static';
            clone.style.margin = '0';
            collectedFeeds.push(className);  // 保存已收集的 feed

            feedsBox.appendChild(clone);
            item.style.display = 'none';

            updateFeedCount();
            checkIfAllFeedsCollected();  // 每次收集后检查是否已完成
        }
    }

    // 更新收集进度显示
    function updateFeedCount() {
        feedsBox.textContent = `Feeds: ${collectedFeeds.length} / ${totalFeeds}`;
    }

    // 检查是否收集完所有 feed
    function checkIfAllFeedsCollected() {
        if (collectedFeeds.length === totalFeeds) {
            // 保存数据到 localStorage
            localStorage.setItem('collectedFeeds', JSON.stringify(collectedFeeds));

            // 确保路径正确，跳转到第二个页面
            console.log('All feeds collected! Redirecting...');
            window.location.href = nextPageURL;
        }
    }

    // 示例：绑定收集事件
    document.getElementById('earthworms').addEventListener('click', function () {
        moveItemToBox(this, 'earthworms');
    });

    document.getElementById('seed').addEventListener('click', function () {
        moveItemToBox(this, 'seed');
    });

    document.getElementById('nectar').addEventListener('click', function () {
        moveItemToBox(this, 'nectar');
    });

    document.getElementById('greenfly').addEventListener('click', function () {
        moveItemToBox(this, 'greenfly');
    });

    document.getElementById('mammal').addEventListener('click', function () {
        moveItemToBox(this, 'mammal');
    });

    document.getElementById('smallbirds').addEventListener('click', function () {
        moveItemToBox(this, 'smallbirds');
    });

    document.getElementById('frog').addEventListener('click', function () {
        moveItemToBox(this, 'frog');
    });

    document.getElementById('fish').addEventListener('click', function () {
        moveItemToBox(this, 'fish');
    });

    document.getElementById('aquaticPlant').addEventListener('click', function () {
        moveItemToBox(this, 'aquaticPlant');
    });

    document.getElementById('berry').addEventListener('click', function () {
        moveItemToBox(this, 'berry');
    });


});
