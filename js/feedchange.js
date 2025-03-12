document.addEventListener('DOMContentLoaded', function() {
    var feedStorageState = JSON.parse(localStorage.getItem('feedStorageState'));

    if (feedStorageState && feedStorageState.length > 0) {
        var boxes = document.querySelectorAll('.box.collectible');
        feedStorageState.forEach(function(feed, index) {
            if (index < boxes.length) {
                var img = document.createElement('img');
                img.setAttribute('data-original-id', feed.id);
                img.src = feed.src;
                img.alt = feed.alt;
                img.className = feed.className;
                boxes[index].appendChild(img);
            }
        });
    } else {
        console.warn('未找到饲料储存箱的状态。');
    }

    // 您可以在此添加其他逻辑，例如给鸟喂食等
});
