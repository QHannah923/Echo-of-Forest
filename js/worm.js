document.addEventListener('DOMContentLoaded', function() {
    // 获取 earthy2 元素
    var earthy2 = document.querySelector('.earthy2');
    // 获取虫子元素
    var worm = document.querySelector('.worm');
    // 获取所有可收集的格子
    var collectibleBoxes = document.querySelectorAll('.collectible');
    // 标志，用来追踪虫子是否已经被放置在格子中
    let wormPlacedInBox = false;
    // 标志，用来追踪虫子是否已经掉落
    let wormDropped = false;

    // 点击 earthy2 使虫子掉落
    earthy2.addEventListener('click', function() {
        if (!wormDropped) {
            worm.classList.add('show'); // 显示虫子
            wormDropped = true; // 标记虫子已掉落
        }
    });

    // 点击虫子将其移动到方格中
    worm.addEventListener('click', function() {
        if (wormDropped && !wormPlacedInBox && collectibleBoxes.length > 0) {
            var targetBox = collectibleBoxes[0]; // 假设总是放在第一个格子
            var boxRect = targetBox.getBoundingClientRect();

            // 计算格子中心位置，考虑虫子自身尺寸进行位置调整
            var centerX = window.scrollX + boxRect.left + boxRect.width / 2;
            var centerY = window.scrollY + boxRect.top + boxRect.height / 2;
            var wormWidth = worm.offsetWidth;
            var wormHeight = worm.offsetHeight;

            // 更新虫子的位置，使其居中
            worm.style.position = 'fixed';
            worm.style.left = (centerX - wormWidth / 2) + 'px';
            worm.style.top = (centerY - wormHeight / 2) + 'px';

            // 将虫子显示在格子中
            targetBox.appendChild(worm);
            worm.classList.add('show');
            wormPlacedInBox = true; // 标记虫子已放置在格子中
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var worm = document.getElementById('worm');
  
    worm.addEventListener('dragstart', function(event) {
      // 设置拖动数据
      event.dataTransfer.setData("text/plain", worm.id);
    });
  });
  
