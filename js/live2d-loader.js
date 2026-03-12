// live2d-loader.js
(function() {
  const script = document.createElement('script');
  script.src = 'https://unpkg.com/live2d-widget@3.1.4/lib/L2Dwidget.min.js';
  script.onload = () => {
    L2Dwidget.init({
      model: {
        jsonPath: '/destroy/model.json',
        scale: 1.1 // 对应你想要的缩放
      },
      display: {
        width: 350,
        height: 600,
        position: 'left',
        hOffset: -25,
        vOffset: -110
      },
      mobile: {
        show: false,  // 移动端不显示
        scale: 0.9
      },
      react: {
        opacity: 0.7  // 透明度
      }
    });
  };
  document.body.appendChild(script);
})();