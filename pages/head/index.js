var wxCharts = require('../../utils/wxcharts.js');
Page({
  data: {
    simdata: [{ name: "七日入库", num: 9000 }, { name: "七日出库", num: 6300 }, { name: "今日入库", num: 2000 }, { name: "今日出库", num: 300 }],
  },
  enterwarehouse(e) {
    wx.navigateTo({
      url: '../enterWarehouse/enterWarehouse',
      complete: (res) => { },
      fail: (res) => { },
      success: (result) => { },
    })
  },
  enterstock(e) {
    wx.navigateTo({
      url: '../stockreport/stockreport',
      complete: (res) => { },
      fail: (res) => { },
      success: (result) => { },
    })
  },
  enterlayout(e) {
    wx.navigateTo({ 
      url: '../warehouselayout/warehouselayout',
      complete: (res) => { },
      fail: (res) => { },
      success: (result) => { },
    })
  },
  enterstockwarm(e){
    wx.navigateTo({ 
      url: '../stockwarm/stockwarm',
      complete: (res) => { },
      fail: (res) => { },
      success: (result) => { },
    })
  },
  entertimeoutwarm(e){
    wx.navigateTo({ 
      url: '../timeoutwarm/timeoutwarm',
      complete: (res) => { },
      fail: (res) => { },
      success: (result) => { },
    })
  },
  //点击显示
  touchHandler: function (e) {
    lineChart.showToolTip(e, {
      background: '#7cb5ec',
      format: function (item, category) {
        return category + ' ' + item.name + ':' + item.data
      }
    });
  },
  //创建数据
  getstockData: function () {
    var categories = [];
    var data = [];
    for (var i = 3; i < 10; i++) {
      categories.push('2022/4/' + i);
    }
    data[0] = 1000;
    data[1] = 800;
    data[2] = 2000;
    data[3] = 600;
    data[4] = 800;
    data[5] = 1800;
    data[6] = 2000;
    return {
      categories: categories,
      data: data
    }
  },
  onLoad: function (e) {
    var windowWidth = wx.getSystemInfoSync().windowWidth
    var simulationData = this.getstockData();
    lineChart = new wxCharts({
      canvasId: 'lineCanvas',
      type: 'line',
      categories: simulationData.categories,
      animation: true,
      background: 'rgb(255,255,255)',
      series: [{
        name: '入库量',
        data: simulationData.data,
        format: function (val, name) {
          return val.toFixed(2);
        }
      }, {
        name: '出库量',
        data: [1500, 200, 500, 300, 2000, 1500, 300],
        format: function (val, name) {
          return val.toFixed(2);
        }
      }],
      xAxis: {
        disableGrid: true
      },
      yAxis: {
        title: '库存',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 0
      },
      width: windowWidth - 20,
      height: 200,
      dataLabel: false,
      dataPointShape: true,
      extra: {
        lineStyle: 'curve'
      }
    });
  }

})

