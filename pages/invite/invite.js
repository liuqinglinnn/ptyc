
import drawQrcode from '../../utils/dist_weapp.qrcode.esm.js'
Page({
  data: {
    qrcodeWidth: 0
  },
  onLoad: function (e) {
    drawQrcode({
      width: 200,
      height: 200,
      canvasId: 'myQrcode',
      background: '#ffffff',
      foreground: '#000000',
      text: '学姐中秋快乐',  // 必须，二维码内容
      image: {
        imageResource: '',
        dx: 70,
        dy: 70,
        dWidth: 60,
        dHeight: 60
      }
    })
  },
})