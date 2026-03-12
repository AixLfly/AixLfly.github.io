// live2d-loader.js（安全版）
(function() {
  // 防止重复加载
  if (window._live2d_loaded) return;
  window._live2d_loaded = true;

  const script = document.createElement('script');
  script.src = 'https://unpkg.com/live2d-widget@3.1.4/lib/L2Dwidget.min.js';
  script.onload = () => {
    // 确认页面上没有已有实例
    if (document.querySelector('.live2d')) return;

    L2Dwidget.init({
      model: {
        jsonPath: '/destroy/model.json',
        scale: 1.1
      },
      display: {
        width: 350,
        height: 570,
        position: 'left',
        hOffset: -25,
        vOffset: -110
      },
      mobile: {
        show: false,
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