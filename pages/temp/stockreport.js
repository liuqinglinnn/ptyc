var wxCharts = require('../../utils/wxcharts.js');
Page({
  data: {
    //模拟
    simdata: [{ name: "七日入库", num: 9000 }, { name: "七日出库", num: 6300 }, { name: "今日入库", num: 2000 }, { name: "今日出库", num: 300 }],
    simdata2: [{ name: "七日入库", num: 203 }, { name: "七日出库", num: 167 }, { name: "今日入库", num: 44 }, { name: "今日出库", num: 20 }],
  },
  //点击显示
  touchHandler: function (e) {
    console.log(lineChart.getCurrentDataIndex(e));
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
      background: 'rgb(235,235,235)',
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
        title: '总数',
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
    lineChart2 = new wxCharts({
      canvasId: 'lineCanvas2',
      type: 'line',
      categories: simulationData.categories,
      animation: true,
      background: 'rgb(235,235,235)',
      series: [{
        name: '入库量',
        data: [23, 11, 44, 15, 11, 55, 44],
        format: function (val, name) {
          return val.toFixed(2);
        }
      }, {
        name: '出库量',
        data: [30, 20, 10, 10, 44, 33, 20],
        format: function (val, name) {
          return val.toFixed(2);
        }
      }],
      xAxis: {
        disableGrid: true
      },
      yAxis: {
        title: '总数',
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
});