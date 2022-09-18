// pages/layout/index.js
Page({
  data: {
    list: [],
    score: "",
  },
  onLoad(options) {
    let that = this;
    let request = wx.request({
      url: 'http://localhost:8082/WarehouseLayout/optimize',
      timeout: 10000000000,
      success: (res) => {
        console.log(res);
        that.setData({ list: res.data.data, score: res.data.data[0].score });
      },
    });
  },
  onShow() {
    let request = wx.request({
      url: 'http://localhost:8082/WarehouseLayout/optimize',
      timeout: 10000000000,
      success: (res) => {
        console.log(res);
        that.setData({ list: res.data.data });
      },
    });
  },
})