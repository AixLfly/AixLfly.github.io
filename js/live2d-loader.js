// live2d-loader.js
(function() {
  const script = document.createElement('script');
  script.src = 'https://unpkg.com/live2d-widget@3.1.4/lib/L2Dwidget.min.js';
  script.onload = () => {
    L2Dwidget.init({
      model: {
        jsonPath: '/destroy/model.json', // 指向你的模型
        scale: 1.1                       // 缩放，可调
      },
      display: {
        width: 350,
        height: 600,
        position: 'left',
        hOffset: -25,
        vOffset: -110
      },
      mobile: {
        show: false,  // 移动端隐藏
        scale: 0.9
      },
      react: {
        opacity: 0.7
      },
      hitAreas: [
        { name: "body", id: "D_REF.BODY" },
        { name: "head", id: "D_REF.HEAD" },
        { name: "leg", id: "D_REF.LEG" }
      ],
      motion: {
        idle: [
          { file: 'motions/daiji_idle_02.mtn' },
          { file: 'motions/broken_1.mtn' },
          { file: 'motions/broken_2.mtn' },
          { file: 'motions/broken_3.mtn' },
          { file: 'motions/broken_4.mtn' },
          { file: 'motions/broken_5.mtn' }
        ]
      }
    });
  };
  document.body.appendChild(script);
})();