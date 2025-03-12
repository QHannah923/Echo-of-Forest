// 页面加载后自动弹出游戏规则模态框
window.onload = function() {
    const modal = document.getElementById('gameRulesModal');
    const closeBtn = document.getElementById('closeBtn');
    const exploreBtn = document.getElementById('exploreBtn');
    
    // 显示模态框，确保它居中
    modal.style.display = 'flex';

    // 点击关闭按钮时隐藏模态框
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    // 点击Explore按钮时隐藏模态框
    exploreBtn.onclick = function() {
        modal.style.display = 'none';
    }

    // 点击模态框外部时隐藏模态框
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }

    
}