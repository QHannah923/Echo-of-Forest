const feeds = document.querySelectorAll('.feed-item');
const nextPageButton = document.getElementById('nextPageButton');

// 检查是否所有的 feed 都被收集
function checkAllCollected() {
  const allCollected = Array.from(feeds).every(feed => 
    feed.classList.contains('collected') // 用一个类来标识已经收集的状态
  );

  if (allCollected) {
    nextPageButton.style.display = 'block'; // 显示按钮
  }
}

// 为每个 feed 添加点击事件，模拟收集行为
feeds.forEach(feed => {
  feed.addEventListener('click', () => {
    feed.classList.add('collected'); // 标记该 feed 已被收集
    checkAllCollected(); // 检查是否所有 feed 已被收集
  });
});

// 绑定按钮的点击事件，跳转到第二个页面
nextPageButton.addEventListener('click', () => {
  window.location.href = 'birds.html'; // 跳转到第二个页面
});
