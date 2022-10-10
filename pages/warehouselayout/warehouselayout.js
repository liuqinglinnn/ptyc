// Page({
//   data: {
//     scale: 0,
//     width: 100,
//     height: 100.
//   },
//   onLoad: function (e) {
//     let that = this
//     let windowWidth = wx.getSystemInfoSync().windowWidth;
//     let windowHeight = wx.getSystemInfoSync().windowHeight;

//     that.setData({ width: windowWidth, height: windowHeight });
//   },
//   onChange(e) {
//     console.log(e.detail)
//   },

//   onScale(e) {
//     console.log(e.detail)
//   }
// })
Page({
  data: {
     originUrl:"http://riwbp7bw1.hn-bkt.clouddn.com/eca12c4441774de182610cedde759311.jpg",
     ratio: 102 / 152,
   },
   chooseImg:function(){
     var that = this
     wx.chooseImage({
       count: 1,
       sizeType: ['original'],
       sourceType: ['album', 'camera'],
       success(res) {
         that.setData({
           originUrl: res.tempFilePaths[0],
         })
       }
     })
   }
 })
 