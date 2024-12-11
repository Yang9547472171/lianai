document.addEventListener('DOMContentLoaded', function() {
    // 获取开始测评按钮
    const startButton = document.querySelector('.landing__cta');
    
    // 添加点击事件
    startButton.addEventListener('click', function() {
        // 添加点击反馈效果
        this.style.transform = 'scale(0.95)';
        this.style.opacity = '0.9';
        
        // 延迟跳转，让用户看到按钮反馈
        setTimeout(() => {
            window.location.href = '/assessment/';
        }, 200);
    });
    
    // 鼠标离开时恢复按钮状态
    startButton.addEventListener('mouseup', function() {
        this.style.transform = '';
        this.style.opacity = '';
    });
    
    // 触摸设备的处理
    startButton.addEventListener('touchend', function() {
        this.style.transform = '';
        this.style.opacity = '';
    });
}); 